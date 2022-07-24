import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import {SignUp} from "../../components/sign-up/sign-up.component"

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const doc = createUserDocumentFromAuth(response);

    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in With Google Popup</button>
            <SignUp/>
        </div>
    )
}

export default SignIn;