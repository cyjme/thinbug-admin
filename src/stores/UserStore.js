import {observable} from 'mobx';

class UserStore {
    constructor() {
        for (let i = 0; i < 6; i++) {
            this.userList.push(
                {
                    key: i,
                    avatar: 'J',
                    name: 'jason' + i,
                    email: 'thinbug@gmail.com',
                    team: 'bug',
                    time: '2018.6.6',
                    lasttime: '2018.6.15',
                    operate: '详情'
                }
            );
        }
    }

    @observable userList = [];

}

export default UserStore;
