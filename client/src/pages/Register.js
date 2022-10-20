import { useState } from 'react';

import Wrapper from '../assets/wrappers/RegisterPage';
import { Logo, FormRow, Alert } from '../components/index';
import { useAppContext } from '../context/appContext'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true
}

const Register = () => {
    const [values, setValues] = useState(initialState)

    // Use global context
    const { showAlert, displayAlert } = useAppContext()

    const handleChange = (event) => {
        setValues({ 
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const { name, email, password, isMember } = values
        if (!email || !password || (!isMember && !name)) {
            displayAlert()
            return
        }
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
                {showAlert && <Alert />}
                {!values.isMember && <FormRow type='text' name='name' defaultValue={values.name} handleChange={handleChange}/>}
                <FormRow type='email' name='email' defaultValue={values.email} handleChange={handleChange}/>
                <FormRow type='password' name='password' defaultValue={values.password} handleChange={handleChange}/>
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