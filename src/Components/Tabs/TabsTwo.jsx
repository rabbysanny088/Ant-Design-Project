import { Button } from "antd";
import Typography from "antd/es/typography/Typography";
import SelectedsTwo from "../Select/SelectedsTwo";

const TabsTwo = () => {
  return (
    <>
      <div>
        <SelectedsTwo />
      </div>
      <div>
        <div
          style={{
            background: "#fff",
            border: "1px solid #eee",
            marginTop: "10px",
            padding: "10px",
          }}
        >
          <Typography
            style={{
              fontSize: "15px",
              fontWeight: "400",
              color: "rgb(107, 114, 128)",
              marginBottom: "8px",
              marginTop: "10px",
            }}
          >
            Amount (USD)
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              borderRadius: "5px",
            }}
          >
            <div>
              <span className="shs">$</span>
              <span> 146948.992</span>
            </div>
            <div>
              {" "}
              <p className="shss">USD</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            background: "#fff",
            border: "1px solid #eee",
            marginTop: "10px",
            padding: "10px",
          }}
        >
          <Typography
            style={{
              fontSize: "15px",
              fontWeight: "400",
              color: "rgb(107, 114, 128)",
              marginBottom: "8px",
              marginTop: "10px",
            }}
          >
            Amount (BTC)
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",

              borderRadius: "5px",
            }}
          >
            <div>
              <span> 606.2689586112341 </span>
            </div>
            <div>
              {" "}
              <p
                className="shss"
                style={{
                  color: "red",
                }}
              >
                BTC
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{
        marginTop: '10px'
      }}>
        <Button block type="primary">Sell BTC</Button>
      </div>
    </>
  );
};

export default TabsTwo;
