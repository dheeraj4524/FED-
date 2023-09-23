import React,{Component} from 'react'
 class ChangeTextColor extends Component{
    constructor(props){
        super(props);
        this.state={
            color:'pink',

        }
    }
    redHandler=()=>{this.setState({color:'red'});
    }
    greenHandler=()=>{this.setState({color:'green'});

    }
    blueHandler=()=>{this.setState({color:'blue'});
    }
    render(){
        return(
            <div>
                <h1 style={{color:this.state.color}}>Welcome to Reactjs</h1>
                <button type="button" onClick={this.redHandler}>red</button>   
                &nbsp;&nbsp; 
                <button type="button" onClick={this.greenHandler}>green</button>   
                &nbsp;&nbsp; 
                <button type="button" onClick={this.blueHandler}>blue</button>   
                &nbsp;&nbsp; 
                </div>

                
    
                     
);
    }
    
}
export  default ChangeTextColor;