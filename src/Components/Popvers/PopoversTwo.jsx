import Typography from "antd/es/typography/Typography";

import aone from "../../assets/img/A1.jpg";

import { Button } from "antd";
import atwo from "../../assets/img/A2.jpg";
import athree from "../../assets/img/A3.jpg";
import afour from "../../assets/img/A4.jpg";

const PopoversTwo = () => {
  return (
    <div>
      <div
        style={{
          fontSize: "13px",
          fontWeight: "500",
          background: "#fff",
          zIndex: "1000",
          cursor: "pointer",
        }}
      >
        <Typography>MESSAGES(12)</Typography>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "10px",
            }}
            className="point"
          >
            <div>
              <img
                style={{ borderRadius: "50%" }}
                width={50}
                src={aone}
                alt=""
              />
            </div>
            <div>
              <Typography
                level={3}
                style={{ fontSize: "15px", marginBottom: 0, fontWeight: "600" }}
              >
                JOHN MATTHEW
              </Typography>
              <Typography
                style={{ fontSize: "15px", marginBottom: 0, fontWeight: "400" }}
              >
                I AM FINE, WHAT ABOUT YOU?
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "10px",
            }}
            className="point"
          >
            <div>
              <img
                style={{ borderRadius: "50%" }}
                width={50}
                src={atwo}
                alt=""
              />
            </div>
            <div>
              <Typography
                level={3}
                style={{ fontSize: "15px", marginBottom: 0, fontWeight: "600" }}
              >
                JOHN MATTHEW
              </Typography>
              <Typography
                style={{ fontSize: "15px", marginBottom: 0, fontWeight: "400" }}
              >
                I AM FINE, WHAT ABOUT YOU?
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "10px",
              textTransform: 'uppercase'
            }}
            className="point"
          >
            <div>
              <img
                style={{ borderRadius: "50%" }}
                width={50}
                src={athree}
                alt=""
              />
            </div>
            <div>
              <Typography
                level={3}
                style={{ fontSize: "15px", marginBottom: 0, fontWeight: "600" }}
              >
                George Bailey
              </Typography>
              <Typography
                style={{ fontSize: "15px", marginBottom: 0, fontWeight: "400" }}
              >
                Call me when you are free!{" "}
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginTop: "10px",
              textTransform: 'uppercase'
            }}
            className="point"
          >
            <div>
              <img
                style={{ borderRadius: "50%" }}
                width={50}
                src={afour}
                alt=""
              />
            </div>
            <div>
              <Typography
                level={3}
                style={{ fontSize: "15px", marginBottom: 0, fontWeight: "600" }}
              >
                Maria Lee
              </Typography>
              <Typography
                style={{ fontSize: "15px", marginBottom: 0, fontWeight: "400" }}
              >
                Send your contact details!
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Button block type="primary">View All</Button>
    </div>
  );
};

export default PopoversTwo;
