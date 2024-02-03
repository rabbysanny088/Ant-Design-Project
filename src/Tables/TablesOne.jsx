import { Table } from "antd";

const TablesOne = () => {
  const dataSource = [
    {
      key: "1",
      name: "TXN43534543543",
      age: (
        <div
          style={{
            display: "flex",
          }}
        >
          <img src="../../public/up-arrow-light.svg" alt="" />
          <img src="../../public/icon2.svg" alt="" />
        </div>
      ),
      address: "Sell Bitcoin",
      data: "02/10/2020 10:45 PM",
      usdAmount: "9,285.71",
      Amount: "+ 0.94750",
    },
    {
      key: "2",
      name: "TXN34545646637",
      age: (
        <div
          style={{
            display: "flex",
          }}
        >
          <img src="../../public/up-arrow-light.svg" alt="" />
          <img src="../../public/icon3.svg" alt="" />
        </div>
      ),
      address: "Sell Ethereum",
      data: "12,596.55",
      usdAmount: "03/20/2010 12:37 ",
      Amount: "+ 1.020560",
    },
    {
      key: "3",
      name: "TXN73547248765",
      age: (
        <div
          style={{
            display: "flex",
          }}
        >
          <img src="../../public/icon1.svg" alt="" />
          <img src="../../public/icon2.svg" alt="" />
        </div>
      ),
      address: "Buy Bitcoin	",
      data: "02/20/2020 11:37 ",
      usdAmount: "02/10/2023 11:37 ",
      Amount: "+ 0.00056",
    },
    {
      key: "4",
      name: "TXN73547248762",
      age: (
        <div
          style={{
            display: "flex",
          }}
        >
          <img src="../../public/up-arrow-light.svg" alt="" />
          <img src="../../public/icon3.svg" alt="" />
        </div>
      ),
      address: "Sell Ethereum",
      data: "02/06/2020 11:37 ",
      usdAmount: "02/10/2020 11:37 ",
      Amount: "+ 0.02575",
    },
    {
      key: "5",
      name: "TXN73547248764",
      age: (
        <div
          style={{
            display: "flex",
          }}
        >
          <img src="../../public/icon1.svg" alt="" />
          <img src="../../public/icon2.svg" alt="" />
        </div>
      ),
      address: "Buy Bitcoin	",
      data: "02/10/2020 11:37 ",
      usdAmount: "02/10/2020 11:37 ",
      Amount: "+ 0.02575",
    },
    {
      key: "6",
      name: "TXN73547248764",
      age: (
        <div
          style={{
            display: "flex",
          }}
        >
          <img src="../../public/up-arrow-light.svg" alt="" />
          <img src="../../public/icon2.svg" alt="" />
        </div>
      ),
      address: "Sell Ethereum",
      data: "02/10/2020 11:37 ",
      usdAmount: "02/10/2020 11:37 ",
      Amount: "+ 0.02575",
    },
    {
      key: "7",
      name: "TXN73547248764",
      age: (
        <div
          style={{
            display: "flex",
          }}
        >
          <img src="../../public/up-arrow-light.svg" alt="" />
          <img src="../../public/icon2.svg" alt="" />
        </div>
      ),
      address: "Buy Bitcoin	",
      data: "02/10/2020 11:37 ",
      usdAmount: "02/10/2020 11:37 ",
      Amount: "+ 0.02575",
    },
    {
      key: "8",
      name: "TXN73547248764",
      age: (
        <div
          style={{
            display: "flex",
          }}
        >
          <img src="../../public/icon1.svg" alt="" />
          <img src="../../public/icon2.svg" alt="" />
        </div>
      ),
      address: "Sell Ethereum",
      data: "02/10/2020 11:37 ",
      usdAmount: "02/10/2020 11:37 ",
      Amount: "+ 0.02575",
    },
    {
      key: "9",
      name: "TXN73547248764",
      age: (
        <div
          style={{
            display: "flex",
          }}
        >
          <img src="../../public/icon1.svg" alt="" />
          <img src="../../public/icon2.svg" alt="" />
        </div>
      ),
      address: "Buy Bitcoin	",
      data: "02/10/2020 11:37 ",
      usdAmount: "02/10/2020 11:37 ",
      Amount: "02/10/2020 11:37 ",
    },
    {
      key: "10",
      name: "TXN73547248764",
      age: (
        <div
          style={{
            display: "flex",
          }}
        >
          <img src="../../public/icon1.svg" alt="" />
          <img src="../../public/icon2.svg" alt="" />
        </div>
      ),
      address: "Sell Ethereum",
      data: "02/10/2020 11:37 ",
      usdAmount: "02/10/2020 11:37 ",
      Amount: "+ 0.02575",
    },
  ];

  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "age",
      key: "age",
    },

    {
      title: "Description",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Date",
      dataIndex: "data",
      key: "date",
    },
    {
      title: "USD Amount",
      dataIndex: "usdAmount",
      key: "usdAmount",
    },
    {
      title: "Amount",
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

export default TablesOne;
