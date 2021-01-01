import React from "react";

class ButtonComponent extends React.Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleFNClick = this.handleFNClick.bind(this);
    }

    handleFNClick(type){
        this.props.handleFNClick(type);
    }

    //handle Number click
    handleClick(num){
        this.props.handleClick(num);
    }

    render(){
        return (
            <>
                <div className="row justify-content-md-center">
                    <NumButton num={7} handleClick={this.handleClick}/>
                    <NumButton num={8} handleClick={this.handleClick}/>
                    <NumButton num={9} handleClick={this.handleClick}/>
                    <FnButton id={1} handleFNClick={this.handleFNClick} fn="/"/>
                </div>
                <div className={"row justify-content-md-center"}>
                    <NumButton num={4} handleClick={this.handleClick}/>
                    <NumButton num={5} handleClick={this.handleClick}/>
                    <NumButton num={6} handleClick={this.handleClick}/>
                    <FnButton id={2} handleFNClick={this.handleFNClick} fn={"*"}/>
                </div>
                <div className={"row justify-content-md-center"}>
                    <NumButton num={1} handleClick={this.handleClick}/>
                    <NumButton num={2} handleClick={this.handleClick}/>
                    <NumButton num={3} handleClick={this.handleClick}/>
                    <FnButton id={3} handleFNClick={this.handleFNClick} fn={"-"}/>
                </div>
                <div className={"row justify-content-md-center"}>
                    <FnButton id={5} handleFNClick={this.handleFNClick} fn={"."}/>
                    <NumButton num={0} handleClick={this.handleClick}/>
                    <FnButton id={6} handleFNClick={this.handleFNClick} fn={"AC"}/>
                    <FnButton id={4} handleFNClick={this.handleFNClick} fn={"+/="}/>
                </div>
            </>
        )
    }

}


class NumButton extends React.Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){
        this.props.handleClick(this.props.num);
    }

    render() {
        return <div className="col col-lg-1">
            <button type="button" className="btn btn-light btn-lg" onClick={this.handleClick} value={this.props.num}>{this.props.num}</button>
        </div>
    }
}

class FnButton extends React.Component{

    constructor(props) {
        super(props);
        this.handleFNClick = this.handleFNClick.bind(this);
    }

    handleFNClick(){
        this.props.handleFNClick(this.props.id);
    }



    render() {
        return <div className="col col-lg-1"><button className="btn btn-warning btn-lg" onClick={this.handleFNClick} key={this.props.id}>{this.props.fn}</button></div>
    }
}





export default ButtonComponent;
