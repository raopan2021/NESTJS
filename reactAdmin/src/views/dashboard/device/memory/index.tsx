import React from 'react';
import { useSelector } from 'react-redux';

import { Line } from '@ant-design/charts';

const Memory: React.FC = ({ memoryData }) => {
    const theme = useSelector(state => state.theme.value)

    const config = {
        data: memoryData,
        title: {
            visible: true,
            text: '带数据点的折线图',
        },
        xField: 'create_time',
        yField: 'value',
        maximum: 20,
    };

    return (
        <>
            <Line {...config} />
        </ >
    );
};

export default Memory;