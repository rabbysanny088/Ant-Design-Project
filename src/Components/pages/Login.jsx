import { Button, Checkbox, Form, Input, Spin, message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import c from "../../assets/img/c.png";
import { useFirebase } from "../../context/FirebaseProvider";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const navigate = useNavigate();

  const firebases = useFirebase();

  console.log(firebases);

  
  const handleSubmit = async () => {
    setLoading(true);
    console.log("login  a user...");
    try {
      await firebases.singinUserWithEmailAndPass(email, password);
      console.log("Successful sign up...");
    } catch (error) {
      message.error(error.message);
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
    <Form onFinish={handleSubmit}>
        <div className="last">
      <Spin spinning={loading} tip="loading..">
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
                  LogIn
                </p>
              </div>
            </div>
            <Form.Item
              name="password"
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
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                />
              </div>
            </Form.Item>
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
                <Input.Password
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                />
              </div>
            </Form.Item>
          </div>
          <>
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
          </>
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
              Create account ?{" "}
              <span
                style={{
                  color: "#0011ff",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              >
                Singup
              </span>
            </p>
          </div>
          <div
            style={{
              marginTop: "10px",
            }}
          >
            <Button htmlType="submit" onClick={() => {}} type="primary" block>
              Login
            </Button>
          </div>
      </Spin>
        </div>
    </Form>
  );
};

export default Login;
