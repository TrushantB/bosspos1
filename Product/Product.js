import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn,multiple } from 'mdbreact';
import Axios from 'axios';

 class  Product extends React.Component {
   constructor(props) {
     super(props);
     this.state={
      dropdownitem:[],
     
      salePrice:50,
      actualPrice:50,
   
    
     }

     Axios.get('http://salty-badlands-70835.herokuapp.com/api/ProductType')
     .then((response) => {
       const result = response.data.filter(deleteddata => deleteddata.IsDeleted ==0 )
       
       this.setState({dropdownitem:result})
     
     }
    
     )
     
    //  let a=new Set(['sss','sss','c','d'])
    //  console.log(a)
    
   }
   submitProduct(event) {
     event.preventDefault();  
     const item={
       "id":'',
      "name":event.target.elements.productname.value,
      "description":event.target.elements.productdescription.value,
      "productType":event.target.elements.producttype.value,
      "isggst":event.target.elements.ggst.checked,
      "iscgst":event.target.elements.cgst.checked,
      "isngst":event.target.elements.ngst.checked,
      "actualValue":event.target.elements.actualValue.value,
      "saleValue":event.target.elements.saleValue.value,
      "discountValue":event.target.elements.discountValue.value,
     
    }
    Axios.post('http://localhost:3000/posts',item)
    .then(console.log(this.state.Name))
  .catch(err =>{
      console.log('faild:',err)

  })
 //console.log(event.target.elements.ggst.checked)
 
      }
  
   checkBox(e) {
     if(e.target.checked) {
            if(e.target.value==10) {
              this.setState({salePrice:this.state.salePrice+10})
            }
            else if(e.target.value==15) {
              this.setState({salePrice:this.state.salePrice+15})
            }  else if(e.target.value==20) {
              this.setState({salePrice:this.state.salePrice+20})
            }
     } else {
            if(e.target.value==10) {
              this.setState({salePrice:this.state.salePrice-10})
            } else if(e.target.value==15) {
              this.setState({salePrice:this.state.salePrice-15})
            }  else if(e.target.value==20) {
              this.setState({salePrice:this.state.salePrice-20})
            }
     }
    // console.log(e.target.checked)
    // console.log(e.target.value)
  
   }
   discountChange(e) {
     this.setState({salePrice:this.state.salePrice-e.target.value})
   }
  
   render() {
   
    const dropdownmenu = this.state.dropdownitem.map((item) => {
      return (
         <option  key={item.Id}>{item.Name}</option> 
      )
    });
  return (
    <MDBContainer>
      < MDBRow>
        <MDBCol md="6">
          <form onSubmit={this.submitProduct.bind(this)}>
            <p className="h4 text-center mb-4">Add  Product</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Product Name
            </label>
        
            <input
              type="text"
              id="productname"
              className="form-control"
            />
                <br/>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Product Description
            </label>
            <input
              type="text"
              id="productdescription"
              className="form-control"
            />
            
             <br/>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Product Type
            </label>
            <select class="form-control" id="producttype">
               {dropdownmenu}
             </select>
              
            <br />
         
               <label htmlFor="taxtype" className="grey-text" id="heading">
                   Tax Type
              </label>
             
              <div>
                <div className="form-check" id="check-box">
                      <input type="checkbox" className="form-check-input" id="ggst" value="10" 
                         onChange={this.checkBox.bind(this)}/>
                      <label className="form-check-label" >G GST</label>
                      <br/>
                       <input type="checkbox" className="form-check-input" id="cgst" value="15"
                       onChange={this.checkBox.bind(this)}/>
                      <label className="form-check-label"> C GST</label>
                      <br/>
                      <input type="checkbox" className="form-check-input" id="ngst" value="20" 
                       onChange={this.checkBox.bind(this)}/>
                      <label className="form-check-label" >N GST</label>
                </div>
              </div>
          
            <br />
            <label
              htmlFor="defaultFormRegisterActualEx"
              className="grey-text"
            >
              Actual Price
            </label>
            <input
              type="number"
              id="actualValue"
              className="form-control"
              value={this.state.actualPrice}
            />
            <br/>
            <label
              htmlFor="defaultFormRegisterSaleEx"
              className="grey-text"
            >
             Sale price
            </label>
            <input
              type="number"
              id="saleValue"
              className="form-control"
              value={this.state.salePrice}
            />
            <br />
            <label
              htmlFor="defaultFormRegisterActualEx"
              className="grey-text"
            >
              Discount Value
            </label>
            <input
              type="number"
              id="discountValue"
              className="form-control"
              onChange={this.discountChange.bind(this)}
            />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Register
              </MDBBtn>{" "}
              <MDBBtn color="unique" type="reset">
                cancel
              </MDBBtn>
              
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
   }
}

export default Product;