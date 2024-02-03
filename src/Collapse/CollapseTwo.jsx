import { Collapse, Progress } from "antd";
const text = (
  <div>
    <div
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <p>10853</p>
      <span>Session</span>
    </div>
  </div>
);
const items = [
  {
    key: "1",
    label: (
      <div>
        <p>organic Search</p>
        <Progress percent={78} />
      </div>
    ),
    children: <p>{text}</p>,
    showArrow: false,
  },
  {
    key: "2",
    label: (
      <div>
        <p>Direct</p>
        <Progress percent={90} />
      </div>
    ),
    children: <p>{text}</p>,
    showArrow: false,
  },
  {
    key: "3",
    label: (
      <div>
        <p>Referral</p>
        <Progress percent={25} />
      </div>
    ),
    children: <p>{text}</p>,
    showArrow: false,
  },
  {
    key: "4",
    label: (
      <div>
        <p>Email</p>
        <Progress percent={40} />
      </div>
    ),
    children: <p>{text}</p>,
    showArrow: false,
  },
  {
    key: "5",
    label: (
      <div>
        <p>Social</p>
        <Progress percent={55} />
      </div>
    ),
    children: <p>{text}</p>,
    showArrow: false,
  },
  {
    key: "6",
    label: (
      <div>
        <p>Advertise</p>
        <Progress percent={70} />
      </div>
    ),
    children: <p>{text}</p>,
    showArrow: false,
  },
];
const CollapseTwo = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse defaultActiveKey={["1"]} accordion onChange={onChange} items={items} />
  );
};
export default CollapseTwo;
