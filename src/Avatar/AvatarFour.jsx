import { Avatar, Tooltip } from "antd";
import man2 from "../assets/img/man2.jpg";
import man3 from "../assets/img/man3.jpg";
import woman from "../assets/img/woman.jpg";
import woman2 from "../assets/img/woman2.jpg";
import woman3 from "../assets/img/woman3.jpg";
import woman4 from "../assets/img/woman4.jpg";

const AvatarsFour = () => {
  return (
    <>
      <Avatar.Group
        maxCount={2}
        maxStyle={{
          color: "rgb(255, 255, 255)",
          backgroundColor: "rgba(41, 151, 255, 0.6)",
        }}
      >
        <Avatar  src={woman4} />
        <Avatar src={woman} />
        <Tooltip title="Ant User" placement="top">
          <Avatar src={woman3} />
        </Tooltip>
        <Avatar src={woman4} />
        <Avatar src={woman2} />
        <Avatar src={man2} />
        <Avatar src={man3} />
      </Avatar.Group>
    </>
  );
};

export default AvatarsFour;
