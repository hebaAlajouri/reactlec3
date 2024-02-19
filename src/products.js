import React from "react";
import Car from './Car';
import pic1 from './pic1.jpeg';
import pic2 from './pic2.jpeg';
import pic3 from './pic3.jpeg';
import pic4 from './pic4.jpeg';
import './Car.css';
class Products extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
         
          <div class="d1"><Car brand="bmw" model="1998" color="black" image= {pic1} description="bmw" ></Car>
          <Car brand="Ford" model="1998" color="red" image={pic2} description="Ford"></Car></div>
          <div class="d2"><Car brand="Mercedes" model="2017" color="selver" image={pic3} description="Mercedes"></Car>
          <Car brand="G-class" model="2017" color="blue" image={pic4}description="G-class"></Car></div>
    </div>
      );
    }}
     
    export default Products;