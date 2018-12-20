import React from 'react';
import axios from 'axios';
const uri='http://salty-badlands-70835.herokuapp.com'

 export function ShowTaxData(){
   return axios.get(uri + '/api/UserTypes');
 }