import {
  DingtalkOutlined,
  FileUnknownOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import SmallCards from "../../SeconSection/SmallCards";
import chair from "../../assets/img/chierman.svg";

import CollpaseOne from "../../Collapse/CollapseOne";
import CollapseTwo from "../../Collapse/CollapseTwo";
import Products from "../../CommonCodes/Products";
import TablesFive from "../../Tables/TablesFive";
import DistributionCharts from "../Charts/DistributionCharts";
import FiveSelecteds from "../Select/FiveSelecds";
import FourSelecteds from "../Select/FourSelectds";

const Analytics = () => {
  return (
    <div>
      <Row gutter={[12, 12]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
          <Card>
            <h5>Welcome</h5>
            <h3>Eddie Massy</h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              className="chair"
            >
              <div
                style={{
                  overflowY: "scroll",
                  width: 300,
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignContent: "center",
                      gap: "100px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        gap: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="dingta">
                        <DingtalkOutlined />
                      </div>
                      <div>
                        <p>42</p>
                        <span>Emalis</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        gap: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="dingta">
                        <MessageOutlined />
                      </div>
                      <div>
                        <p>144</p>
                        <span>Messages</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        gap: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="dingta">
                        <FileUnknownOutlined />
                      </div>
                      <div>
                        <p>12</p>
                        <span>Invoices</span>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        gap: "10px",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className="dingta">
                        <DingtalkOutlined />
                      </div>
                      <div>
                        <p>42</p>
                        <span>Emalis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                  }}
                  src={chair}
                  alt=""
                />
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
          <Card>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "10px",
              }}
            >
              <div>
                <h4>Sales State</h4>
              </div>
              <div>
                <FourSelecteds />
              </div>
            </div>
            <div>
              <div>
                <DistributionCharts />
              </div>
              <div>
                <SmallCards />
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
          <Card
            style={{
              height: "100%",
            }}
          >
            <Products />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
          <Card
            style={{
              height: "100%",
            }}
          >
            <CollpaseOne />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
          <Card>
            <div>
              <FiveSelecteds />
            </div>
            <TablesFive />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
          <Card>
            <h4>Traffic Source</h4>
            <div>
             <CollapseTwo />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Analytics;
