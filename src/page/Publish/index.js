import React from 'react';
import LzEditor from 'react-lz-editor'
import {Button} from 'antd';
import './index.less';

export default class Publish extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            markdownContent: "## 标题 2 \n 开始发表文章... ",
            responseList: [],
            content:"",
        };
        this.receiveMarkdown = this.receiveMarkdown.bind(this);
    }

    receiveMarkdown(content) {
        console.log("recieved markdown content", content);
        this.setState({
            content:content
        })
        this.setState({responseList:[]});
    }

    holdClick() {
        console.log("hold state.markdownContent", this.state.content)
    }

    publishClick() {
        console.log('publish',this.state.content)
    }

    render() {
        return (
            <div className='publish-page'>
                <div className="header">
                    <span className="title"> 发表文章</span>
                    <div className="btn">
                        <Button className='hold-btn' onClick={() => {
                            this.holdClick()
                        }}>保存</Button>
                        <Button type='primary' onClick={()=>{this.publishClick()}}>发布</Button>
                    </div>
                </div>
                <div className='editor-box'>
                    <LzEditor
                        active={true}
                        importContent={this.state.markdownContent}
                        cbReceiver={this.receiveMarkdown}
                        image={false}
                        video={false}
                        audio={false}
                        convertFormat="markdown"/>
                </div>
            </div>
        );
    }
}