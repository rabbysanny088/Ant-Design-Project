import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import TabsOne from "./TabsOne";
import TabsTwo from "./TabsTwo";

const MainTabs = () => {
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        onChange={onChange}
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <TabPane tab="Buy" key="1" style={{ width: "100%" }}>
          <TabsOne />
        </TabPane>
        <TabPane tab="Sell" key="2" style={{ width: "100%" }}>
          <TabsTwo />
        </TabPane>
      </Tabs>
    </>
  );
};

export default MainTabs;
