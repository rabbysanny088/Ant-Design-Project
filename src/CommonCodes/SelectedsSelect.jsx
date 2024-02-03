import { Button, Input, Select } from "antd";
const { Option } = Select;
const { Search } = Input;

import littleIcon from "../assets/img/bitcoin-icon.svg";
import littleIcon2 from "../assets/img/litecoin-icon.svg";
import littleIcon3 from "../assets/img/litecoin-icon2.svg";
import littleIcon4 from "../assets/img/litecoin-icon3.svg";
import man from "../assets/img/man.jpg";
import man2 from "../assets/img/man2.jpg";
import man3 from "../assets/img/man3.jpg";
import man4 from "../assets/img/man4.jpg";
import man5 from "../assets/img/man5.jpg";
import man6 from "../assets/img/man6.jpg";

const SelectedsSelect = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3>Quick Transfer</h3>
        </div>
        <div>
          <Select
            defaultValue="Bitcoin BTC"
            style={{
              width: "100%",
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
        </div>
      </div>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Search
          enterButton="Search"
          placeholder="Search Quick Transfer
"
        />
      </div>
      <div
        style={{
          overflowX: "scroll",
          width: "100%",
        }}
      >
        <div>
          <p>Recent Contact</p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              // gap: "20px",
              justifyContent: "space-between",
            }}
          >
            <div>
              <img
                width={60}
                style={{
                  borderRadius: "50%",
                }}
                src={man}
                alt=""
              />
              <p>David Gaskin</p>
            </div>
            <div>
              <img
                width={60}
                style={{
                  borderRadius: "50%",
                }}
                src={man2}
                alt=""
              />
              <p>David Gaskin</p>
            </div>
            <div>
              <img
                width={60}
                style={{
                  borderRadius: "50%",
                }}
                src={man3}
                alt=""
              />
              <p>David Gaskin</p>
            </div>
            <div>
              <img
                width={60}
                style={{
                  borderRadius: "50%",
                }}
                src={man4}
                alt=""
              />
              <p>David Gaskin</p>
            </div>
            <div>
              <img
                width={60}
                style={{
                  borderRadius: "50%",
                }}
                src={man5}
                alt=""
              />
              <p>David Gaskin</p>
            </div>
            <div>
              <img
                width={60}
                style={{
                  borderRadius: "50%",
                }}
                src={man6}
                alt=""
              />
              <p>David Gaskin</p>
            </div>
          </div>
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: '10px'
        }}> 
          <Button type="primary">TRANSFER NOW</Button>
        </div>
      </div>
    </>
  );
};

export default SelectedsSelect;
