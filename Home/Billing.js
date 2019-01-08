import React from 'react';
import '../App.css'
class Billing extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            productName:props.productName || '',
            all:[]
        }
       
    }
    render() {
       
        if(this.props.productName) {
       var realBill= this.props.productName.map((item,index) => {     
         return (
               <div key={index} >
                    <h4 >{item.name} </h4><h5>{item.price}</h5>  <hr />
               </div>
         )  
       })
   
    }
      return(
        <div >
          
        { realBill}
    
  </div>
            )
        }
    }
export default Billing;