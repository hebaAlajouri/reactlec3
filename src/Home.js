import React from "react";
import  './Home.css';
import NavigationBar from './NavigationBar';
import './NavigationBar.css';
import Car from './Car';


class Home extends React.Component{
    constructor(props){
        super(props);
        
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with:", this.state.email, this.state.password);
      };
 
    render(){
        return(
            <div class="cont">
                
                <form onSubmit={this.handleSubmit}> 
                <h1>Login Page:</h1>
         <label >email</label><br/>
          <input type="email" value={this.props.value} onChange={this.handleChange} /><br/>
          <label>password</label><br/>
          <input type="password" value={this.props.value} onChange={this.handleSubmit}/><br/>
           
           <input type="submit" value="Submit" />
      </form>


          


            </div>
        )
    }
}
export default Home;