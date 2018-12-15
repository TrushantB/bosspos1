import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Axios from 'axios';
 class  Product extends React.Component {
   constructor(props) {
     super(props);
     this.state={
      dropdownitem:[],
      arr:[],
      aaa:[]
     }

     Axios.get('http://salty-badlands-70835.herokuapp.com/api/ProductType')
     .then((response) => {
       const result = response.data.filter(deleteddata => deleteddata.IsDeleted ==0 );
       result.map((item , index) =>{
        // this.state.arr.push([item.Name])

         this.state.aaa.push(this.state.aaa[index]=[item.Name])


       })
       
       this.setState({dropdownitem:result})
     
     }
    
     )
     
     let a=new Set(['sss','sss','c','d'])
     console.log(a)
    
   }
   render() {
    const dropdownmenu = this.state.dropdownitem.map((item) => {
      return (
        <option  key={item.Id}><div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
        <label class="form-check-label" for="defaultCheck1">
        {item.Name}
        </label>
        </div></option> 
        
      
      )
    });
  return (
    <MDBContainer>
      < MDBRow>
        <MDBCol md="6">

          <form>
            <p className="h4 text-center mb-4">Add  Product</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Product Name
            </label>
            <input
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br />
            <div >
            <label htmlFor="defaultFormRegisterProductEx" className="grey-text">
              Product Type
           </label>
             
              <select className="browser-default custom-select">
             <option  >
             <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                <label className="form-check-label" for="inlineCheckbox1">1</label>
            </div>
            </option>
                                
                {dropdownmenu}
              </select>
              



              
      
              </div>
            <br />
            <label
              htmlFor="defaultFormRegisterSaleEx"
              className="grey-text"
            >
             Sale price
            </label>
            <input
              type="number"
              id="defaultFormRegisterSaleEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormRegisterActualEx"
              className="grey-text"
            >
              Actual Price
            </label>
            <input
              type="number"
              id="defaultFormRegisterActualEx"
              className="form-control"
            />
            
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Register
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