import React,{Component} from "react";

class Welcome extends Component {
    render(){
        // return <h1>Class Component</h1>
        return React.createElement(
            'div',
            {id:'welcometext',className:'text'},
            React.createElement('h3',null,this.props.name)
            )
    }
}

export default Welcome