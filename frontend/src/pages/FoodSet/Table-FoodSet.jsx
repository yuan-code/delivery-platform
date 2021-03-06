import React, { useState } from 'react'
import { Space, Avatar } from 'antd'
import { getSrc } from '@utils'
import { SCAntdTable } from '@components'
import styles from './foodSet.module.css'

const FoodTable = ({
    size,
    total,
    current,
    dataSource,
    updatePage,
    editRecord,
    deleteRecord,
}) => {
    const [selectedRowIndex, setSelectedRowIndex] = useState(-1)
    const columns = [
        {
            title: '序号',
            dataIndex: 'index',
            key: 'index',
            render: (text, record, index) => index + 1,
            width: 60,
        }, {
            title: '操作',
            dataIndex: 'action',
            width: 120,
            align: 'center',
            render: (text, record) => (
                <Space>
                    <button
                        className="link-button"
                        onClick={(e) => { editRecord(record) }}
                    >编辑</button>
                    <button
                        className="link-button"
                        onClick={(e) => { deleteRecord(record) }}
                    >删除</button>
                </Space>
            ),
        }, {
            title: '菜品名称',
            dataIndex: 'foodName',
            width: 160,
            ellipsis: true,
        }, {
            title: '菜品描述',
            dataIndex: 'foodDesc',
            width: 160,
        }, {
            title: '菜品库存',
            dataIndex: 'balance',
            width: 100,
        }, {
            title: '菜品价格',
            dataIndex: 'foodPrice',
            width: 100,
            ellipsis: true,
        }, {
            title: '菜品图片',
            dataIndex: 'imagePath',
            render: (text) => (
                <Avatar
                    shape="square"
                    size="large"
                    src={getSrc(text)}
                />
            )
        }
    ]

    const pageSizeChange = (current, size) => {
        updatePage(current, size)
    }

    const currentChange = (current, size) => {
        updatePage(current, size)
    }

    return (
        <div>
            <div style={{ width: '940px' }}>
                <SCAntdTable
                    rowKey="foodID"
                    scroll={{ x: 870, y: 260 }}
                    columns={columns}
                    dataSource={dataSource}
                    pageSize={size}
                    total={total}
                    current={current}
                    pageSizeChange={pageSizeChange}
                    currentChange={currentChange}
                    onRow={(record, index) => {
                        return {
                            onClick: (e) => {
                                setSelectedRowIndex(index)
                                // onClickRow(record, index)
                            },
                        }
                    }}
                    rowClassName={(record, index) => {
                        return index === selectedRowIndex ? styles.rowSelectedBg : ''
                    }}
                />
            </div>
        </div>
    )
}

export default FoodTable