import React, { FC } from 'react';
import 'react-tabs/style/react-tabs.css';

import { Tab, TabList, TabPanel } from 'react-tabs';
import { TabContainer } from './styles';

const TabComponent: FC = ({ children }) => {
  return (
    <TabContainer>
      <TabList>
        <Tab style={{ color: '#858199', fontSize: '12px' }}>Recebimentos</Tab>
        <Tab style={{ color: '#858199', fontSize: '12px' }}>Despesas</Tab>
        <Tab style={{ color: '#858199', fontSize: '12px' }}>Transferências</Tab>
      </TabList>
      <TabPanel
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        {/* {children} */}
      </TabPanel>
      <TabPanel
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        {/* {children} */}
      </TabPanel>
    </TabContainer>
  );
};

export default TabComponent;
