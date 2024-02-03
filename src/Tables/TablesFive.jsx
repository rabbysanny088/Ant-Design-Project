import { MoreOutlined } from "@ant-design/icons";
import { Popover, Table } from "antd";
import Contents from "./Contents";

const TablesFive = () => {
  const dataSource = [
    {
      key: "1",
      name: (
        <div>
          <p
            style={{
              color: "blue",
              fontWeight: "500",
              textDecoration: "underline",
            }}
          >
            #SK231
          </p>
        </div>
      ),
      age: "Ina Hughes",
      address: "08-21-2020",
      data: <p style={{ color: "rgb(248, 78, 78)" }}>COD</p>,
      usdAmount: <span className="in">In Transt</span>,
      Amount: (
        <Popover placement="bottom" content={<Contents />} trigger="click">
          <MoreOutlined
            className="more"
            style={{
              fontWeight: "bold",
              fontSize: "16px",
            }}
          />
        </Popover>
      ),
    },
    {
      key: "2",
      name: (
        <div>
          <p
            style={{
              color: "blue",
              fontWeight: "500",
              textDecoration: "underline",
            }}
          >
            #SK232
          </p>
        </div>
      ),
      age: "Myrtie Ferguson",
      address: "08-12-2020",
      data: <p style={{ color: "rgb(67, 200, 136)" }}>Prepaid</p>,
      usdAmount: (
        <span
          className="in"
          style={{
            color: "rgb(67, 200, 136)",
            backgroundColor: "rgba(67, 200, 136, 0.267)",
          }}
        >
          Delivered
        </span>
      ),
      Amount: (
        <Popover placement="bottom" content={<Contents />} trigger="click">
          <MoreOutlined
            className="more"
            style={{
              fontWeight: "bold",
              fontSize: "16px",
            }}
          />
        </Popover>
      ),
    },
    {
      key: "3",
      name: (
        <div>
          <p
            style={{
              color: "blue",
              fontWeight: "500",
              textDecoration: "underline",
            }}
          >
            #SK233
          </p>
        </div>
      ),
      age: "Johnny Herrera",
      address: "07-30-2020",
      data: <p style={{ color: "rgb(67, 200, 136)" }}>Prepaid </p>,
      usdAmount: <span className="in">In Transt</span>,
      Amount: (
        <Popover placement="bottom" content={<Contents />} trigger="click">
          <MoreOutlined
            className="more"
            style={{
              fontWeight: "bold",
              fontSize: "16px",
            }}
          />
        </Popover>
      ),
    },
    {
      key: "4",
      name: (
        <div>
          <p
            style={{
              color: "blue",
              fontWeight: "500",
              textDecoration: "underline",
            }}
          >
            #SK234
          </p>
        </div>
      ),
      age: "Barbara Bowers",
      address: "07-25-2020",
      data: <p style={{ color: "red" }}>COD </p>,
      usdAmount: (
        <span
          className="in"
          style={{
            color: "rgb(67, 200, 136)",
            backgroundColor: "rgba(67, 200, 136, 0.267)",
          }}
        >
          Delivered
        </span>
      ),
      Amount: (
        <Popover placement="bottom" content={<Contents />} trigger="click">
          <MoreOutlined
            className="more"
            style={{
              fontWeight: "bold",
              fontSize: "16px",
            }}
          />
        </Popover>
      ),
    },
    {
      key: "5",
      name: (
        <div>
          <p
            style={{
              color: "blue",
              fontWeight: "500",
              textDecoration: "underline",
            }}
          >
            #SK235
          </p>
        </div>
      ),
      age: "Annie Herrera",
      address: "07-11-2020",
      data: <p style={{ color: "red" }}>Refunded</p>,
      usdAmount: <span className="in">In Transt</span>,
      Amount: (
        <Popover placement="bottom" content={<Contents />} trigger="click">
          <MoreOutlined
            className="more"
            style={{
              fontWeight: "bold",
              fontSize: "16px",
            }}
          />
        </Popover>
      ),
    },
    {
      key: "6",
      name: (
        <div>
          <p
            style={{
              color: "blue",
              fontWeight: "500",
              textDecoration: "underline",
            }}
          >
            #SK236
          </p>
        </div>
      ),
      age: "Ann Herrington",
      address: "06-21-2020",
      data: <p style={{ color: "red" }}>COD </p>,
      usdAmount: (
        <span
          className="in"
          style={{
            color: "rgb(226, 167, 46)",
            backgroundColor: "rgba(226, 167, 46, 0.267)",
          }}
        >
          Return
        </span>
      ),
      Amount: (
        <Popover placement="bottom" content={<Contents />} trigger="click">
          <MoreOutlined
            className="more"
            style={{
              fontWeight: "bold",
              fontSize: "16px",
            }}
          />
        </Popover>
      ),
    },
    {
      key: "7",
      name: (
        <div>
          <p
            style={{
              color: "blue",
              fontWeight: "500",
              textDecoration: "underline",
            }}
          >
            #SK237
          </p>
        </div>
      ),
      age: "Ina Hughes",
      address: "06-12-2020",
      data: <p style={{ color: "red" }}>COD </p>,
      usdAmount: <span className="in">In Transt</span>,
      Amount: (
        <Popover placement="bottom" content={<Contents />} trigger="click">
          <MoreOutlined
            className="more"
            style={{
              fontWeight: "bold",
              fontSize: "16px",
            }}
          />
        </Popover>
      ),
    },
  ];

  const columns = [
    {
      title: "OrderID",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Customer",
      dataIndex: "age",
      key: "age",
    },

    {
      title: "Order Date",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Payment",
      dataIndex: "data",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "usdAmount",
      key: "usdAmount",
    },
    {
      title: "",
      dataIndex: "Amount",
      key: "amount",
    },
  ];

  return (
    <>
      <Table
        className="hover"
        pagination={false}
        dataSource={dataSource}
        columns={columns}
        scroll={{
          x: 1000,
          y: 400,
        }}
      />
    </>
  );
};

export default TablesFive;
