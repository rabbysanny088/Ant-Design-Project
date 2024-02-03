import us from "../../assets/img/us.png";

const PopoversOne = () => {
  return (
    <div>
      <div style={{}}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            cursor: "pointer",
          }}
          className="us"
        >
          <img src={us} alt="" />
          <p>English</p>
        </div>
      </div>
      <div style={{}}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            cursor: "pointer",
          }}
          className="us"
        >
          <img src={us} alt="" />
          <p>Bangla</p>
        </div>
      </div>
      <div style={{}}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            cursor: "pointer",
          }}
          className="us"
        >
          <img src={us} alt="" />
          <p>French</p>
        </div>
      </div>
    </div>
  );
};

export default PopoversOne;
