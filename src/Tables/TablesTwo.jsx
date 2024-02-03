import { Avatar, Badge, Space, Table } from "antd";

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
      address: (
        <div>
          <Avatar.Group maxCount={2}>
            <Avatar src="../../public/woman.jpg" />
            <Avatar src="../../public/woman2.jpg" />
            <Avatar src="../../public/man.jpg" />
            <Avatar src="../../public/man2.jpg" />
          </Avatar.Group>
        </div>
      ),
      imgSrc: "../../public/woman.jpg",
      addressed: <Badge dot color="green" />,
      status: "16",
      Budget: '$96k'
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
      age: "Real Homes WP Theme	      ",
      address: (
        <div>
          <Avatar.Group maxCount={2}>
            <Avatar src="../../public/woman3.jpg" />
            <Avatar src="../../public/woman2.jpg" />
            <Avatar src="../../public/man.jpg" />
          </Avatar.Group>
        </div>
      ),
      addressed: <Badge dot color="blue" />,
      imgSrc: "../../public/woman2.jpg",
      status: "22",
      Budget: '$126k'
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
      age: "MedicalPro WP Theme	      ",
      address: (
        <div>
          <Avatar.Group maxCount={2}>
            <Avatar src="../../public/woman3.jpg" />
            <Avatar src="../../public/woman2.jpg" />
            <Avatar src="../../public/woman4.jpg" />
            <Avatar src="../../public/man.jpg" />
          </Avatar.Group>
        </div>
      ),
      addressed: <Badge dot color="red" />,
      imgSrc: "../../public/woman3.jpg",
      status: "30",
      Budget: '$266k'
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
      age: "Hosting Press HTML	      ",
      address: (
        <div>
          <Avatar.Group maxCount={2}>
            <Avatar src="../../public/man.jpg" />
            <Avatar src="../../public/man2.jpg" />
            <Avatar src="../../public/man3.jpg" />
          </Avatar.Group>
        </div>
      ),
      addressed: <Badge dot color="orange" />,
      imgSrc: "../../public/woman4.jpg",
      status: "25",
      Budget: '$56k'
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
      age: "Elite Admin	      ",
      address: (
        <div>
          <Avatar.Group maxCount={2}>
            <Avatar src="../../public/man3.jpg" />
            <Avatar src="../../public/woman.jpg" />
            <Avatar src="../../public/man2.jpg" />
          </Avatar.Group>
        </div>
      ),
      addressed: <Badge dot color="yellow" />,
      imgSrc: "../../public/woman3.jpg",
      status: "15",
      Budget: '$76k'
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
      age: "Real Homes WP Theme	      ",
      address: (
        <div>
          <Avatar.Group maxCount={2}>
            <Avatar src="../../public/woman2.jpg" />
            <Avatar src="../../public/woman4.jpg" />
            <Avatar src="../../public/man.jpg" />
          </Avatar.Group>
        </div>
      ),
      addressed: <Badge style={{}} dot color="gold" />,
      imgSrc: "../../public/man.jpg",
      status: "12",
      Budget: '$86k'
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
      title: "Weeks",
      dataIndex: "status",
      key: "status",
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
        scroll={{
          x: 1400,
          y: 400,
        }}
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        className='time-table-row-select'
      />
    </div>
  );
};

export default TablesTwo;
