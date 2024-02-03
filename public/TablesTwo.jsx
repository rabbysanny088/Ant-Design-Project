import { Space, Table } from "antd";

const TablesTwo = () => {
  const dataSource = [
    {
      key: "1",
      name: (
        <div>
          <div>
            <p
              style={{
                fontWeight: "600",
              }}
            >
              Anthony Freeman
            </p>
          </div>
          <div>
            <span>anthonyfreeman@gmail.com</span>
          </div>
        </div>
      ),
      age: "Samsung",
      address: "Smart Phone	",
      imgSrc: "../../public/woman.jpg",
      addressed: "$38,536",
      status: "Done",
    },
    {
      key: "2",
      name: (
        <div>
          <div>
            <p
              style={{
                fontWeight: "600",
              }}
            >
              Julian Josephs
            </p>
          </div>
          <div>
            <span>Josephs@gmail.com</span>
          </div>
        </div>
      ),
      age: "Asus",
      address: "Laptop",
      addressed: "$20,573",
      imgSrc: "../../public/woman2.jpg",
      status: "On Process",
    },
    {
      key: "3",
      name: (
        <div>
          <div>
            <p
              style={{
                fontWeight: "600",
              }}
            >
              Brook Sanders
            </p>
          </div>
          <div>
            <span>brooksanders@gmail.com</span>
          </div>
        </div>
      ),
      age: "Google",
      address: "Watch",
      addressed: "$17,457",
      imgSrc: "../../public/woman3.jpg",
      status: "Pending",
    },
    {
      key: "4",
      name: (
        <div>
          <div>
            <p
              style={{
                fontWeight: "600",
              }}
            >
              Jeff M. Peek
            </p>
          </div>
          <div>
            <span>JeffMPeek@armyspy.com</span>
          </div>
        </div>
      ),
      age: "Apple",
      address: "Computer",
      addressed: "$15,354",
      imgSrc: "../../public/woman4.jpg",
      status: "Done",
    },
    {
      key: "4",
      name: (
        <div>
          <div>
            <p
              style={{
                fontWeight: "600",
              }}
            >
              Anthony Freeman
            </p>
          </div>
          <div>
            <span>anthonyfreeman@gmail.com</span>
          </div>
        </div>
      ),
      age: "Panasonic",
      address: "Sunglass",
      addressed: "$12,354",
      imgSrc: "../../public/woman3.jpg",
      status: "Done",
    },
    {
      key: "5",
      name: (
        <div>
          <div>
            <p
              style={{
                fontWeight: "600",
              }}
            >
Julian Josephs
            </p>
          </div>
          <div>
            <span>Julian Josephs</span>
          </div>
        </div>
      ),
      age: "Panasonic",
      address: "Sunglass",
      addressed: "$12,354",
      imgSrc: "../../public/woman3.jpg",
      status: "Done",
    },
    {
      key: "6",
      name: (
        <div>
          <div>
            <p
              style={{
                fontWeight: "600",
              }}
            >
              Anthony Freeman
            </p>
          </div>
          <div>
            <span>anthonyfreeman@gmail.com</span>
          </div>
        </div>
      ),
      age: "Panasonic",
      address: "Sunglass",
      addressed: "$12,354",
      imgSrc: "../../public/woman3.jpg",
      status: "Done",
    },
  ];

  const columns = [
    {
      title: "Team Lead",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Space>
          <img
            src={record.imgSrc}
            alt={record.name}
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
      title: "Project",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Team",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      dataIndex: "addressed",
      key: "address",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Weeks",
      dataIndex: "weeks",
      key: "weeks",
    },
    {
      title: "Budget",
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
        // scroll={{
        //   x: 1000,
        //   y: 400,
        // }}
        pagination={false}
        dataSource={dataSource}
        columns={columns}
      />
      ;
    </div>
  );
};

export default TablesTwo;
