import { EditOutlined, ShrinkOutlined } from "@ant-design/icons"
import { Card, Col, Row, Space, Switch } from "antd"
import AvatarsFour from "../Avatar/AvatarFour"
import AvatarsOne from "../Avatar/AvatarsOne"
import AvatarsThree from "../Avatar/AvatarsThree"
import AvatarsTwo from "../Avatar/AvatarsTwo"

const FirstCardsAvatar = () => {
  return (
    <>
    <Row gutter={[12,12]}>
      <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3>Award CereMony</h3>
                <span>12:30 - 15:45</span>
              </div>
              <div>
                <Switch defaultChecked />
              </div>
            </div>
            <Space
              style={{
                marginTop: "10px",
              }}
            >
              <span className="team">Team</span>
              <span className="award">Award</span>
            </Space>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: '10px'
              }}
            >
              <div>
                <AvatarsOne />
              </div>
              <div>
                <Space>
                  <div className="edit">
                    <EditOutlined />
                  </div>
                  <div className="edit">
                  <ShrinkOutlined />
                  </div>
                </Space>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3>Design Discussion</h3>
                <span>12:30 - 15:45</span>
              </div>
              <div>
                <Switch />
              </div>
            </div>
            <Space
              style={{
                marginTop: "10px",
              }}
            >
              <span className="team">Team</span>
              <span className="awards">Meeting</span>
            </Space>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: '10px'
              }}
            >
              <div>
                <AvatarsTwo />
              </div>
              <div>
                <Space>
                  <div className="edit">
                    <EditOutlined />
                  </div>
                  <div className="edit">
                  <ShrinkOutlined />
                  </div>
                </Space>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3>Client Meeting</h3>
                <span>12:30 - 15:45</span>
              </div>
              <div>
                <Switch defaultChecked />
              </div>
            </div>
            <Space
              style={{
                marginTop: "10px",
              }}
            >
              <span className="team">Team</span>
              <span className="awards">Meeting</span>
            </Space>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: '10px'
              }}
            >
              <div>
                <AvatarsThree />
              </div>
              <div>
                <Space>
                  <div className="edit">
                    <EditOutlined />
                  </div>
                  <div className="edit">
                  <ShrinkOutlined />
                  </div>
                </Space>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
          <Card>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3>Office Meeting</h3>
                <span>12:30 - 15:45</span>
              </div>
              <div>
                <Switch defaultChecked />
              </div>
            </div>
            <Space
              style={{
                marginTop: "10px",
              }}
            >
              <span className="team">Team</span>
              <span className="awards">Meeting</span>
            </Space>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: '10px'
              }}
            >
              <div>
                <AvatarsFour />
              </div>
              <div>
                <Space>
                  <div className="edit">
                    <EditOutlined />
                  </div>
                  <div className="edit">
                  <ShrinkOutlined />
                  </div>
                </Space>
              </div>
            </div>
          </Card>
        </Col> 
    </Row>
    </>
  )
}

export default FirstCardsAvatar
