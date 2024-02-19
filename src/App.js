import logo from './logo.svg';
import './App.css';
import Home from './Home';
import './Home.css';
import './NavigationBar.css';
import NavigationBar from './NavigationBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Payment from './payment';

import Products from './products';


function App(){
return (
  <div className="App">
  <NavigationBar></NavigationBar>
 

  <BrowserRouter>

  <Routes>
                      <Route
                          exact
                          path="/"
                          element={<Home />}
                      ></Route>
                      <Route
                          exact
                          path="/products"
                          element={<Products />}
                      ></Route>
                      <Route
                          exact
                          path="/payment"
                          element={<Payment />}
                      ></Route>
                  </Routes>
              
          
</BrowserRouter></div>
  
  

);}


export default App;