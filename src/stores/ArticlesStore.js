import {observable} from 'mobx';

class ArticlesStore{
    @observable articlesdata = [
        {
            title: 'Thinbug项目启动',
            brief: '在这个特殊的日子里，thinbug 项目启动了！这是一个令人拍案叫绝的项目我们的创始人，人称大神的工程师 jason 今日正式宣布thinbug 项目的启动',
            time: '2018.6.1',
            name: 'jason'
        },
        {
            title: '震惊，thinbug 之场景重现',
            brief: 'Thinbug is a good project',
            time: '2018.6.6',
            name: 'jason ch'
        },
        {
            title: 'Thinbug 之多语言',
            brief: 'thinbug is a good project',
            time: '2018.6.6',
            name: 'jason ch'
        }, {
            title: 'thinbug 之实时监控',
            brief: 'thinbug is a good project',
            time: '2018.6.6',
            name: 'jason ch'
        },
    ];
    ignoreClick(article) {
        const index=this.articlesdata.indexOf(article);
        console.log(index);
        this.articlesdata.splice(index,1)
    }
    hiddenClick(article) {
      console.log(article)
    }
}
export default ArticlesStore;
