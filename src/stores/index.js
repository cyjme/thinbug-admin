import UserStore from "./UserStore";
import TeamStore from "./TeamStore";
import ServiceStore from './ServiceStore';

class stores {
    constructor() {
        this.userStore = new UserStore();
        this.teamStore = new TeamStore();
        this.serviceStore = new ServiceStore();
    }
}

export default new stores();
