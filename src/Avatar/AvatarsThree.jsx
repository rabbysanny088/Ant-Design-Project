import { Avatar, Tooltip } from "antd";
import woman2 from "../assets/img/woman2.jpg";
import woman3 from "../assets/img/woman3.jpg";
import woman4 from "../assets/img/woman4.jpg";

const AvatarsThree = () => {
  return (
    <>
      <Avatar.Group
        maxCount={2}
        maxStyle={{
          color: "rgb(255, 255, 255)",
          backgroundColor: "rgba(41, 151, 255, 0.6)",
        }}
      >
        <Avatar  src={woman2} />
        <Avatar src={woman4} />
        <Tooltip title="Ant User" placement="top">
          <Avatar src={woman3} />
        </Tooltip>
        <Avatar src={woman4} />
        <Avatar src={woman2} />
      </Avatar.Group>
    </>
  );
};

export default AvatarsThree;
