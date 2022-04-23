import SayHello from "./greetingApp";
import HelloHero from "./HelloHero";

const Greeting = () => {
    return (
        <div className="container">
            <SayHello value={"Hao"} age={"21"} />
            <br></br>
            <HelloHero />
        </div>
    )
};

export default Greeting;