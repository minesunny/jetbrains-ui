import * as React from 'react';

export function getStrictContext<T>(
  displayName: string,
): [React.Provider<T>, () => T, React.Context<T | undefined>] {
  const Context = React.createContext<T | undefined>(undefined);

  function useStrictContext() {
    const context = React.useContext(Context);

    if (context === undefined) {
      throw new Error(
        `useStrictContext must be used within a ${displayName} Provider`,
      );
    }

    return context;
  }

  return [Context as React.Provider<T>, useStrictContext, Context] as const;
}
