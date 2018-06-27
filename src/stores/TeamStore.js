import {observable} from 'mobx';

class TeamStore {
    constructor() {
        for (let i = 0; i < 6; i++) {
            this.teamList.push(
                {
                    key: i,
                    avatar: 'J',
                    name: 'jason' + i,
                    introduce: '打造优秀的互联网产品',
                    personal: 'jason',
                    time: '2018.6.6',
                    number: '1726',
                    operate: '详情'
                }
            );
        }
    }

    @observable teamList = [];
}

export default TeamStore;
