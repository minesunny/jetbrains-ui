import {
  type AsyncDataLoaderDataRef,
  type FeatureImplementation,
  makeStateUpdater,
  type TreeInstance,
} from '@headless-tree/core';

const getItemId = (itemId: string) => itemId.split('@')[0] ?? itemId;

const getDataRef = <T>(tree: TreeInstance<T>) => {
  const dataRef = tree.getDataRef<AsyncDataLoaderDataRef<T>>();
  dataRef.current.itemData ??= {};
  dataRef.current.childrenIds ??= {};
  dataRef.current.loadingDataSubs ??= {};
  dataRef.current.loadingChildrenSubs ??= {};
  return dataRef;
};

const loadItemData = async <T>(tree: TreeInstance<T>, itemId: string) => {
  const config = tree.getConfig();
  const dataRef = getDataRef(tree);
  const realItemId = getItemId(itemId);

  if (tree.getState().loadingItemData.includes(realItemId)) {
    return new Promise<T>((resolve) => {
      dataRef.current.loadingDataSubs[realItemId] ??= [];
      dataRef.current.loadingDataSubs[realItemId].push(() => {
        resolve(dataRef.current.itemData[realItemId]);
      });
    });
  }

  if (!dataRef.current.itemData[realItemId]) {
    tree.applySubStateUpdate('loadingItemData', (loadingItemData) => [
      ...loadingItemData,
      realItemId,
    ]);
  }

  const item = await config.dataLoader.getItem(itemId);
  dataRef.current.itemData[realItemId] = item;
  config.onLoadedItem?.(realItemId, item);
  tree.applySubStateUpdate('loadingItemData', (loadingItemData) =>
    loadingItemData.filter((id) => id !== realItemId),
  );
  dataRef.current.loadingDataSubs[realItemId]?.forEach((callback) =>
    callback(),
  );

  return item;
};

const loadChildrenIds = async <T>(tree: TreeInstance<T>, itemId: string) => {
  const config = tree.getConfig();
  const dataRef = getDataRef(tree);
  let childrenIds: string[];

  if (tree.getState().loadingItemChildrens.includes(itemId)) {
    return new Promise<string[]>((resolve) => {
      dataRef.current.loadingChildrenSubs[itemId] ??= [];
      dataRef.current.loadingChildrenSubs[itemId].push(() => {
        resolve(dataRef.current.childrenIds[itemId]);
      });
    });
  }

  if (!dataRef.current.childrenIds[itemId]) {
    tree.applySubStateUpdate('loadingItemChildrens', (loadingItemChildrens) => [
      ...loadingItemChildrens,
      itemId,
    ]);
  }

  if ('getChildrenWithData' in config.dataLoader) {
    const children = await config.dataLoader.getChildrenWithData(itemId);
    childrenIds = children.map((child) => child.id);
    dataRef.current.childrenIds[itemId] = childrenIds;
    children.forEach(({ id, data }) => {
      dataRef.current.itemData[id] = data;
      config.onLoadedItem?.(id, data);
    });

    config.onLoadedChildren?.(itemId, childrenIds);
    tree.rebuildTree();
    tree.applySubStateUpdate('loadingItemData', (loadingItemData) =>
      loadingItemData.filter((id) => !childrenIds.includes(id)),
    );
  } else {
    childrenIds = await config.dataLoader.getChildren(itemId);
    dataRef.current.childrenIds[itemId] = childrenIds;
    config.onLoadedChildren?.(itemId, childrenIds);
    tree.rebuildTree();
  }

  tree.applySubStateUpdate('loadingItemChildrens', (loadingItemChildrens) =>
    loadingItemChildrens.filter((id) => id !== itemId),
  );
  dataRef.current.loadingChildrenSubs[itemId]?.forEach((callback) =>
    callback(),
  );

  return childrenIds;
};

const clearCachedChildrenCache = <T>(tree: TreeInstance<T>, itemId: string) => {
  const dataRef = getDataRef(tree);
  const childIds = dataRef.current.childrenIds[itemId] ?? [];

  delete dataRef.current.childrenIds[itemId];

  childIds.forEach((childId) => {
    clearCachedChildrenCache(tree, childId);
    delete dataRef.current.itemData[getItemId(childId)];
  });
};

const asyncDataLoaderItemInstance = {
  isLoading: ({ tree, item }) =>
    tree.getState().loadingItemData.includes(item.getItemMeta().itemId) ||
    tree.getState().loadingItemChildrens.includes(item.getItemMeta().itemId),
  invalidateItemData: async ({ tree, itemId }, optimistic) => {
    if (!optimistic) {
      delete getDataRef(tree).current.itemData?.[itemId];
    }

    await loadItemData(tree, `${itemId}@refresh`);
    tree.rebuildTree();
  },
  invalidateChildrenIds: async ({ tree, itemId }, optimistic) => {
    if (!optimistic) {
      delete getDataRef(tree).current.childrenIds?.[itemId];
    }

    await loadChildrenIds(tree, itemId);
  },
  updateCachedChildrenIds: ({ tree, itemId }, childrenIds, skipUpdateTree) => {
    getDataRef(tree).current.childrenIds[itemId] = childrenIds;

    if (!skipUpdateTree) {
      tree.rebuildTree();
    }
  },
  clearCachedChildren: (
    { tree, itemId }: { tree: TreeInstance<unknown>; itemId: string },
    skipUpdateTree?: boolean,
  ) => {
    clearCachedChildrenCache(tree, itemId);

    if (!skipUpdateTree) {
      tree.rebuildTree();
    }
  },
  updateCachedData: ({ tree, itemId }, data, skipUpdateTree) => {
    getDataRef(tree).current.itemData[itemId] = data;

    if (!skipUpdateTree) {
      tree.rebuildTree();
    }
  },
  hasLoadedData: ({ tree, itemId }) =>
    getDataRef(tree).current.itemData[itemId] !== undefined,
} as FeatureImplementation['itemInstance'] & {
  clearCachedChildren: (
    opts: { tree: TreeInstance<unknown>; itemId: string },
    skipUpdateTree?: boolean,
  ) => void;
};

export const asyncDataLoaderFeature: FeatureImplementation = {
  key: 'async-data-loader',

  getInitialState: (initialState) => ({
    loadingItemData: [],
    loadingItemChildrens: [],
    ...initialState,
  }),

  getDefaultConfig: (defaultConfig, tree) => ({
    setLoadingItemData: makeStateUpdater('loadingItemData', tree),
    setLoadingItemChildrens: makeStateUpdater('loadingItemChildrens', tree),
    ...defaultConfig,
  }),

  stateHandlerNames: {
    loadingItemData: 'setLoadingItemData',
    loadingItemChildrens: 'setLoadingItemChildrens',
  },

  treeInstance: {
    waitForItemDataLoaded: ({ tree }, itemId) => tree.loadItemData(itemId),

    waitForItemChildrenLoaded: ({ tree }, itemId) =>
      tree.loadChildrenIds(itemId),

    loadItemData: async ({ tree }, itemId) => {
      const realItemId = getItemId(itemId);

      return (
        getDataRef(tree).current.itemData[realItemId] ??
        (await loadItemData(tree, itemId))
      );
    },
    loadChildrenIds: async ({ tree }, itemId) => {
      return (
        getDataRef(tree).current.childrenIds[itemId] ??
        (await loadChildrenIds(tree, itemId))
      );
    },

    retrieveItemData: ({ tree }, itemId, skipFetch = false) => {
      const config = tree.getConfig();
      const dataRef = getDataRef(tree);
      const realItemId = getItemId(itemId);

      if (dataRef.current.itemData[realItemId]) {
        return dataRef.current.itemData[realItemId];
      }

      if (!tree.getState().loadingItemData.includes(realItemId) && !skipFetch) {
        setTimeout(() => loadItemData(tree, itemId));
      }

      return config.createLoadingItemData?.() ?? null;
    },

    retrieveChildrenIds: ({ tree }, itemId, skipFetch = false) => {
      const dataRef = getDataRef(tree);
      if (dataRef.current.childrenIds[itemId]) {
        return dataRef.current.childrenIds[itemId];
      }

      if (tree.getState().loadingItemChildrens.includes(itemId) || skipFetch) {
        return [];
      }

      setTimeout(() => loadChildrenIds(tree, itemId));

      return [];
    },
  },

  itemInstance: asyncDataLoaderItemInstance as FeatureImplementation['itemInstance'],
};
