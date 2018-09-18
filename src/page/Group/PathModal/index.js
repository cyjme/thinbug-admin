import React, {Component} from 'react';
import {Modal, Form, Input} from 'antd';
import {inject, observer} from 'mobx-react';

const FormItem = Form.Item;
@inject('stores')
@observer
class PathModal extends Component {
    handleOk = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const builtData = {
                    name: values.name,
                    path: values.path,
                    key:values.key,
                };
                console.log('builtData', builtData);
                this.props.stores.groupStore.hiddenPathModal();
                if(this.props.stores.pathModalType==='built'){
                    this.props.stores.groupStore.addPath(builtData);
                }
                this.props.stores.groupStore.modifyPath(builtData)
            }
        })
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {groupStore} =this.props.stores;
        const {currentPathData}=groupStore;
        const {pathModalType}=groupStore;
        const formItemLayout = {
            labelCol: {
                span: 6
            },
            wrapperCol: {
                span: 16
            }
        };
        return (
            <Modal visible={this.props.visible} title={this.props.title} onOk={() => this.handleOk()}
                   onCancel={()=>this.props.stores.groupStore.hiddenPathModal()}>
                <Form>
                    <FormItem {...formItemLayout} label="分组名称">
                        {getFieldDecorator('name', {
                            initialValue:pathModalType==='built'?'':currentPathData.name,
                            rules: [{
                                required: true, message: '昵称不能为空'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="路径">
                        {getFieldDecorator('path', {
                            initialValue:pathModalType==='built'?'':currentPathData.path,
                            rules: [{
                                required: true, message: '路径不能为空'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="serverHost">
                        {getFieldDecorator('serverHost', {
                            initialValue:pathModalType==='built'?'':currentPathData.serverHost,
                            rules: [{
                                required: true, message: 'serverHost不能为空'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="serverPath">
                        {getFieldDecorator('serverPath', {
                            initialValue:pathModalType==='built'?'':currentPathData.serverPath,
                            rules: [{
                                required: true, message: 'serverPath不能为空'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(PathModal);
