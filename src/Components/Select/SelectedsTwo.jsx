import { Select } from "antd";
const { Option } = Select;

import littleIcon from "../../assets/img/bitcoin-icon.svg";
import littleIcon2 from "../../assets/img/litecoin-icon.svg";
import littleIcon3 from "../../assets/img/litecoin-icon2.svg";
import littleIcon4 from "../../assets/img/litecoin-icon3.svg";

const SelectedsTwo = () => {
  return (
    <>
      <Select
        defaultValue="Bitcoin BTC"
        style={{
          width: "100%",
          height: "60px",
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
                  src={littleIcon}
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
                src={littleIcon}
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
                  src={littleIcon2}
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
                src={littleIcon2}
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
                  src={littleIcon3}
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
                src={littleIcon3}
                alt=""
              />
            </div>
            <div>
              <p> Ethereum ETH</p>
            </div>
          </div>
        </Option>
        <Option
          value="Litecoin LTC"
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
                  src={littleIcon4}
                  alt=""
                />
              </div>
              <div>
                <p> Litecoin LTC</p>
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
                src={littleIcon4}
                alt=""
              />
            </div>
            <div>
              <p> LItecoin LTC</p>
            </div>
          </div>
        </Option>
      </Select>
    </>
  );
};

export default SelectedsTwo;
