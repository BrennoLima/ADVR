import React from 'react';
import {useForm} from "react-hook-form";
import ErrorMessage from './ErrorMessage'
import styled from 'styled-components'
import { Button} from 'reactstrap';
import './signin.css'
import { useHistory } from 'react-router-dom'

const CreateBTN = styled(Button)`
    font-size: 2rem;
    margin-top: 2rem;
    width: 10rem;
    background-color: transparent;
    &:hover{
        background-color: transparent;
    }
`

const Signin = () => {
    const history = useHistory();

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
        history.push('/profile')
    }
    
    return (
        <div className="container-fluid signin-container">
            <h1 className="signin-title">Create your account and travel to our database!</h1>

            <form className="container form-container" onSubmit={handleSubmit(onSubmit)}>
                <div className="row justify-content-left m-1">
                    <label className="form-label col-12 col-md-2">First Name:</label>
                    <input type="text" name="firstname" id="firstname" placeholder="First Name" className="col-12 col-md-5 signinput"
                    ref={register({ required: true, minLength: 2, maxLength: 15, pattern: /^[a-zA-Z]+$/ })}/>
                    <div id="firstnameerror"><ErrorMessage error={errors.firstname} className="col-12 col-md-5 errorMessage"/></div>
                </div>
                <div className="row justify-content-left m-1">
                    <label className="form-label col-12 col-md-2">Last Name:</label>
                    <input type="text" name="lastname" id="lastname" placeholder="Last Name" className="col-12 col-md-5 signinput"
                    ref={register({ required: true, minLength: 2, maxLength: 15, pattern: /^[a-zA-Z]+$/})}/>
                    <div id="lastnameerror"><ErrorMessage error={errors.lastname} className="col-12 col-md-5 errorMessage"/></div>
                    
                </div>
                <div className="row justify-content-left m-1">
                    <label className="form-label col-12 col-md-2">Email:</label>
                    <input type="name" name="email" id="email" placeholder="adventurer@crazyadventure.com" className="col-12 col-md-5 signinput"
                    ref={register({ required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/ })}/>
                    <div id="emailerror"><ErrorMessage error={errors.email} className="col-12 col-md-5 errorMessage"/></div>
                </div>
                <div className="row justify-content-left m-1">
                    <label className="form-label col-12 col-md-2">Password:</label>
                    <input type="password" name="password" id="password" className="col-12 col-md-5 signinput"
                    ref={register({ required: true, minLength: 2, maxLength: 15})}/>
                    <div id="passworderror"><ErrorMessage error={errors.password} className="col-12 col-md-5 errorMessage"/></div>
                </div>
                <div className="row justify-content-center">
                    <CreateBTN type="submit" className="createbtn">Create!</CreateBTN>
                </div>
                
            </form>
            
        </div>
    );
}

export default Signin;