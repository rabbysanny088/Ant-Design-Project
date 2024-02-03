import { Select } from "antd";

const ThreeSelecteds = () => {
  return (
    <div>
      <Select
        defaultValue="All"
        style={{
          width: 120,
        }}
        options={[
          {
            value: "All",
            label: "All",
          },
          {
            value: "Complete",
            label: "Complete",
          },
          {
            value: "Pending",
            label: "Pending",
          },
        ]}
      />
    </div>
  );
};

export default ThreeSelecteds;
