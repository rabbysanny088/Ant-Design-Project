import { Space, Table } from "antd";

const TablesThree = () => {
  const dataSource = [
    {
      key: "1",
      name: "1",
      age: "Apple",
      address: "MDSA7",
      imgSrc: "../../public/apple.png",
      addressed: "$2,465,867",
      status: (
        <div>
          <span
            className="pap"
            style={{
              color: "rgb(207, 19, 34)",
              backgroundColor: "rgba(207, 19, 34, 0.2)",
            }}
          >
            Pending
          </span>
        </div>
      ),
      Budget: "23 jan,2019",
    },
    {
      key: "2",
      name: "2",
      age: "Adidos Inc.",
      address: "MDSA7",
      addressed: "$1,465,867",
      imgSrc: "../../public/adidas.png",
      status: (
        <div>
          <span
            className="pap"
            style={{
              color: "rgb(24, 144, 255)",
              backgroundColor: "rgba(24, 144, 255, 0.2)",
            }}
          >
            Approved
          </span>
        </div>
      ),
      Budget: "12 jan,2019",
    },
    {
      key: "3",
      name: "3",
      age: "Microsoft",
      address: "MDSA7",
      addressed: "$5,465,867",
      imgSrc: "../../public/instagram.png",
      status: (
        <div>
          <span
            className="pap"
            style={{
              color: "rgb(207, 19, 34)",
              backgroundColor: "rgba(207, 19, 34, 0.2)",
            }}
          >
            Pending
          </span>
        </div>
      ),
      Budget: "23 Apr,2019",
    },
    {
      key: "4",
      name: "4",
      age: "Netflix",
      address: "MDSA7",
      addressed: "$4,465,867",
      imgSrc: "../../public/netflix.png",
      status: (
        <div>
          <span
            className="pap"
            style={{
              color: "rgb(24, 144, 255)",
              backgroundColor: "rgba(24, 144, 255, 0.2)",
            }}
          >
            Approved
          </span>
        </div>
      ),
      Budget: "28 Feb,2019",
    },
    {
      key: "4",
      name: "5",
      age: "Instagram",
      address: "MDSA7",
      addressed: "$5,465,867",
      imgSrc: "../../public/microsoft.png",
      status: (
        <div>
          <span
            className="pap"
            style={{
              color: "rgb(56, 158, 13)",
              backgroundColor: "rgba(56, 158, 13, 0.2)",
            }}
          >
            Application
          </span>
        </div>
      ),
      Budget: "21 Mar,2019",
    },
    {
      key: "5",
      name: "6",
      age: "Microsoft",
      address: "MDSA7",
      addressed: "$5,465,867",
      imgSrc: "../../public/man.jpg",
      status: (
        <div>
          <span
            className="pap"
            style={{
              color: "rgb(207, 19, 34)",
              backgroundColor: "rgba(207, 19, 34, 0.2)",
            }}
          >
            Pending
          </span>
        </div>
      ),
      Budget: "23 Apr,2019",
    },
  ];

  const columns = [
    {
      title: "No.",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Name",
      dataIndex: "age",
      key: "age",
      render: (text, record) => (
        <Space>
          <img
            src={record.imgSrc}
            alt={record.age}
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
            }}
          />
          {text}
        </Space>
      ),
    },
    {
      title: "Type",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Amount",
      dataIndex: "addressed",
      key: "address",
    },
    {
      title: "Progress",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Created",
      dataIndex: "Budget",
      key: "budget",
    },
  ];
  return (
    <div>
      <Table
        style={{
          border: "none",
        }}
        scroll={{
          x: 750,
          y: 500,
        }}
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        className="time-table-row-select"
      />
    </div>
  );
};

export default TablesThree;
