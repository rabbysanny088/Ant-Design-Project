import { Select } from "antd";
import iconImage from "../../assets/img/bitcoin-icon.svg";
const { Option } = Select;

const Selecteds = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="res"
      >
        <Select
          defaultValue="Bitcoin BTC"
          style={{
            width: 170,
          }}
          optionLabelProp="label"
        >
          <Option
            value="Bitcoin BTC"
            label={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <div>
                  <img
                    style={{
                      color: "red",
                      background: "red",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                    }}
                    src={iconImage}
                    alt=""
                  />
                </div>
                <div>
                  <p> Bitcoin BTC</p>
                </div>
              </div>
            }
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <div>
                <img
                  style={{
                    color: "red",
                    background: "red",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                  }}
                  src={iconImage}
                  alt=""
                />
              </div>
              <div>
                <p> Bitcoin BTC</p>
              </div>
            </div>
          </Option>
          <Option
            value=""
            label={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <div>
                  <img
                    style={{
                      color: "red",
                      background: "red",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                    }}
                    src={iconImage}
                    alt=""
                  />
                </div>
                <div>
                  <p>Dogecion DOG</p>
                </div>
              </div>
            }
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <div>
                <img
                  style={{
                    color: "red",
                    background: "red",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                  }}
                  src={iconImage}
                  alt=""
                />
              </div>
              <div>
                <p>Dogecion DOG</p>
              </div>
            </div>
          </Option>
          <Option
            label={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <div>
                  <img
                    style={{
                      color: "red",
                      background: "red",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                    }}
                    src={iconImage}
                    alt=""
                  />
                </div>
                <div>
                  <p> Ethereum ETH</p>
                </div>
              </div>
            }
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <div>
                <img
                  style={{
                    color: "red",
                    background: "red",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                  }}
                  src={iconImage}
                  alt=""
                />
              </div>
              <div>
                <p> Ethereum ETH</p>
              </div>
            </div>
          </Option>
        </Select>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "30px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              $ 41.580
            </p>
            <span
              style={{
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              Low Price
            </span>
          </div>
          <div>
            <p
              style={{
                color: "green",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              $ 41.580
            </p>
            <span
              style={{
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              High Price
            </span>
          </div>
          <div>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              $ 41.580
            </p>
            <span
              style={{
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              24H Volume
            </span>
          </div>
          <div>
            <p
              style={{
                color: "red",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              $ 41.580
            </p>
            <span
              style={{
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              24H Change
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selecteds;
