import { Column } from '@ant-design/plots';
import { useEffect, useState } from 'react';

const LegendCharts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'city',
    yField: 'value',
    seriesField: 'type',
    isGroup: 'true',
    legend: {
      selected: {
        // 默认置灰
        茶叶: false,
      },
    },
  };

  return <Column {...config} />;
};

export default LegendCharts