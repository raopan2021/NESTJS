import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import api from '../../../api';
import './index.scss';
import Memory from './memory';

const Device: React.FC = () => {
    const [memoryData, setMemoryData] = useState({});

    //    每秒发送一次请求
    useEffect(() => {
        const timer = setInterval(() => {
            getData();
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    });

    const getData = () => {
        api.get('device')
            .then(res => {
                const chart = res.map(({ totalmem, freemem, create_time }) => {
                    return {
                        create_time: dayjs(create_time).format('mm:ss'),
                        value: totalmem - freemem,
                    };
                });
                const { totalmem, freemem } = res[res.length - 1];
                setMemoryData({
                    chart,
                    totalmem,
                    freemem,
                });
            });
    };

    return (
        <>
            <Memory memoryData={memoryData} />
        </>
    );
};

export default Device;
