import React from 'react';
import '../App.css';
import axios from 'axios';
class Billing extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            productId:props.productId || '',
            productData:[],
            taxData:[]
        
        }
        axios.get('http://localhost:3005/product')
.then((response) => {
    const result = response.data.filter(deleteddata => deleteddata.IsDeleted === 0 );
    this.setState({productData:result})
})
axios.get('http://localhost:3005/tax')
.then((response) => {
    const result = response.data.filter(deleteddata => deleteddata.IsDeleted === 0 );
    this.setState({taxData:result})
})
       
    }
    cgst() {
        
    }
    render() {
        if(this.props.productId) {
       var realBill= this.state.productData.map((item,index) => { 
           if(item.id==this.props.productId)  {
             return (
               <div key={index} >
               <table border="1">
                    <thead>
                        <tr>
                            <th>GST%</th>
                            <th>price</th>
                            {this.state.taxData.map((gst) => {
                                return(
                                     <th>{gst.taxName}</th>
                                )
                                
                            })}
                           
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>{item.actualPrice}</td>
                            <td>{this.cgst()}</td>
                            <td>s</td>
                        </tr>
                    </tbody>
               </table>
               </div>
         )    
           }  
         
       })   
    }
      return(
        <div >         
         { realBill }  
        </div>
            )
        }
    }
export default Billing;