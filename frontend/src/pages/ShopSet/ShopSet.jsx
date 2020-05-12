import React from 'react'
import { Button, Form, Input } from 'antd'
import { useMappedState, useDispatch } from 'redux-react-hook'
import { axiosFetch } from '@utils'
import { UploadAvatar } from '@components'

const ShopSet  = () => {
    const [thisFrom] = Form.useForm()
    const userInfo = useMappedState($$state => $$state.user)
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault() // 阻止默认提交
        thisFrom.validateFields().then(data => {
            axiosFetch({
                api: '/user/update',
                params: { userID: userInfo.userID, ...data },
            }).then((res) => {
                dispatch({
                    type: 'setUserInfo',
                    payload: { ...res },
                })
            })
        }).catch(err => {})
    }

    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 20,
        },
        style: {
            margin: '0 auto',
            marginTop: '40px',
            width: '600px',
        }
    }

    return (
        <Form
            {...layout}
            form={thisFrom}
            initialValues={userInfo}
        >
            <UploadAvatar />

            <Form.Item
                label="店铺名称"
                name='shopName'
                rules={[{required: true, message: "请输入店铺名称" }]}
            >
                <Input placeholder="请输入店铺名称" />
            </Form.Item>

            <Form.Item
                label="店铺描述"
                name='shopDesc'
                rules={[{required: true, message: '请输入店铺描述' }]}
            >
                <Input placeholder="请输入店铺描述" />
            </Form.Item>
            <div style={{ textAlign: 'center' }} >
                <Button size="large" key="submit" type="primary" onClick={onSubmit}>保存</Button>
            </div>
        </Form>
    )
}
export default ShopSet
