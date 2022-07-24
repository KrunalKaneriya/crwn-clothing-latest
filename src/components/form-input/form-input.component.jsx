import "./form-input.styles.scss";

const FormInput = ({label,...otherProps}) => {
    return (
        <div className="group">
            <input className="form-input" {...otherProps}/>

            { label && (
                <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>{label}</label>
            )}
        </div>
    );
};

export default FormInput;

const firebaseConfig = {
    apiKey: "AIzaSyCRQ5g1sg42aXW_aC8DH5er9Yh4zQ9Ibrc",
    authDomain: "crwn-db-8750e.firebaseapp.com",
    projectId: "crwn-db-8750e",
    storageBucket: "crwn-db-8750e.appspot.com",
    messagingSenderId: "67023989358",
    appId: "1:67023989358:web:8b8e42ac4663b66f01d47f",
};
