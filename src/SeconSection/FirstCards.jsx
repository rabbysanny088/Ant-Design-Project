import { ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import user from "../assets/img/user.svg";
import user2 from "../assets/img/user2.svg";
import user3 from "../assets/img/user3.svg";
import user4 from "../assets/img/user4.svg";

const FirseCards = () => {
  return (
    <>
      <Row gutter={[12, 12]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Row gutter={[12, 12]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Card>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div className="user">
                      <img src={user} alt="" />
                    </div>
                    <div>
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "15px",
                        }}
                      >
                        2,000
                      </p>
                      <span>New Users</span>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                      }}
                    >
                      <ArrowUpOutlined
                        style={{
                          color: "rgb(82, 196, 26)",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                        }}
                      />
                      <span
                        style={{
                          color: "rgb(82, 196, 26)",
                          fontWeight: "600",
                        }}
                      >
                        +2.1%
                      </span>
                    </div>
                    <p>vs 30 days</p>
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div className="usertwo">
                      <img src={user2} alt="" />
                    </div>
                    <div>
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "15px",
                        }}
                      >
                        400
                      </p>
                      <span>Deals</span>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                        color: "red",
                      }}
                    >
                      <ArrowUpOutlined
                        style={{
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                        }}
                      />
                      <span
                        style={{
                          fontWeight: "600",
                        }}
                      >
                        -2%
                      </span>
                    </div>
                    <p>vs 30 days</p>
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div className="userthree">
                      <img src={user3} alt="" />
                    </div>
                    <div>
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "15px",
                        }}
                      >
                        234
                      </p>
                      <span>Campaign</span>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                      }}
                    >
                      <ArrowUpOutlined
                        style={{
                          color: "rgb(82, 196, 26)",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                        }}
                      />
                      <span
                        style={{
                          color: "rgb(82, 196, 26)",
                          fontWeight: "600",
                        }}
                      >
                        +2.1%
                      </span>
                    </div>
                    <p>vs 30 days</p>
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <div className="userfour">
                      <img src={user4} alt="" />
                    </div>
                    <div>
                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "15px",
                        }}
                      >
                        $40,000
                      </p>
                      <span>Total Profit</span>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "2px",
                      }}
                    >
                      <ArrowUpOutlined
                        style={{
                          color: "rgb(82, 196, 26)",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                        }}
                      />
                      <span
                        style={{
                          color: "rgb(82, 196, 26)",
                          fontWeight: "600",
                        }}
                      >
                        +2.15%
                      </span>
                    </div>
                    <p>vs 30 days</p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default FirseCards;
