import React, {useState, useEffect} from 'react';

 function FormAction  ()  {
     const initialValues = {username: "", email: "", password: ""};
     const [formValues, setFormValues] = useState(initialValues);
     const [formErrors, setFormErrors] = useState({});
     const [isSubmit , setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validate();
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues)
        }
       
    }, [formErrors]);

    const validateUsername= () => {
        if (!formValues.username) {
            setFormErrors((prevState) =>({...prevState, username:"Username is required!" })) 
        } else  {
            setFormErrors((prevState)=> ({...prevState,username:" "}))
        }
       
    }
    const validateEmail= () => {
        const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!formValues.email || !emailPattern.test(formValues.email) ) {
            setFormErrors((prevState) =>({...prevState, email:"Email is required!" })) 
        }  else {
            setFormErrors((prevState)=> ({...prevState,email:" "}))
        }
       
       
    }
    const validatePassword= () => {
        if (!formValues.password ) {
            setFormErrors((prevState) =>({...prevState, password:"Password is required!" })) 
        } else if (formValues.password.length < 4){
            setFormErrors((prevState) =>({...prevState, password:"Password must be more than 4!" })) 
        } else {
            setFormErrors((prevState)=> ({...prevState, password:" "}))
        }
       
    }

    const validate = () => {
        
        // const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
        validateUsername()
        validateEmail()
        validatePassword()
        // if (!values.username){
        //     errors.username = "Email is required";
        // }

        // if (!values.email){
        //     errors.email = "Email is required";
        // }
        // if (!values.password){
        //     errors.password = "Password is required";
        // }
        // return errors;
    };


    return (
        <div className='form-container'>
            {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
            <h1 >Login Form</h1>
            <hr className='divider' />
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                    <input placeholder='username'
                     type='text' name="username" onBlur={validateUsername} value={formValues.username} onChange={handleChange}/>
                    <p>{formErrors?.username}</p>

                <label>Email</label>
                    <input placeholder='email' 
                    type='email' name="email" onBlur={validateEmail} value={formValues.email} onChange={handleChange}/>
                    <p>{formErrors?.email}</p>

                <label>Password</label>
                    <input placeholder='password' 
                    type='password'name="password"  onBlur={validatePassword} value={formValues.password} onChange={handleChange}/>
                    <p>{formErrors?.password}</p>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default FormAction;
