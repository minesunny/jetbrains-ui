## ADDED Requirements

### Requirement: DynamicTabsList renders data-driven tab bar
The system SHALL render a tab bar from a `DynamicTabItem[]` array. Each item SHALL display a label, optional icon, and a close/pin button. The active tab SHALL be indicated by visual styling. The component SHALL support controlled (`activeTab` + `onActiveChange`) and uncontrolled (`defaultActiveTab`) modes.

#### Scenario: Renders tab items from array
- **WHEN** `items` contains 3 items with labels "src", "lib", "test"
- **THEN** the component renders 3 tab triggers with those labels

#### Scenario: Active tab is visually highlighted
- **WHEN** `activeTab` is set to "src" and items include an item with `id: "src"`
- **THEN** the tab trigger for "src" SHALL have active visual styling

#### Scenario: Controlled active tab switching
- **WHEN** user clicks an inactive tab trigger and `onActiveChange` is provided
- **THEN** `onActiveChange` SHALL be called with the clicked tab's `id`

#### Scenario: Uncontrolled default tab
- **WHEN** `defaultActiveTab` is "lib" and no `activeTab` is provided
- **THEN** the "lib" tab SHALL be active on initial render

### Requirement: Tab close button
Each tab item SHALL display a close button. For unpinned tabs, the button SHALL show a × icon. Clicking × on an unpinned tab SHALL call `closeTabs` with that tab's ID as a single-element array. For pinned tabs, the button SHALL show a pin icon. Clicking the pin icon on a pinned tab SHALL call `togglePin` with that tab's ID.

#### Scenario: Unpinned tab shows close button
- **WHEN** a tab item has `pinned` undefined or false
- **THEN** the tab SHALL display a × (close) icon button

#### Scenario: Clicking × closes the tab
- **WHEN** user clicks the × button on an unpinned tab with id "src"
- **THEN** `closeTabs` SHALL be called with `["src"]`

#### Scenario: Pinned tab shows pin icon
- **WHEN** a tab item has `pinned: true`
- **THEN** the tab SHALL display a 📌 (pin) icon instead of ×

#### Scenario: Clicking pin icon unpins the tab
- **WHEN** user clicks the pin icon on a pinned tab with id "main"
- **THEN** `togglePin` SHALL be called with `"main"`

### Requirement: Per-tab context menu with default actions
The component SHALL render a context menu on each tab, default ON. The default menu SHALL include: Pin/Unpin Tab (toggle), Close, Close Others, Close Left Tabs, Close Right Tabs.

#### Scenario: Default context menu renders on right-click
- **WHEN** user right-clicks any tab and `contextMenu` is undefined
- **THEN** a context menu SHALL appear with Pin Tab, Close, Close Others, Close Left Tabs, Close Right Tabs actions

#### Scenario: Pinned tab context menu shows Unpin
- **WHEN** user right-clicks a tab with `pinned: true`
- **THEN** the context menu SHALL show "Unpin Tab" instead of "Pin Tab"

### Requirement: Close actions respect pinned status
Close-range actions SHALL skip pinned tabs. On a pinned tab, the "Close" action SHALL be disabled. On any tab, "Close Others", "Close Left Tabs", and "Close Right Tabs" SHALL only include unpinned tabs in their target set.

#### Scenario: Close skips pinned tabs
- **WHEN** items are `[A, B(pinned), C, D(pinned), E]` and user triggers "Close Left Tabs" on tab C (index 2)
- **THEN** `closeTabs` SHALL be called with `["A"]` (B skipped because pinned)

#### Scenario: Close Others skips pinned tabs
- **WHEN** items are `[A, B(pinned), C, D, E(pinned)]` and user triggers "Close Others" on tab C
- **THEN** `closeTabs` SHALL be called with `["A", "D"]` (B and E skipped because pinned)

#### Scenario: Close disabled on pinned tab
- **WHEN** user right-clicks a pinned tab
- **THEN** the "Close" menu item SHALL be in disabled (grayed out) state

#### Scenario: Close-range disabled when no closable targets
- **WHEN** user right-clicks tab C and all tabs to the left are pinned
- **THEN** "Close Left Tabs" SHALL be in disabled (grayed out) state

### Requirement: Custom context menu render function
The component SHALL accept a `contextMenu` prop as a render function `(tab, index, actions) => ReactNode`. When provided, the default menu is replaced by the function's return value. The `actions` object SHALL contain pre-built action functions.

#### Scenario: Custom context menu replaces default
- **WHEN** `contextMenu` is a function `(tab, index, actions) => <CustomMenu />`
- **THEN** right-clicking a tab SHALL render `<CustomMenu />` instead of the default menu

#### Scenario: Actions object is passed to custom function
- **WHEN** custom context menu function receives `actions`
- **THEN** `actions` SHALL contain `close`, `closeOthers`, `closeLeft`, `closeRight`, `pin` functions

### Requirement: Context menu can be disabled
The component SHALL accept `contextMenu={null}` to disable context menu entirely. When disabled, no context menu SHALL appear on right-click.

#### Scenario: Null disables context menu
- **WHEN** `contextMenu` is `null`
- **THEN** right-clicking a tab SHALL NOT open any context menu

### Requirement: Menu items disabled when handlers not provided
When `closeTabs` is not provided, all close-related menu items SHALL be disabled. When `togglePin` is not provided, the Pin/Unpin menu item SHALL be disabled.

#### Scenario: No closeTabs disables close actions
- **WHEN** `closeTabs` is undefined
- **THEN** Close, Close Others, Close Left Tabs, Close Right Tabs SHALL all be disabled

#### Scenario: No togglePin disables pin action
- **WHEN** `togglePin` is undefined
- **THEN** Pin Tab / Unpin Tab SHALL be disabled
