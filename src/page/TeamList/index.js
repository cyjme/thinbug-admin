import React, {Component} from 'react';
import {Form, Input, Button, Table} from 'antd';
import {inject, observer} from 'mobx-react';
import '../UserList/index.less';

const FormItem = Form.Item;
const columns = [
    {
        title: '头像',
        dataIndex: 'avatar',
        key: 'avatar'
    },
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: '团队介绍',
        dataIndex: 'introduce',
        key: 'introduce'
    },
    {
        title: '所属人',
        dataIndex: 'personal',
        key: 'personal'
    },
    {
        title: '创建时间',
        dataIndex: 'time',
        key: 'time'
    }, {
        title: '服务调用次数',
        dataIndex: 'number',
        key: 'number'
    }, {
        title: '操作',
        dataIndex: 'operate',
        key: 'operate'
    },
];

@inject('stores')
@observer
class TeamList extends Component {
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
                    <span className='small-title'>团队列表</span>
                    <span className="strong-title">团队</span>
                </div>
                <div className="container">
                    <div className="middle-numbers">
                        <div className="total-number">
                            <span>团队总数</span>
                            <span>399</span>
                        </div>
                        <div className="total-number">
                            <span>昨日新增团队</span>
                            <span>19</span>
                        </div>
                        <div className="total-number">
                            <span>上周新增团队</span>
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
                        <Table className="user-table" dataSource={this.props.stores.teamStore.teamList.slice()}
                               columns={columns}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form.create()(TeamList);
