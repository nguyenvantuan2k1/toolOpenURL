import { Button, Card, Space, Table } from "antd";
import React, { useState } from "react";
import web_buy from "../file/web_buy";
import Notification from "../share/Notification";

const WebsiteBuy = () => {
  const [selectionType, setSelectionType] = useState("checkbox");
  const [pageOpen, setPageOpen] = useState([]);
  // handle card 1
  const columns = [
    {
      title: "Index",
      dataIndex: "key",
      width: 100,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "URL",
      dataIndex: "url",
      render: (text) => <a>{text}</a>,
    },
  ];
  const [data, setData] = useState();
  const handleButtonViewURLFB = () => {
    setData(web_buy);
  };

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setPageOpen(selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  const handleButtonOpenURLWB = () => {
    if (pageOpen.length !== 0) {
      for (let i = 0; i < pageOpen.length; i++) {
        window.open(pageOpen[i].url);
      }
    } else {
      Notification({
        message: "Có lỗi xảy ra vui lòng chọn một URL !",
        type: "error",
      });
    }
  };
  return (
    <Space direction="vertical">
      <Card
        title="Website có phí"
        extra={
          <Space style={{ paddingLeft: "10px" }}>
            <Button
              href="#"
              danger
              type="primary"
              onClick={handleButtonOpenURLWB}
            >
              Open all
            </Button>
            <Button href="#" type="primary" onClick={handleButtonViewURLFB}>
              View URL
            </Button>
          </Space>
        }
      >
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          scroll={{
            x: 600,
            y: 300,
          }}
        />
      </Card>
    </Space>
  );
};

export default WebsiteBuy;
