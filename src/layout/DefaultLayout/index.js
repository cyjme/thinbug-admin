import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {Layout, Icon, Menu, Avatar} from 'antd';
import './index.less';

const {Header, Content, Sider} = Layout;
const MenuItem = Menu.Item;

class DefaultLayout extends Component {
    state = {
        collapsed: false,
        selectedKeys: '1',
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    };
    updateSelectedKeys = (key) => {
        this.setState({
            selectedKeys: key,
        })
    };

    render() {
        return (
            <div className="default-layout-page">
                <Layout>
                    <Sider width={200} className="sider" collapsible trigger={null} collapsed={this.state.collapsed}>
                        <div className="logo">ThinBug</div>
                        <Menu theme='dark' defaultSelectedKeys={['1']} onClick={this.updateSelectedKeys} mode="inline">
                            <MenuItem key='1'>
                                <Link to="/userlist">
                                    <Icon type="user"/>
                                    <span>用户列表</span>
                                </Link>
                            </MenuItem>
                            <MenuItem key='2'>
                                <Link to="/teamlist">
                                    <Icon type="team"/>
                                    <span>团队列表</span>
                                </Link>
                            </MenuItem>
                            <MenuItem key='3'>
                                <Link to="/service">
                                    <Icon type="customer-service"/>
                                    <span>服务总览</span>
                                </Link>
                            </MenuItem>
                            <MenuItem key='4'>
                                <Link to="/publish">
                                    <Icon type="customer-service"/>
                                    <span>发布文章</span>
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#fff'}} className='header'>
                            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                  onClick={this.toggle}/>
                            <ul className='header-nav'>
                                <li>
                                    <Icon type="search"/>
                                </li>
                                <li>
                                    <Icon type="bell"/>
                                </li>
                                <li>
                                    <Avatar>J</Avatar>
                                    <span>jason</span>
                                </li>
                            </ul>
                        </Header>
                        <Content>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default withRouter(DefaultLayout);
