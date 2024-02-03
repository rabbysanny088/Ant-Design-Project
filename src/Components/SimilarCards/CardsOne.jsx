// eslint-disable-next-line react/prop-types
const CardsOne = ({ imgSrc, title, value, valuetwo }) => {
  
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div>
          <img className="imgsrc" src={imgSrc} alt="" />
        </div>
        <div>
          <p style={{
            marginBottom: '8px'
          }}>{title}</p>
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <p style={{
              fontWeight: '500',
              fontSize: '17px',
              marginBottom: '0'
            }}>{value}</p>
            <p>{valuetwo}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsOne;
