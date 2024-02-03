import { Collapse, Progress } from "antd";
const text = (
  <>
    <div>
      <p>Open</p>
      <Progress
        style={{
          width: "100%",
        }}
        percent={65}
        status="active"
        size="small"
        strokeColor='green'
      />
    </div>
    <div>
      <p>Closed</p>
      <Progress
        style={{
          width: "100%",
        }}
        percent={87}
        status="active"
        size="small"
        strokeColor="red"
      />
    </div>
    <div>
      <p>On Hold</p>
      <Progress
        style={{
          width: "100%",
        }}
        percent={56}
        size="small"
        strokeColor="aqua"
      />
    </div>
  </>
);
const items = [
  {
    key: "1",
    label: "Support Tickets",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];
const CollpaseOne = () => (
  <Collapse defaultActiveKey={["1"]} accordion items={items} />
);
export default CollpaseOne;
