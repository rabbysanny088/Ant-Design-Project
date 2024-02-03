import { Avatar, Tooltip } from "antd";
import man from "../assets/img/man.jpg";
import man2 from "../assets/img/man2.jpg";
import man3 from "../assets/img/man3.jpg";
import man4 from "../assets/img/man4.jpg";
import woman from "../assets/img/woman.jpg";
import woman2 from "../assets/img/woman2.jpg";
import woman3 from "../assets/img/woman3.jpg";
import woman4 from "../assets/img/woman4.jpg";

const AvatarsOne = () => {
  return (
    <>
      <Avatar.Group
        maxCount={2}
        maxStyle={{
          color: "rgb(255, 255, 255)",
          backgroundColor: "rgba(41, 151, 255, 0.6)",
        }}
      >
        <Avatar  src={woman} />
        <Avatar src={woman2} />
        <Tooltip title="Ant User" placement="top">
          <Avatar src={woman3} />
        </Tooltip>
        <Avatar src={woman4} />
        <Avatar src={man} />
        <Avatar src={man2} />
        <Avatar src={man3} />
        <Avatar src={man4} />
        <Avatar src={man4} />
      </Avatar.Group>
    </>
  );
};

export default AvatarsOne;
