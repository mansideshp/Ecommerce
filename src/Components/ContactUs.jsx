import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Config } from './Config';

function ContactUs(){
    const[data, setData] = useState({
            text : "",
            email : " ",
            telephone : "",
            Gender : ""
            
    })
    function inputdata(event){
        var name = event.target.name;
        var value = event.target.value;
        setData({...data,[name]:value});
    }
    async function submit(event){
        event.preventDefault();
        await axios.post(Config.URL +'/Assets', data )
        }

    


    return(<><h1 className='text-center p-4 bg-dark text-white'>Contact Us</h1>
    <center>
    <form className= "m-5 border border-dark rounded p-5" style={{width: "800px"}}>
    <input type = "text" placeholder='Enter Name' onChange = {inputdata} name='text'/><br/><br/>
    <input type = "email" placeholder='Enter email address' onChange = {inputdata} name='email'/><br/><br/>
    <input type = "tel" placeholder='Enter phone number' onChange = {inputdata} name='telephone'/><br/><br/>
    <span>Choose your Gender : </span>
  <label>Female</label> <input type = "radio" name="Gender"  value = "Female" onChange = {inputdata}/>
  <label>Male</label> <input type = "radio" name="Gender" value="Male" onChange = {inputdata}/><br/><br/>
  
  <button onClick={submit}>Submit</button>
  </form>
  </center>
    </>)
}

export default ContactUs;