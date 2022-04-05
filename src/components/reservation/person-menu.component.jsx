import React from 'react';

import ReactDOM from 'react-dom';


import 'antd/dist/antd.css';

import {Menu, Dropdown, message } from 'antd';

import { DownOutlined } from '@ant-design/icons';

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };


const menu =(
    <Menu onClick={onClick} >
    <Menu.person key="1">1 person</Menu.person>
    <Menu.person key="2">2 people</Menu.person>
    <Menu.person key="3">3 people</Menu.person>
    <Menu.person key="4">4 people</Menu.person>
    <Menu.person key="5">5 people</Menu.person>
    <Menu.person key="6">6 people</Menu.person>
    <Menu.person key="7">7 people</Menu.person>
    <Menu.person key="8">8 people</Menu.person>
    <Menu.person key="9">9 people</Menu.person>
    <Menu.person key="10">10 people</Menu.person>
    <Menu.person key="11">11 people</Menu.person>
    <Menu.person key="12">12 people</Menu.person>
    <Menu.person key="13">13 people</Menu.person>
    <Menu.person key="14">14 people</Menu.person>
    <Menu.person key="15">15 people</Menu.person>
    <Menu.person key="16">16 people</Menu.person>
    <Menu.person key="17">17 people</Menu.person>
    <Menu.person key="18">18 people</Menu.person>
    <Menu.person key="19">19 people</Menu.person>
    <Menu.person key="20">20+ people</Menu.person>

    </Menu>
)

ReactDOM.render(
    <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me, Click menu item <DownOutlined />
    </a>
    </Dropdown>,
     document.getElementById('container'),
);

export default menu;