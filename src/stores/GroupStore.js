import {observable} from 'mobx';
import {addGroup,modifyGroup,addPath,modifyPath,deletePath} from "../apis/group";
import {message} from 'antd';

class GroupStore {
    constructor() {
        for (let i = 0; i < 6; i++) {
            this.pathList.push(
                {
                    key: i,
                    name: '手机登录' + i,
                    path: '/group',
                    serverHost: ' localhost:3000',
                    serverPath: '/group',
                    time: 666,
                    authentication: '无',
                }
            )
        }
    }

    @observable pathList = [];
    @observable visibleGroup = false;
    @observable visiblePath = false;
    @observable groupModalType = "";
    @observable pathModalType = "";
    @observable currentGroupData={};
    @observable currentPathData={};
    @observable groupList = [
        {
            key:0,
            name: '分组1',
            direction:'分组1描述',
            pathList: this.pathList,
        },
        {
            key:1,
            name: '分组2',
            direction:'分组2描述',
            pathList: this.pathList,
        }
    ];

    showGroup() {
        this.visibleGroup = true;
    }

    hiddenGroup() {
        this.visibleGroup = false;
    }

    showPathModal() {
        this.visiblePath = true;
    }

    hiddenPathModal() {
        this.visiblePath = false;
    }

    setGroupModalTypeEdit() {
        this.groupModalType = 'edit'
    }

    setGroupModalTypeBuilt() {
        this.groupModalType = 'built'
    }

    setPathModalTypeEdit() {
        this.pathModalType = 'edit'
    }

    setPathModalTypeBuilt() {
        this.pathModalType = 'built'
    }

    setCurrentGroupModalData(group) {
        this.currentGroupData={
            name:group.name,
            direction:group.direction,
        }
    }
    setCurrentPathModalData(record){
        this.currentPathData={
            name:record.name,
            path:record.path,
            serverPath:record.serverPath,
            serverHost:record.serverHost,
        }
    }
    async addGroup(addData){
        let result=await addGroup(addData);
        if(result.status===200){
            this.groupList=result;
            return true;
        }
        message.error('新建分组失败');
        return false;
    }
    async modifyGroup(modifyData){
        let result=await modifyGroup(modifyData);
        if(result.status===200){
            this.groupList=result;
            return true;
        }
        message.error('分组修改失败');
        return false;
    }
    async addPath(addData){
        let result=await addPath(addData);
        if(result.status===200){
            this.pathList=result;
            return true;
        }
        message.error('path添加失败');
        return false;
    }
    async modifyPath(modifyData){
        let result=await modifyPath(modifyData);
        if(result.status===200){
            this.pathList=result;
            return true;
        }
        message.error(' path修改失败');
        return false;
    }
    async deletePath(record){
        let result=await deletePath(record);
        if(result.status===200){
            this.pathList=result;
            return true;
        }
        message.error('删除失败');
        return false;
    }

}

export default GroupStore;
