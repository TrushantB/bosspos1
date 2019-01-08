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
        var all=[]
        if(this.props.productName) {
            this.props.productName.map((item) => {
                all.push(item)
                
            })
           // this.setState({productName:all})
            console.log(all)
        
         }
        // console.log(this.state.productName)
        if(all.length > 0) {
       var realBill= all.map((item,index) => {
         return (
               <div key={index} >
                    <h4 >{item[index].name} </h4>  <hr />
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