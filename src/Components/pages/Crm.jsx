import { Card, Col, Row } from "antd";
import FirstCardsAvatar from "../../Card/FirstCards";
import SecondCommonTop from "../../CommonCodes/SecondCommonTop";
import TablesTop from "../../CommonCodes/TablesTop";
import FirseCards from "../../SeconSection/FirstCards";
import TablesFour from "../../Tables/TablesFour";
import TablesThree from "../../Tables/TablesThree";
import TablesTwo from "../../Tables/TablesTwo";
import ColumnCharts from "../Charts/ColumnCharts";
import LegendCharts from "../Charts/LegendCharts";
import MultipleLineCharts from "../Charts/MultipleLineCharts";
import PieCharts from "../Charts/PieCharts";
import SalesChartsAndPie from "../Charts/SalesChartsAndPie";
import SelectdsSecondTwo from "../Select/SelectdsSecondTwo";
import ThreeSelecteds from "../Select/ThreeSelecteds";
import ThreeThree from "../SimilarCards/ThreeThreeTop";

const Crm = () => {
  return (
    <>
      <div>
        <FirseCards />
      </div>
      <Row gutter={[12, 12]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={16}>
          <Card
            style={{
              marginTop: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3>Visitors & Page Views</h3>
              </div>
              <div>
                <SelectdsSecondTwo />
              </div>
            </div>
            <div>
              <MultipleLineCharts />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={8}>
          <Card>
            <h3>Opportunities Won</h3>
            <LegendCharts />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <FirstCardsAvatar />
        </Col>
        <Col xs={24} sm={24} md={12} lg={16} xl={16} xxl={16}>
          <Card>
            <SecondCommonTop />
            <div>
              <TablesTwo />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
          <Card>
            <PieCharts />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={16}>
          <Card>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3>Deals</h3>
                </div>
                <div>
                  <ThreeSelecteds />
                </div>
              </div>
            </div>
            <TablesThree />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={8}>
          <Card>
            <div>
              <ThreeThree />
            </div>
            <div>
              <SalesChartsAndPie />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={16}>
          <Card style={{
            height: '100%'
          }}>
            <div>
              <TablesTop />
            </div>
            <div>
              <TablesFour />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
          <Card style={{
            height: '100%'
          }}>
            <ColumnCharts />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Crm;
