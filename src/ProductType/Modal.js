import React, { Component } from 'react';
import Axios from 'axios';
//import {ButtonToolbar,DropdownButton,MenuItem} from 'react-bootstrap';
const Description=['National','international','local','globle']
class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            Id:props.modalData.Id || '',
            Name: props.modalData.Name || '',
            Description: props.modalData.Description || '',
        }
    }

    componentWillReceiveProps(props) {
    
 
        this.setState({
            Id:props.modalData.Id || '',
            Name: props.modalData.Name || '',
            Description: props.modalData.Description || '',
        });
    } 

    nameHandler(e) {
        this.setState({ Name: e.target.value });        
    }

    descriptionHandler(e) {
        this.setState({ Description: e.target.value });
    }
    newhandleSave()  {
      
          const item = this.state;
          this.props.saveModalDetails(item)
          Axios.post('http://salty-badlands-70835.herokuapp.com/api/ProductType',({
            
              "name":this.state.Name,
              "description":this.state.Description
          })).then(console.log(this.state.Name))
          .catch(err =>{
              console.log('faild:',err)

          })
          
          
          
      }

    handleSave() {
     
        const item = this.state;
        this.props.saveModalDetails(item)
        Axios.put('http://salty-badlands-70835.herokuapp.com/api/ProductTypes/'+this.state.Id ,({
            
            "name":this.state.Name,
            "description":this.state.Description
        }))
        .then()
        
        
    }

    render() {
        console.log(this.state.Id)
        return (
            <div>
               
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Tax</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">



                            <form>
                            <div class="form-group row">
                                <label for="staticEmail" class="col-sm-4 col-form-label">Name:</label>
                                <div class="col-sm-8">
                                    <input value={this.state.Name} onChange={(e) => this.nameHandler(e)} />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputPassword" class="col-sm-4 col-form-label">Description:</label>
                                <div class="col-sm-8">
                                <input value={this.state.Description} onChange={(e) => this.descriptionHandler(e)} />
                                </div>
                            </div>
                            </form>                        
                            
                            
                        </div>
                       
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          {this.state.Id ? <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                          :
                          <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.newhandleSave() }}>Add new</button>
                          }
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Modal;