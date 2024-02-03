import {
  BellOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons";
import { Button, Input, Popover } from "antd";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo-with-name.png";
import { useFirebase } from "../../context/FirebaseProvider";
import PopoversOne from "../Popvers/PopoversOne";
import PopoversThree from "../Popvers/PopoversThree";
import PopoversTwo from "../Popvers/PopoversTwo";
import SeparateLog from "./SeparateLog";
const { Search } = Input;

// eslint-disable-next-line react/prop-types
const Navbar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();
  const HandleNavigate = () => {
    navigate("/");
  };


  // const email = user.email;
  // const photoURL = user.photoURL;
  // const emailVerified = user.emailVerified;

  const firebase = useFirebase();
  console.log(firebase);
  return (
    <>
      <div
        style={{
          height: "60px",
          backgroundColor: "#fff",
          color: "#000",
          position: "fixed",
          zIndex: "1000",
          width: "100%",
          borderBottom: "1px solid #f0f0f0",
          padding: "20px",
          left: 0,
          top: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div>
            <Button
              className="button"
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </div>
          <div>
            <img
              onClick={HandleNavigate}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              width={100}
              src={logo}
              alt=""
            />
          </div>
         
        </div>
        <div>
          <div
            style={{
              marginLeft: "10px",
              fontWeight: "500",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Search
              placeholder="Search here"
              onSearch={<onSearch />}
              allowClear
            />
            <div>
              <Popover
                placement="topRight"
                trigger="click"
                content={PopoversOne}
              >
                <SortAscendingOutlined className="sort" />
              </Popover>
            </div>
            <div>
              <Popover
                placement="topRight"
                trigger="click"
                content={PopoversTwo}
              >
                <MailOutlined className="mail" />
              </Popover>
            </div>
            <div>
              <Popover
                placement="topRight"
                trigger="click"
                content={PopoversThree}
              >
                <BellOutlined className="bell" />
              </Popover>
            </div>
            <div>
              <Popover
                placement="topRight"
                trigger="click"
                content={<SeparateLog />}
              >
                <p style={{ cursor: "pointer" }}>Profile</p>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
