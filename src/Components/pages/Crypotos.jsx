import { Button, Card, Col, Divider, Row, Typography } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirstCommonTop from "../../CommonCodes/FirstCommonTop";
import Progresses from "../../CommonCodes/Progresses";
import SecondText from "../../CommonCodes/SecondText";
import SelectedsSelect from "../../CommonCodes/SelectedsSelect";
import TablesOne from "../../Tables/TablesOne";
import SecondCommonTop from "../../assets/img/SecondCommonTop";
import blogOne from "../../assets/img/blog.svg";
import blogThree from "../../assets/img/bloglike 2.svg";
import blogFour from "../../assets/img/bloglike 3.svg";
import blogTwo from "../../assets/img/bloglike.svg";
import { useFirebase } from "../../context/FirebaseProvider";
import MultiLineCharts from "../Charts/MultiLineCharts";
import Selecteds from "../Select/Selecteds";
import CardsOne from "../SimilarCards/CardsOne";
import MainTabs from "../Tabs/MainTabs";

const Crypotos = () => {
  const navigate = useNavigate();
  const firebases = useFirebase();

  useEffect(() => {
    if (!firebases.isLoggedIn) {
      navigate("/login");
    }
  }, [firebases.isLoggedIn, navigate]);
  return (
    <>
      <Typography
        style={{ fontWeight: "600", fontSize: "18px", marginBottom: "10px" }}
      >
        YOUR TOTAL BALANCE
      </Typography>
      <Row gutter={[12, 12]}>
        <Col xs={24} sm={24} md={12} lg={24} xl={8} xxl={8}>
          <Card>
            <div className="card-section">
              <div>
                <Typography style={{ fontWeight: "600", fontSize: "20px" }}>
                  $33692.00
                </Typography>
                <Typography
                  style={{ fontSize: "15px", margin: "0", marginBottom: 0 }}
                >
                  Available Balance
                </Typography>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <Button type="default">SEND</Button>
                <Button type="primary">RECEIVE</Button>
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              <Typography style={{ fontSize: "16px" }}>
                BUY CURRENCY IN USD
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#1677ff",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  9.654
                </p>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Bitcoin
                </span>
              </div>
              <div>
                <p
                  style={{
                    color: "#1677ff",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  76.184
                </p>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Monero
                </span>
              </div>
              <div>
                <p
                  style={{
                    color: "#1677ff",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  1567.5
                </p>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Ripple
                </span>
              </div>
              <div>
                <p
                  style={{
                    color: "#1677ff",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  56.78
                </p>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  Litecoin
                </span>
              </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={24} xl={16} xxl={16}>
          <Row gutter={[12, 12]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <Card style={{ borderRadius: "15px" }} className="zom">
                <CardsOne
                  imgSrc={blogOne}
                  title="Bitcoin Price"
                  value="$7289.75"
                  valuetwo={
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      0.8%
                    </span>
                  }
                />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <Card style={{ borderRadius: "15px" }} className="zom">
                <CardsOne
                  imgSrc={blogTwo}
                  title="Etherium Price"
                  value="$170.720"
                  valuetwo={
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "rgb(82, 196, 26)",
                      }}
                    >
                      0.76%
                    </span>
                  }
                />
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
              <Card style={{ borderRadius: "15px" }} className="zom">
                <CardsOne
                  imgSrc={blogThree}
                  title="Litecoin  Price"
                  value="$65.1200"
                  valuetwo={
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "red",
                      }}
                    >
                      -0.4%
                    </span>
                  }
                />
              </Card>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              xxl={12}
              className="zom"
            >
              <Card style={{ borderRadius: "15px" }}>
                <CardsOne
                  imgSrc={blogFour}
                  title="Ripple  Price"
                  value="$0.2544"
                  valuetwo={
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "rgb(82, 196, 26)",
                      }}
                    >
                      0.8%
                    </span>
                  }
                />
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={12} lg={16} xl={16} xxl={16}>
          <Card
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <div>
              <Selecteds />
            </div>
            <div>
              <MultiLineCharts />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
          <Card
            style={{
              width: "100%",
            }}
          >
            <MainTabs />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={16} xl={16} xxl={16}>
          <Card>
            <FirstCommonTop />
            <div>
              <TablesOne />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
          <Card className="hover-effect">
            <SecondCommonTop />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Card>
            <div>
              <SecondText />
            </div>
            <Divider />
            <div>
              <Progresses />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <Card>
            <SelectedsSelect />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Crypotos;
