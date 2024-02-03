import parfer from '../assets/img/newimage.svg';
import parfer2 from '../assets/img/newimage2.svg';
import { default as parfer3, default as parfer4 } from '../assets/img/newimage3.svg';


const SmallCards = () => {
  return (
    <div>
       <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img src={parfer} alt="" />
                  <div>
                    <p>$3510</p>
                    <span>Author Sales</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img src={parfer2} alt="" />
                  <div>
                    <p>$3.2M</p>
                    <span>All Time Revenue</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img src={parfer3} alt="" />
                  <div>
                    <p>$390</p>
                    <span>Commissions...</span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <img src={parfer4} alt="" />
                  <div>
                    <p>$3510</p>
                    <span>Invoices</span>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default SmallCards
