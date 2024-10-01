import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    
    const auth = getAuth();
    const navigate = useNavigate();
    
    
    const [authing, setAuthing] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    
    const signUpWithGoogle = async () => {
        setAuthing(true);
        
        // Use Firebase to sign up with Google
        signInWithPopup(auth, new GoogleAuthProvider())
            .then(response => {
                console.log(response.user.uid);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setAuthing(false);
            });
    };

    // Function to handle sign-up with email and password
    const signUpWithEmail = async () => {
        // Check if passwords match
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setAuthing(true);
        setError('');

        const userData = {
            username: username,   // Including username in the payload
            email: email,
            password: password,
            role: 'User',
        };

        try {
            // Sending POST request to the ASP.NET API
            const response = await axios.post('/proxy/User/RegisterUser', userData);

            console.log(response.data); 
            alert(response.data); 

           
            navigate('/');
            console.error(error); // Log the full error for debugging

            // Check if the error has a response object (Axios error)
        }
     catch (error) {
        console.error(error); // Log any errors
        setError('Registration failed');
    } finally {
        setAuthing(false);
    }
    };

    return (
        <div className='w-full h-screen flex'>
            {/* Left half of the screen - background styling */}
            <div className='w-1/2 h-full flex flex-col bg-[#282c34] items-center justify-center'>
            </div>

            {/* Right half of the screen - signup form */}
            <div className='w-1/2 h-full bg-[#1a1a1a] flex flex-col p-20 justify-center'>
                <div className='w-full flex flex-col max-w-[450px] mx-auto'>
                    {/* Header section with title and welcome message */}
                    <div className='w-full flex flex-col mb-10 text-white'>
                        <h3 className='text-4xl font-bold mb-2'>Sign Up</h3>
                        <p className='text-lg mb-4'>Welcome! Please enter your information below to begin.</p>
                    </div>

                    {/* Input fields for email, password, and confirm password */}
                    <div className='w-full flex flex-col mb-6'>
                    <input
                            type='text'
                            placeholder='Username'
                            className='w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            className='w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            className='w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type='password'
                            placeholder='Re-Enter Password'
                            className='w-full text-white py-2 mb-4 bg-transparent border-b border-gray-500 focus:outline-none focus:border-white'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    {/* Display error message if there is one */}
                    {error && <div className='text-red-500 mb-4'>{error}</div>}

                    {/* Button to sign up with email and password */}
                    <div className='w-full flex flex-col mb-4'>
                        <button
                            onClick={signUpWithEmail}
                            disabled={authing}
                            className='w-full bg-transparent border border-white text-white my-2 font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                            Sign Up With Email and Password
                        </button>
                    </div>

                    {/* Divider with 'OR' text */}
                    <div className='w-full flex items-center justify-center relative py-4'>
                        <div className='w-full h-[1px] bg-gray-500'></div>
                        <p className='text-lg absolute text-gray-500 bg-[#1a1a1a] px-2'>OR</p>
                    </div>

                    {/* Button to sign up with Google */}
                    <button
                        onClick={signUpWithGoogle}
                        disabled={authing}
                        className='w-full bg-white text-black font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer mt-7'>
                        Sign Up With Google
                    </button>
                </div>

                {/* Link to login page */}
                <div className='w-full flex items-center justify-center mt-10'>
                    <p className='text-sm font-normal text-gray-400'>Already have an account? <span className='font-semibold text-white cursor-pointer underline'><a href='/login'>Log In</a></span></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;