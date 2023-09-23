import React,{Component, component} from 'react'
class Counter extends Component{
    constructor(props){
        super(props);
       this.state={
        count:0,
       }
    }
    incrementalHandler=()=>{
        this.setState({count:this.state.count+1});
    };
    decrementalHandler=()=>{
        
        this.setState({count:this.state.count-1});
    };
    render(){
        return(

            <div>
               <button type="button" onClick={this.incrementalHandler}>+</button>
               &nbsp;&nbsp;
               {this.state.count}
               &nbsp; &nbsp;
               <button type="button" onClick={this.decrementalHandler}>-</button>
               </div>
        );
    }
}
    
export default Counter;