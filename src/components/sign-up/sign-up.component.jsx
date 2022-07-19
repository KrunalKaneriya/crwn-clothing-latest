import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    displayName:"",
    email:"",
    password:"",
    confirmPassword:""
};

const SignUp = () => {
    const [formFields,setFormFields] = useState(defaultFormFields);

    const {displayName,email,password,confirmPassword} = formFields;

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
           alert("Password Do not match.");
           return;
        } 

        try {
            await createAuthUserWithEmailAndPassword(email,password,displayName).then(() => {
                resetFormFields();
            })
        } catch(error) {
            if(error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use");
            }
            console.log("Error adding user in firestore",error);
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password </span>

            <form onSubmit={(event) => {handleSubmit(event)}}>
                <FormInput label="Display Name" type="text" name="displayName" required onChange={handleChange} value={displayName}/>

                <FormInput label="Email" type="email" name="email" required onChange={handleChange} value={email}/>

                <FormInput label="Password" type="password" name="password" required onChange={handleChange} value={password}/>

                <FormInput label="Confirm Password" type="password" name="confirmPassword" required onChange={handleChange} value={confirmPassword}/>

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}


export {SignUp};