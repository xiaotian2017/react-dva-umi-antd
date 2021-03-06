import React from 'react';
import { Affix, Menu, Dropdown, Icon } from 'antd';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';
import router from 'umi/router';

const MenuItem = Menu.Item;
const index = ({ location }) => {
  const onLogout = () => {
    localStorage.clear();
    router.push('/login');
  };
  const menu = (
    <Menu>
      <MenuItem>
        <span onClick={onLogout}>退出</span>
      </MenuItem>
    </Menu>
  );

  return (
    <Affix offsetTop={0}>
      <div className="header">
        <img className="logo" src={require('@/assets/logo.png')} alt="logo" />
        <Menu className="menus" mode="horizontal" theme="dark" selectedKeys={[location.pathname]}>
          <MenuItem key="/">
            <Link to="/">首页</Link>
          </MenuItem>
          <MenuItem key="/users">
            <Link to="/users">用户</Link>
          </MenuItem>
          <MenuItem key="/reports">
            <Link to="/reports">周报</Link>
          </MenuItem>
        </Menu>
        <div className="right">
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="#">
              <Icon type="user" style={{ marginRight: 3 }} /> {localStorage.nickname}
            </a>
          </Dropdown>
        </div>
      </div>
    </Affix>
  );
};

export default withRouter(index);
