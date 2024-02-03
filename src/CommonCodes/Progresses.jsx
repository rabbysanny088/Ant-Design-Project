import { Col, Progress, Row } from "antd";

const Progresses = () => {
  return (
    <>
      <p>Monthly Limits</p>
      <Row
        gutter={[12, 12]}
        className="cricle"
        style={{
          marginTop: "10px",
        }}
      >
        <Col xs={24} sm={24} md={10} lg={8} xl={8} xxl={8}>
          <Progress
            type="circle"
            percent={66}
            status="active"
            strokeColor="red"
          />

          <div>
            <p
              style={{
                fontWeight: "600",
              }}
            >
              Main Limits
            </p>
            <span>$10,000</span>
          </div>
        </Col>
        <Col xs={24} sm={24} md={10} lg={8} xl={8} xxl={8}>
          <Progress type="circle" percent={31} strokeColor="#00ffd5" />
          <div>
            <p
              style={{
                fontWeight: "600",
              }}
            >
              Seconds
            </p>
            <span>$500</span>
          </div>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <Progress type="circle" percent={17} strokeColor="blue" />
          <div>
            <p
              style={{
                fontWeight: "600",
              }}
            >
              Others
            </p>
            <span>$1000</span>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Progresses;
