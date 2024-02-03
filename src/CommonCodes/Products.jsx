import { Progress, Typography } from "antd";
import product from "../assets/img/product_image_1.png";
import product2 from "../assets/img/product_image_2.png";
import product3 from "../assets/img/product_image_3.png";
  
      
const Products = () => {
  return (
    <>
      <Typography
              style={{
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Top Selling Products
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
              className="points"
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
                    width={100}
                    style={{
                      borderRadius: "10px",
                    }}
                    src={product}
                    alt=""
                  />
                </div>
                <div>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "rgb(10, 143, 220)",
                    }}
                  >
                    Antler Theme
                  </Typography>
                  <span>Reference site about.</span>
                  <span>$6790</span>
                </div>
              </div>
              <div>
                <Progress type="circle" percent={80} size={80} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
              className="points"
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
                    width={100}
                    style={{
                      borderRadius: "10px",
                    }}
                    src={product2}
                    alt=""
                  />
                </div>
                <div>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "rgb(10, 143, 220)",
                    }}
                  >
                    Live Chat Support
                  </Typography>
                  <span>information on its origins.</span>
                  <span>$4430</span>
                </div>
              </div>
              <div>
                <Progress type="circle" percent={64} size={80} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
              className="points"
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
                      borderRadius: "10px",
                    }}
                    width={100}
                    src={product3}
                    alt=""
                  />
                </div>
                <div>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "rgb(10, 143, 220)",
                    }}
                  >
                    Puzzle Mask
                  </Typography>
                  <span>information Lipsum generator.</span>
                  <span>$2330</span>
                </div>
              </div>
              <div>
                <Progress type="circle" percent={55} size={80} />
              </div>
            </div> 
    </>
  )
}

export default Products
