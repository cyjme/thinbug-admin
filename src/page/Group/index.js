import React, {Component} from 'react';
import {Button,} from 'antd';
import './index.less';
import GroupModal from "./GroupModal";
import PathModal from './PathModal';
import {inject, observer} from 'mobx-react';
import Container from './Container';

@inject('stores')
@observer
class Group extends Component {
    constructor(props) {
        super(props);
        this.groupStore = this.props.stores.groupStore;
    }

    builtGroup() {
        this.groupStore.showGroup();
        this.groupStore.setGroupModalTypeBuilt();
    }


    render() {
        const groupStore = this.props.stores.groupStore;

        return (
            <div className='group-page'>
                <div className="header">
                    <span className='title'>分组</span>
                    <Button onClick={() => this.builtGroup()}>新建分组</Button>
                </div>
                <div className="main-container">
                    <Container/>
                </div>
                <GroupModal visible={groupStore.visibleGroup}
                            title={groupStore.groupModalType === 'built' ? '新建分组' : '编辑' + groupStore.currentGroupData.name}
                            name={groupStore.groupModalType === 'edit' ? groupStore.currentGroupData.name : ''}
                            direction={groupStore.groupModalType === 'edit' ? groupStore.currentGroupData.direction : ''}/>
                <PathModal visible={groupStore.visiblePath}
                           title={groupStore.pathModalType === 'built' ? '新建path' : '编辑'}/>
            </div>
        )
    }
}

export default Group;
