
import { Pie } from '@ant-design/plots';

const SalesChartsAndPie = () => {
  const data = [
    {
      type: 'Excited',
      value: 27,
    },
    {
      type: 'High Willingness',
      value: 25,
    },
    {
      type: 'Want to Know',
      value: 18,
    },
    {
      type: 'INterested',
      value: 15,
    },
    {
      type: 'Low Willingness',
      value: 10,
    },
    {
      type: 'Not Interested',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'AntV\nG2Plot',
      },
    },
  };
  return <Pie {...config} />;
};

export default SalesChartsAndPie