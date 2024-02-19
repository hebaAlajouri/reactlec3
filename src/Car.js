import React from "react";
import './Car.css';


 
class Car extends React.Component{
    constructor(props){
        super(props);
        
    }
 
    render(){
        return(
            <div class="cont">
            <img src={this.props.image} style={{borderColor:this.props.color} }></img>
            <h1>model is:{this.props.model}</h1>
             <h2>brand is:{this.props.brand}</h2>
            <h3>color is :{this.props.color}</h3>
            
            <h5>color is :{this.props.description}</h5>
            </div>
        )
    }
}
export default Car;