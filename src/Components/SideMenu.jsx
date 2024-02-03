import {
  AppleOutlined,
  BoldOutlined,
  WindowsOutlined
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import OnlyRouters from "./Routers/OnlyRouters";
import Navbar from "./pages/Navbar";
const { Header, Content, Sider } = Layout;
const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ background: "#fff" }}>
      <Sider
        trigger={null}
        collapsed={collapsed}
        style={{
          height: "100vh",
          position: 'sticky',
          top: "60px",
          left: "0",
          width: '100%'
        }}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          style={{
            height: "100vh",
          }}
          onClick={(item) => {
            navigate(item.key);
          }}
          // theme="light"
          mode="inline"
          defaultSelectedKeys={["crypto"]}
          items={[
            {
              label: "Crypto",
              key: "/crypotos",
              icon: <BoldOutlined />,
            },
            {
              label: "CRM",
              key: "/crm",
              icon: <AppleOutlined />,
            },
            {
              label: "Analytics",
              key: "/analytics",
              icon: <WindowsOutlined />,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div>
            <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
          </div>
        </Header>
        <Content>
          <div
            style={{
              padding: 24,
              height: "100vh",
              width: '100%',
            }}
          >
            <OnlyRouters />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default SideMenu;
