import dayjs from "dayjs";
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../../api';
import './index.scss';
import Memory from './memory';

const Device: React.FC = () => {
    const theme = useSelector(state => state.theme.value)

    const [memoryData, setMemoryData] = useState({})

    //    每秒发送一次请求
    useEffect(() => {
        const timer = setInterval(() => {
            getData()
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    })

    const getData = () => {
        api.get('device')
            .then(res => {
                setMemoryData(res.map(({ totalmem, freemem, create_time }) => {
                    return {
                        create_time: dayjs(create_time).format('mm:ss'),
                        value: totalmem - freemem
                    }
                }))
                console.log(memoryData);
            })
    }

    return (
        <>
            <Memory memoryData={memoryData} />
        </>
    );
};

export default Device;
