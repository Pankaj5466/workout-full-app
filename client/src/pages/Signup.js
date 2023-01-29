import React, { useEffect, useState } from 'react';
import backendServer from '../api/axios-setup';
import { useDispatch, useSelector } from '../hooks-store/store';

function SignUp() {

  const loadingStatus = useSelector();

  useEffect(()=>{
      // dispatch('SET_LOADING',true);

      const URL = 'https://dummyjson.com/carts/';
      
      backendServer.get(URL)
        .then(response =>{
          console.log('YES');
          console.log(response.data);
        }).catch(e=>{
          console.log('NO');
        })


  },[])

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    age: '',
    weight: '',
    height: '',
    gender: '',
    goal: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submit Handler called\n');
    console.log(formData);


    
    // Add code to handle form submission here
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />

      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />

      <label htmlFor="weight">Weight:</label>
      <input
        type="number"
        id="weight"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
      />

      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="gender">Gender:</label>
      <select
        id="gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <label htmlFor="goal">Goal:</label>
      <textarea
        id="goal"
        name="goal"
        value={formData.goal}
        onChange={handleChange}
      />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default SignUp;
