import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function App() {
  const [formData,setFormData]=useState({
    username:"",
    password:"",
    confirmPassword:""
  })

//  console.log(formData)
  function handleChange(e){
    const {name,value}=e.target
    setFormData(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    const {name,value}=e.target
    if(e.target.password.value!==e.target.confirmPassword.value){
      toast.error("password does not match")
      return
    }
    else{

    setFormData(prev=>{
      return{
        ...prev,
        [name]:value
      }
    })
    console.log(formData)
    axios.post("http://localhost:5000/register",formData)
    setFormData({
      username:"",
      password:"",
      confirmPassword:""
    })
  }

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} method='POST'>
        <input type="text" name='username' value={formData.username} onChange={handleChange} placeholder='Enter your username'/>
        <input type="password" name='password' value={formData.password} onChange={handleChange} placeholder='Enter your password'/>
        <input type="password" name='confirmPassword' value={formData.confirmPassword} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
