import { useState } from "react";

export default  function useTime() {
    //Khai bao thuoc tinh
    const [year,setYear] = useState('');
    const [month,setMonth] = useState('');
    const [day,setDay] = useState('');
    const [hour,setHour] = useState('');
    const [minute,setMinute] = useState('');
    const [second,setSecond] = useState('');

    //Ham update thoi gian thuc
    let updateTime = () => {
        //lay ve thoi gian hien tai
        let now = new Date();
        //Update thoi gian thuc
        setYear(now.getFullYear());
        setMonth(now.getMonth()+1);
        setDay(now.getDate());
        setHour(now.getHours());
        setMinute(now.getMinutes());
        setSecond(now.getSeconds());
    }

    setInterval(() => {
        updateTime();
    }, 1000);

    return [year,month,day,hour,minute,second];
}