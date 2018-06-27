import {observable} from 'mobx';

class ServiceStore {
    constructor() {
        for (let i = 0; i < 12; i++) {
            this.eventsData.push(
                {
                    key: i,
                    name: i + 1 + '月',
                    num: Math.random() * 1000
                }
            )
        }
        for (let i = 1; i < 7; i++) {
            this.listData.push({
                key: i,
                rank: i,
                team: 'bug' + i,
                number: Math.ceil(Math.random() * 1000)
            })
        }
    }

    @observable listData = [];
    @observable eventsData = [];
}

export default ServiceStore;
