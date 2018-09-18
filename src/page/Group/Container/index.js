import React, {Component} from 'react';
import {Collapse, Table, Button} from 'antd';
import {inject, observer} from 'mobx-react';

const Panel = Collapse.Panel;


function callback(key) {
    console.log(key)
}

@inject('stores')
@observer
class Container extends Component {
    constructor(props) {
        super(props);
        this.groupStore = this.props.stores.groupStore;
    }

    editGroup(group) {
        this.groupStore.showGroup();
        this.groupStore.setGroupModalTypeEdit();
        console.log(group);
        this.groupStore.setCurrentGroupModalData(group);
    }

    editPath(record) {
        this.groupStore.showPathModal();
        this.groupStore.setPathModalTypeEdit();
        console.log(record);
        this.groupStore.setCurrentPathModalData(record)
    }
    builtPath() {
        this.groupStore.showPathModal();
        this.groupStore.setPathModalTypeBuilt();
    }
    deletePath(record) {
        console.log(record);
        this.groupStore.deletePath(record);
    }




    render() {
        const groupStore = this.props.stores.groupStore;
        const columns = [
            {
                title: ' 名称',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'path',
                dataIndex: 'path',
                key: 'path'
            },
            {
                title: 'serverHost',
                dataIndex: 'serverHost',
                key: 'serverHost'
            }, {
                title: ' serverPath',
                dataIndex: 'serverPath',
                key: 'serverPath'
            }, {
                title: '  调用次数',
                dataIndex: 'time',
                key: 'time'
            }, {
                title: '  认证',
                dataIndex: 'authentication',
                key: 'authentication'
            },
            {
                title: ' 操作',
                dataIndex: 'operate',
                key: 'operate',
                render: (text, record) => (
                    <span>
                        <a onClick={() => this.editPath(record)}>编辑</a>
                        <a onClick={() => this.deletePath(record)}>删除</a>
                    </span>
                )
            },
        ];
        return (
            <Collapse defaultActiveKey={['0']} onchange={callback}>
                {groupStore.groupList.map((group, index) => {
                    return (
                        <Panel className='panel-box'
                               header={
                                   <div className='panel-header'>
                                       <span>{group.name}</span>
                                       <div className="panel-btn">
                                           <Button onClick={() => this.editGroup(group)}>编辑</Button>
                                           <Button onClick={() => this.builtPath()}>新建</Button>
                                       </div>
                                   </div>} key={index}>
                            <Table columns={columns} dataSource={group.pathList.slice()}/>
                        </Panel>
                    );
                })}
            </Collapse>

        )
    }
}

export default Container;
