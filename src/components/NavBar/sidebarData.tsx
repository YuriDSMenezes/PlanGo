import React from 'react';

import {
  HomeIcon,
  GraphicIcon,
  AirPlaneIcon,
  UserIcon,
  CalenderIcon,
  AddUserIcon,
} from '../../assets/svgs';

export const SidebarData = [
  {
    title: 'Página inicial',
    path: '/dashboard',
    uniqueId: 1,
    icon: <HomeIcon />,
  },
  {
    title: 'Comparar',
    path: '/teste',
    uniqueId: 2,
    icon: <GraphicIcon />,
  },
  {
    title: 'Sonhos',
    path: '/sonhos',
    uniqueId: 3,
    icon: <AirPlaneIcon />,
  },
  {
    title: 'Usuário',
    path: '/teste2',
    uniqueId: 4,
    icon: <UserIcon />,
  },
  {
    title: 'Transações',
    path: '/expenses',
    uniqueId: 5,
    icon: <CalenderIcon />,
  },
  {
    title: 'Dividir despesas',
    path: '/teste2',
    uniqueId: 6,
    icon: <AddUserIcon />,
  },
];
