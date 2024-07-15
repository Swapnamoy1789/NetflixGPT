import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/checkValidData';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGIN_BG, USER_AVATAR } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        const nameValue = name.current ? name.current.value : '';
        const emailValue = email.current.value;
        const passwordValue = password.current.value;

        // Validate the form data
        const message = checkValidData(emailValue, passwordValue, nameValue);
        setErrorMessage(message);

        if (message) return;

        // Sign In/Sign Up logic
        if (!isSignInForm) {
            // Sign up logic
            createUserWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR,
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({
                            uid: uid,
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL,
                        }));
                        navigate('/browse');
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                })
                .catch((error) => {
                    setErrorMessage(error.code + "-" + error.message);
                });
        } else {
            // Sign in logic
            signInWithEmailAndPassword(auth, emailValue, passwordValue)
                .then((userCredential) => {
                    const user = userCredential.user;
                    const { uid, email, displayName, photoURL } = user;
                    dispatch(addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    }));
                    navigate('/browse');
                })
                .catch((error) => {
                    setErrorMessage(error.code + "-" + error.message);
                });
        }
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className='fixed inset-0'>
                <img className='w-full h-full object-cover'
                    src={LOGIN_BG}
                    alt="Backgroundimg"
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-full md:w-3/12 absolute p-12 bg-black my-10 md:my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80'>
                <h1 className='font-bold text-xl md:text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder='Full Name'
                        className='p-4 my-4 w-full bg-gray-700'
                    />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder='Email Address'
                    className='p-4 my-4 w-full bg-gray-700'
                />
                <input
                    ref={password}
                    type="password"
                    placeholder='Password'
                    className='p-4 my-4 w-full bg-gray-700'
                />
                <p className='text-red-500 font-bold'>{errorMessage}</p>
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now!" : "Already registered? Sign In Now!!"}
                </p>
            </form>
        </div>
    );
};

export default Login;
