import react,{Component} from 'react';

export default class ChangeColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color:"black"
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({color:"pink"});
        },2000);
    }
    render() {
        return (
            <div style={{backgroundColor:this.state.color,paddingTop:20,width:400,height:100,margin:"auto"}}/>
        )
    }
}