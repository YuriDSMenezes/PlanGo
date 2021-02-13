import React, { FC, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  MenuBars,
  MenuItems,
  Items,
  MenuIconOpen,
  Label,
} from './styles';
import { SidebarData } from './sidebarData';

const Navbar: FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showNavBar = useCallback(() => {
    setSidebar(!sidebar);
  }, [sidebar]);

  return (
    <>
      <Container showSideBar={sidebar}>
        <MenuBars showSideBar={sidebar}>
          <MenuIconOpen>
            <input type="checkbox" id="checkbox-menu" />
            <Label htmlFor="checkbox-menu" onClick={showNavBar}>
              {/* <input /> */}
              <span />
              <span />
              <span />
            </Label>
          </MenuIconOpen>
          <MenuItems showSideBar={sidebar}>
            {SidebarData.map(item => {
              return (
                <Items key={item.uniqueId}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </Items>
              );
            })}
          </MenuItems>
        </MenuBars>
      </Container>
    </>
  );
};
export default Navbar;
