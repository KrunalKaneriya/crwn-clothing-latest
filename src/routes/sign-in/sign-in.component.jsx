import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const doc = createUserDocumentFromAuth(response);

    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in With Google Popup</button>
        </div>
    )
}

export default SignIn;