export interface TabPanelProps<K extends string | number> {
  activeTabKey?: K | null;
  children: React.ReactNode;
  tabKey: K;
}

const TabPanel = <K extends string | number = string>({
  tabKey,
  children,
  activeTabKey,
}: TabPanelProps<K>) => {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return activeTabKey === tabKey ? <>{children}</> : null;
};

export { TabPanel };
