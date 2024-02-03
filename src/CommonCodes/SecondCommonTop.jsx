import Typography from "antd/es/typography/Typography";

const SecondCommonTop = () => {
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
          <Typography
            style={{
              lineHeight: "1.4993rem",
              fontWeight: "600",
              fontSize: "17px",
            }}
          >
            Top Leaders
          </Typography>
        </div>
        <div>
          <p
            style={{
              fontWeight: "500",
              color: "red",
              fontSize: "15px",
            }}
          >
            View All
          </p>
        </div>
      </div>
    </>
  );
};

export default SecondCommonTop;
