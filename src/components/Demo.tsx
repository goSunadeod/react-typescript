import React, { useState } from 'react';
import styles from './index.less';
import Button from 'antd/es/button';


function Index() {
    // useState初始值可以传入一个函数 返回值
    const [count, setCount] = useState(() => {
        const initState = 0;
        return initState + 1
    });
    const [age, setAge] = useState(0);
    function handleClick () {
        [1,2].forEach(item => {
            setAge(item)
        })
    }
    return <>
        Count: {count}
        Age: {age}
        <button
            onClick={() => {
                setCount(0)
            }}
            data-xt="31">
            Reset
        </button>
        <button
            onClick={() => {
                // setState方法第一个参数为以前的值
                setCount(pre => pre + 1)
            }}
            data-xt="32">
            +
        </button>
        <button
            onClick={() => {
                setCount(pre => pre - 1)
            }}
            data-xt="33">
            -
        </button>
        <br />
        <Button onClick={handleClick} className={styles['test']} data-xt="34">测试循环</Button>
    </>;
}

export default Index;
