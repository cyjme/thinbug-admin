import React, {Component} from 'react';
import './index.less';
import {Button} from 'antd';
import {inject, observer} from 'mobx-react';

@inject('stores')
@observer
class Articles extends Component {
    render() {
        return (
            <div className='articles-page'>
                <span className='articles-header'>文章列表</span>
                <ul className='articles-list'>
                    {this.props.stores.articlesStore.articlesdata.map((article, index) => {
                        return (<li key={index}>
                            <div className='content'>
                                <span className='title'>{article.title}</span>
                                <span className='brief'>{article.brief}</span>
                                <span className="name">作者：{article.name}</span>
                                <span className="time">{article.time}</span>
                            </div>
                            <div className="btn">
                                <Button onClick={() =>this.props.stores.articlesStore.ignoreClick(article)}>忽略</Button>
                                <Button onClick={()=>this.props.stores.articlesStore.hiddenClick(article)}>隐藏</Button>
                            </div>
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
}

export default Articles;
