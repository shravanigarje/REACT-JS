import {Component} from "react";

class State extends Component
{
	constructor(props)
	{
		super(props);
		this.state={count:1};			//initial value
	}
	render()
	{
		return(
			<>
			<h3>Count : {this.state.count}</h3>
			<input type="button" 
			value="Increment" 
			onClick={()=>this.setState({count:this.state.count+1})} />
			</>
			);
	}
}
export default State;