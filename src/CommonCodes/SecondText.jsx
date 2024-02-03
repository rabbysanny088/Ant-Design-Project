const SecondText = () => {
  return (
    <>
      <h4>Card Details</h4>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
        className="responsiveText"
      >
        <div>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Card Holder
          </p>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Demo One
          </span>
        </div>
        <div>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Bank Name
          </p>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            HDFC First Bank
          </span>
        </div>
        <div>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Card Number
          </p>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            **** **** **** 1234
          </span>
        </div>
        <div>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "400",
            }}
          >
            Valid Date
          </p>
          <span
            style={{
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            12/12
          </span>
        </div>
      </div>
    </>
  );
};

export default SecondText;
