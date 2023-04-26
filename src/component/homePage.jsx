import {
  DollarOutlined,
  FacebookOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Layout,
  Menu,
  Row,
  Space,
  Table,
  Transfer,
  theme,
} from "antd";
import React, { useState } from "react";

import TableTranfer from "../custom/tableTranfer.jsx";
import FaceBook from "../page/faceBook.jsx";
import WebsiteBuy from "../page/websiteBuy.jsx";
import WebsiteFree from "../page/websiteFree.jsx";

const HomePage = () => {
  const [Tab, setTab] = useState(1);
  const { Header, Content, Sider } = Layout;
  const items1 = [
    {
      key: "1",
      label: "Home",
    },
    {
      key: "2",
      label: "List",
    },
    {
      key: "3",
      label: "App",
    },
  ];
  const [span, setSpan] = useState(17);
  // sidebar
  const chosseTab1 = () => {
    setTab(1);
    setSpan(24);
  };
  // sidebar
  const chosseTab2 = () => {
    setTab(2);
    setSpan(24);
  };
  // sidebar
  const chosseTab3 = () => {
    setTab(3);
    setSpan(24);
  };
  const items2 = [UserOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: "Chức năng",
      children: [
        {
          key: "1",
          label: (
            <Button onClick={chosseTab1} type="link" style={{color:'#002329'}}>
                Quản lý group trên Facebook
            </Button>
          ),
          icon: (
            <FacebookOutlined style={{ color: "#0958d9" }} type="primary" />
          ),
        },
        {
          key: "2",
          icon: <DollarOutlined style={{ color: "#faad14" }} type="primary" />,
          label: (
            <Button onClick={chosseTab2} type="link" style={{color:'#002329'}}>
              Quản lý Website có phí
            </Button>
          ),
        },
        {
          key: "3",
          icon: <DollarOutlined style={{ color: "#52c41a" }} type="primary" />,
          label: (
            <Button onClick={chosseTab3} type="link" style={{color:'#002329'}}>
              Quản lý Website không phí
            </Button>
          ),
        },
      ],
    };
  });

  // mock data 1
  const mockData = Array.from({
    length: 6,
  }).map((_, i) => ({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
  }));
  const initialTargetKeys = mockData
    .filter((item) => Number(item.key) > 10)
    .map((item) => item.key);
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  // card 2
  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
          />
        </Header>
        <Layout>
          <Sider
            width={400}
            style={{
              background: colorBgContainer,
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{
                height: "100%",
                borderRight: 0,
              }}
              items={items2}
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 500,
                maxHeight: "100vh",
                background: colorBgContainer,
                justifyContent: "center",
              }}
            >
              <Row>
                <Col span={span}>
                {Tab==1?(
                    <FaceBook/>
                ):Tab==2?<WebsiteBuy/>:<WebsiteFree/>}
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};
export default HomePage;
