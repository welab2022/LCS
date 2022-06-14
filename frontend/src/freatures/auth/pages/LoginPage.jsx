import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import loginApi from '../../../api/loginApi';

const schema = yup.object({
  email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
  password: yup.string().max(255).required('Password is required'),
}).required();

const LoginPage = () => {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = async(data) => {
    console.log(data)
    
    try{
      const user = await loginApi(JSON.stringify(data));
      let access_token = user.access_token;
      if(access_token){
        localStorage.setItem("access_token",access_token);
        window.location.replace("/");
      }
    }catch(errors){
      console.log(errors)
    }
    
  };
  return (
    <div className="container-sm  shadow p-5 " >
        <h2>LCS</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input {...register("email")} type="email" className="form-control"  aria-describedby="emailHelp"  required/>
              <p>{errors.email?.message}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
              <input {...register("password")} type="password" className="form-control"   required/>
              <p>{errors.password?.message}</p>
            </div>
            <div className="mb-3 d-flex" >
              <button id="submit" type="submit" className="btn btn-outline-success w-100">Login</button>

            </div>
            <div className="mb-3 d-flex justify-content-between" >
              <a href="/forgotpassword" className="info">Forgot password</a>
              <a href="/register" className="info">Create an account</a>
            </div>
            
            
          </form>
    </div>
  )
}

export default LoginPage