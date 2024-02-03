import { Select } from "antd";

const FiveSelecteds = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h4>Orders & Transaction</h4>
        </div>
        <div>
          <Select
            defaultValue="This Weeks"
            style={{
              width: 120,
            }}
            options={[
              {
                value: "This Weeks",
                label: "This Weeks",
              },
              {
                value: "Last Weeks",
                label: "Last Weeks",
              },
              {
                value: "Last Month",
                label: "Last Month",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default FiveSelecteds;
