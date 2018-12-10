import React, { Component } from 'react';
import Axios from 'axios';
import {FormGroup,ControlLabel,FormControl} from 'react-bootstrap';
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
          Axios.post('http://salty-badlands-70835.herokuapp.com/api/TaxType',({
            
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
        Axios.put('http://salty-badlands-70835.herokuapp.com/api/TaxType/'+this.state.Id ,({
            
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
                        <select
          defaultValue=''
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
        >
          <option value='' disabled>Select one option</option>

         
        </select>
                        <div className="modal-body">
                        
                            <p><span className="modal-lable" style={{marginRight:70 }} >
                            Name:</span><input value={this.state.Name} onChange={(e) => this.nameHandler(e)} /></p>
                            <p><span className="modal-lable" style={{marginRight:70 }} >Description:</span><input value={this.state.Description} onChange={(e) => this.descriptionHandler(e)} /></p>
                        </div>
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Description
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
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