import { Table } from 'antd'
import React from 'react'

const TableTranfer = (selectionType,rowSelection,columns,data) => {
  return (
    <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
  )
}

export default TableTranfer;