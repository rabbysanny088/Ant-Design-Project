import { Button, Checkbox, Divider, Form, Input, Spin } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import c from "../../assets/img/c.png";
import { useFirebase } from "../../context/FirebaseProvider";

const Singup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const firebases = useFirebase();
  console.log(firebases);

  const handleSubmit = async () => {
    setLoading(true);
    console.log("Signing up a user...");
    try {
      const result = await firebases.UsersSignin(email, password);
      console.log("Successful sign up...", result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (firebases.isLoggedIn) {
      navigate("/crypotos");
    }
  }, [firebases, navigate]);

  return (
    <div>
      <Form onFinish={handleSubmit}>
          <div className="last">
          <Spin spinning={loading} tip="Loading...">

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <img width={20} src={c} alt="" />
                <div>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                    }}
                  >
                    Signup
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Button
                  onClick={() => firebases.finalGoogle()}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <img
                    width={20}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                    alt=""
                  />
                  Signup with google
                </Button>
                <Button
                  onClick={() => firebases.finalGoogle()}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    width={20}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
                    alt=""
                  />
                  Signup with google
                </Button>
              </div>
              <Divider>Or</Divider>
              <div>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: (
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          Please input your username!
                        </div>
                      ),
                    },
                  ]}
                >
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Name"
                    name="username"
                  />
                </Form.Item>
              </div>

              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: (
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        Please input your email!
                      </div>
                    ),
                  },
                ]}
              >
                <div>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                  />
                </div>
              </Form.Item>

              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: (
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        Please input your password!
                      </div>
                    ),
                  },
                ]}
              >
                <div>
                  <Input.Password
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                  />
                </div>
              </Form.Item>
            </div>

            <Checkbox
              style={{
                display: "flex",
              }}
              onChange={onChange}
            >
              I agree to{" "}
              <span
                style={{
                  color: "rgb(10, 143, 220)",
                  fontSize: "14px",
                  fontWight: "600",
                }}
              >
                Terms & Conditions
              </span>
            </Checkbox>
            <div>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Already have an account ?{" "}
                <span
                  style={{
                    color: "#0011ff",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
            <Form.Item
              style={{
                marginTop: "10px",
              }}
            >
              <Button htmlType="submit" type="primary" block>
                Create Account
              </Button>
            </Form.Item>
            </Spin>
          </div>
      </Form>
    </div>
  );
};

export default Singup;
