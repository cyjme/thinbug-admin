import React, {Component} from 'react';
import {Modal, Form, Input} from 'antd';
import {inject, observer} from 'mobx-react';

const FormItem = Form.Item;

@inject('stores')
@observer
class GroupModal extends Component {
    handleOk = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const builtData = {
                    key:values.key,
                    name: values.name,
                    direction: values.direction,
                };
                console.log('builtData', builtData);
                this.props.stores.groupStore.hiddenGroup();
                if(this.props.stores.groupModalType==='built'){
                    this.props.stores.groupStore.addGroup(builtData);
                }
                this.props.stores.groupStore.modifyGroup(builtData)
            }
        })
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        const {groupStore} =this.props.stores;
        const {currentGroupData}=groupStore;
        const {groupModalType}=groupStore;
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
                   onCancel={()=>this.props.stores.groupStore.hiddenGroup()}>
                <Form>
                    <FormItem {...formItemLayout} label="分组名称">
                        {getFieldDecorator('name', {
                            initialValue:groupModalType==='built'?'':currentGroupData.name,
                            rules: [{
                                required: true, message: '昵称不能为空'
                            }]
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem {...formItemLayout} label="分组描述">
                        {getFieldDecorator('direction', {
                            initialValue:groupModalType==='built'?'':currentGroupData.direction,
                            rules: [{
                                required: true, message: '分组不能为空'
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

export default Form.create()(GroupModal);
