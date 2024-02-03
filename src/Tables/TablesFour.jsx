import { Space, Table } from "antd";

const TablesFour = () => {
  const dataSource = [
    {
      key: "1",
      name: "1",
      age: "Angelina Jow.",
      address: "344553",
      imgSrc: "../../public/man.jpg",
      addressed: "+435-372-2718      ",
      Budget: "+435-372-2718      ",
    },
    {
      key: "2",
      name: "2",
      age: "John Mathew",
      address: "776843",
      addressed: "12 Jan, 2019	",
      imgSrc: "../../public/man2.jpg",
      Budget: "+435-372-2718      ",
    },
    {
      key: "3",
      name: "3",
      age: "Alfred Marshall",
      address: "523656",
      addressed: "28 Feb, 2019	",
      imgSrc: "../../public/man3.jpg",
      Budget: "+435-372-2718      ",
    },
    {
      key: "4",
      name: "4",
      age: "George Bailey",
      address: "434356",
      addressed: "21 Mar, 2019",
      imgSrc: "../../public/man4.jpg",
      Budget: "+435-372-2718      ",
    },
    {
      key: "5",
      name: "5",
      age: "Maria Lee",
      address: "234565",
      addressed: "23 Apr, 2019",
      imgSrc: "../../public/woman.jpg",
      Budget: "+435-372-2718      ",
    },
    {
      key: "6",
      name: "6",
      age: "John Lee",
      address: "234434",
      addressed: "29 June, 2019",
      imgSrc: "../../public/woman2.jpg",
      Budget: "+435-323-3543      ",
    },
    {
      key: "7",
      name: "7",
      age: "Mark Wood",
      address: "345463	",
      addressed: "30 June, 2019",
      imgSrc: "../../public/woman3.jpg",
      Budget: "+353-372-4345      ",
    },
    {
      key: "8",
      name: "8",
      age: "Rohit Dean      ",
      address: "423454",
      addressed: "05 July, 2019",
      imgSrc: "../../public/woman4.jpg",
      Budget: "+435-482-2218",
    },
    {
      key: "9",
      name: "9",
      age: "Maria Lee",
      address: "234565",
      addressed: "23 Apr, 2019",
      imgSrc: "../../public/man.jpg",
      Budget: "+435-372-2718",
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
      title: "Ticket ID	",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Create Date",
      dataIndex: "addressed",
      key: "address",
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

export default TablesFour;
