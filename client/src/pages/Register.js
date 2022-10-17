import { useState, useEffect } from 'react';

import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, FormRow, Alert } from '../components/index';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false
}

const Register = () => {
    const [values, setValues] = useState(initialState)

    const handleChange = (event) => {
        console.log(event)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(event.target)
    }

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
    }

    return (
        <Wrapper className='full-page'>
            <form className='form' onSubmit={onSubmit}>
                <Logo />
                <h3>
                    {values.isMember ? 'Login' : 'Register'}
                </h3>
                {values.showAlert && <Alert />}
                {!values.isMember && <FormRow type='text' name='Name' value={values.name} handleChange={handleChange}/>}
                <FormRow type='email' name='Email' value={values.email} handleChange={handleChange}/>
                <FormRow type='password' name='Password' value={values.password} handleChange={handleChange}/>
                <button className='btn btn-block' type='submit'>
                    submit
                </button>
                <p>
                    {values.isMember ? 'Not a member yet? ' : 'Already a member? '}
                    <button className='member-btn' type='button' onClick={toggleMember}>
                        {values.isMember ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register