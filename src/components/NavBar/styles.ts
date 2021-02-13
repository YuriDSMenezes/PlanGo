import { darken } from 'polished';
import styled, { css } from 'styled-components';

interface MenuProps {
  showSideBar: boolean;
}

export const Container = styled.div<MenuProps>`
  min-height: 100vh;
  width: 190px;
  display: flex;
  background-color: #5e00b9;
  transition: 0.4s;
  min-height: 100vh;
  ${props =>
    props.showSideBar &&
    css`
      width: 70px;
    `}
`;

export const MenuBars = styled.nav<MenuProps>`
  background-color: #5e00b9;
  width: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;

  ${props =>
    props.showSideBar &&
    css`
      width: 70px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      padding-left: 0px;
    `}
`;

export const MenuIconOpen = styled.div`
  #checkbox-menu {
    position: absolute;
    opacity: 0;
  }

  label {
    cursor: pointer;
    position: relative;
    display: block;
    height: 22px;
    width: 25px;
    padding-bottom: 20px;
  }

  #checkbox-menu:checked + label {
    padding-left: 0px;
  }

  #checkbox-menu:not(:checked) + label {
    padding-left: 21px;
  }

  label span {
    position: absolute;
    display: block;
    border-radius: 5px;
    background-color: #fff;
    width: 23px;
    height: 2px;
    transition: 0.25s ease-in-out;
    &:hover {
      background-color: ${darken(0.1, '#e3c8ff')};
    }
  }

  #checkbox-menu:not(:checked) + label span:nth-child(1) {
    transform: rotate(45deg);
    top: 8px;
  }

  #checkbox-menu:not(:checked) + label span:nth-child(2) {
    opacity: 0;
  }

  #checkbox-menu:not(:checked) + label span:nth-child(3) {
    transform: rotate(-45deg);
    top: 8px;
  }

  #checkbox-menu:checked + label span:nth-child(1) {
    top: 0px;
  }

  #checkbox-menu:checked + label span:nth-child(2) {
    top: 8px;
  }

  #checkbox-menu:checked + label span:nth-child(3) {
    top: 16px;
  }
`;

export const Label = styled.label``;

export const MenuItems = styled.ul<MenuProps>`
  margin-top: 10px;
  svg {
    margin-right: 10px;
    width: 25px;
  }

  ${props =>
    props.showSideBar &&
    css`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      span {
        display: none;
      }

      li {
        justify-content: center;
      }

      svg {
        margin-right: 0px;
      }
    `};
`;

export const Items = styled.li`
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  margin: 20px 0;
  a {
    color: ${props => props.theme.colors.violet};
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  &:hover {
    background-color: ${props => props.theme.colors.violet};
    a {
      color: ${props => props.theme.colors.primary};
      height: 50px;
    }
    path {
      fill: ${props => props.theme.colors.primary};
    }
  }
`;
