import React, { memo } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

interface ItemType {
  id: number;
  title: string;
  content: React.ReactElement;
}

interface Props {
  items: ItemType[];
}

const MyTabs = ({ items }: Props): React.ReactElement => {
  return (
    <Tabs>
      <TabList>
        {items.map((item) => (
          <Tab key={item.id}>{item.title}</Tab>
        ))}
      </TabList>
      {items.map((item) => (
        <TabPanel key={item.id}>{item.content}</TabPanel>
      ))}
    </Tabs>
  );
};

export default memo(MyTabs);
