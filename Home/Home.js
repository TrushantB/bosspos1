import React from 'react';
import Billing from './Billing'
import axios from 'axios'
import '../App.css'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class Home extends React.Component {
    constructor() {
        super();
        this.state={
            productData:[],
            productValue:[],
            productName:[],
            temp:[]
        }
axios.get('http://localhost:3005/product')
.then((response) => {
    const result = response.data.filter(deleteddata => deleteddata.IsDeleted === 0 );
    this.setState({productData:result})
})
    }
    perticulerSelect=(e) => {
    e.preventDefault();
    this.state.temp.push([{
        name:e.target.elements.product.name,
        price:e.target.elements.product.value
    }])
  this.setState({productName:this.state.temp}) 

    // e.target.elements.product.name)
    // this.setState({productName:this.state.temp})
    // a.push(e.target.elements.product.value)
    //this.setState({productValue:a})
}
render() { 
        const ptoducts=this.state.productData.map((item) => {
            return(
               <lable>
                    <form key={item.id} className="card" style={{width: 200}} 
                        onSubmit={(e) => {this.perticulerSelect(e)}} >
                  <div>
                    <Card body outline color="secondary">
                        <CardTitle >{item.productName}</CardTitle>
                        <CardText  >{item.salePrice}</CardText>
                         <Button color="primary" id="product" value={item.salePrice} 
                               name={item.productName}>Add</Button> 
                    </Card>
                  </div>
                
                </form>
               </lable>
               
               
            )
        })
      return(
        <div className="row">
        <div className="col-sm-8">
        <h1 color="red">Sell Now</h1>
         <div className="form-inline">         
               { ptoducts}           
         </div>
      </div>
       <div className="col-sm-4">
       <p> PURCHASE ITEMS</p>
       <Billing productName={this.state.productName}/> 
      </div>
      </div>
            )
        }
       
    }
export default Home;