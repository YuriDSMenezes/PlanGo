import styled from 'styled-components';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

export const TabContainer = styled(Tabs)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 100px;
  .react-tabs__tab-list {
    border-bottom: none;
  }

  .react-tabs__tab {
    border-color: transparent;
  }

  .react-tabs__tab--selected {
    color: ${props => props.theme.colors.primary} !important;
    padding-bottom: 12px;
    border-bottom: 4px solid ${props => props.theme.colors.primary};
    background-color: transparent;
  }
`;
export const TabListOption = styled(TabList)`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: normal;
  line-height: 19.5px;
  position: absolute;
  top: 100px;
`;

export const TabOption = styled(Tab)`
  color: ${props => props.theme.colors.textLight};
`;

export const TabPanelOption = styled(TabPanel)`
  margin: 30px;
`;

export const Teste = styled.div`
  color: ${props => props.theme.colors.primary};
  border-bottom: 4px solid #5e00b9;
`;
