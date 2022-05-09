import useTime from "./MyHook";

function CustomHookDemo() {
    const [year,month,day,hour,minute,second] = useTime();

    return (
        <div>
            <h1>{year} - {month} - {day} - {hour}:{minute}:{second}</h1>
        </div>
    )
}

export default CustomHookDemo;