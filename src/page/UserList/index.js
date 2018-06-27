import React, {Component} from 'react';
import {Form, Input, Button, Table} from 'antd';
import {observer, inject} from 'mobx-react';
import './index.less';

const FormItem = Form.Item;
const columns = [
    {
        title: '头像',
        dataIndex: 'avatar',
        key: 'avatar'
    },
    {
        title: '用户昵称',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '邮箱',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: '所属团队',
        dataIndex: 'team',
        key: 'team'
    },
    {
        title: '注册时间',
        dataIndex: 'time',
        key: 'time'
    }, {
        title: '上次登录',
        dataIndex: 'lasttime',
        key: 'lasttime'
    }, {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate'
    },
];

@inject('stores')
@observer
class UserList extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
            }
        })
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="user-page">
                <div className="top-title">
                    <span className='small-title'>用户列表</span>
                    <span className="strong-title">查询表格</span>
                </div>
                <div className="container">
                    <div className="middle-numbers">
                        <div className="total-number">
                            <span>用户总数</span>
                            <span>399</span>
                        </div>
                        <div className="total-number">
                            <span>昨日新增用户数</span>
                            <span>19</span>
                        </div>
                        <div className="total-number">
                            <span>上周新增用户数</span>
                            <span>120</span>
                        </div>
                    </div>
                    <div className="content">
                        <Form layout="inline" onSubmit={this.handleSubmit}>
                            <FormItem label="邮箱/昵称">
                                {getFieldDecorator('email', {
                                    rules: [
                                        {type: 'email', message: '请输入正确的邮箱地址'},
                                        {
                                            required: true, message: '邮箱不能为空'
                                        }]
                                })(
                                    <Input placeholder="请输入"/>
                                )}
                            </FormItem>
                            <FormItem label="状态">
                                <Input placeholder="请选择"/>
                            </FormItem>
                            <FormItem>
                                <Button type="primary" htmlType='submit'>查询</Button>
                            </FormItem>
                            <FormItem>
                                <Button>重置</Button>
                            </FormItem>
                        </Form>
                        <Button className="new" type="primary">新建</Button>
                        <Table className="user-table" dataSource={this.props.stores.userStore.userList.slice()}
                               columns={columns}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form.create()(UserList);