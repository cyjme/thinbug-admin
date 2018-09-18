import UserStore from "./UserStore";
import TeamStore from "./TeamStore";
import ServiceStore from './ServiceStore';
import ArticlesStore from "./ArticlesStore";
import GroupStore from "./GroupStore";

class stores {
    constructor() {
        this.userStore = new UserStore();
        this.teamStore = new TeamStore();
        this.serviceStore = new ServiceStore();
        this.articlesStore=new ArticlesStore();
        this.groupStore=new GroupStore();
    }
}

export default new stores();
