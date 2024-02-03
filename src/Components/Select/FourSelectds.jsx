import { Select } from "antd";

const FourSelecteds = () => {
  return (
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
  );
};

export default FourSelecteds;
