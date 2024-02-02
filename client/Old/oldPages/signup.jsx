import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {addDoc, collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../config/firebase.js";

const Signup = () => {
    const userId = null;
    // const userId = window.localStorage.getItem('upsats-user-data-id');
    const navigate = useNavigate();
    console.log(userId);
    useEffect(() => {
        if (userId) {
            navigate('/');
        }
    }, [userId, navigate]);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const devsCollectionRef = collection(db, "devs");
        const serachQuery = query(
            devsCollectionRef,
            where("email", "==", email),
        );
        getDocs(serachQuery).then((querySnapshot) => {
            if (querySnapshot.empty) {
                const data = {
                    userName: username,
                    email: email,
                };
                addDoc(devsCollectionRef, data).then((docRef) => {
                    window.localStorage.setItem('upsats-user-data-id', docRef.id);
                    navigate('/');
                });
            } else {
                // User found
                alert("User found with this email! Please login.")
                navigate('/login');
            }
        });
    }

    return (
        <>
            <div className="antialiased bg-gray-200 text-gray-900 font-sans">
                <div className="flex items-center h-screen w-full">
                    <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                        <span className="block w-full text-xl uppercase font-bold mb-8">Signup to upsats</span>
                        <form className="mb-4" action="/" method="post">
                            <div className="mb-4 md:w-full">
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full border rounded p-2 outline-none focus:shadow-outline" type="text" name="username"
                                    id="username" placeholder="Username">
                                </input>
                            </div>
                            <div className="mb-8 md:w-full">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email"
                                    id="email" placeholder="Email">
                                </input>
                            </div>
                            <div className="mb-8 md:w-full">
                                <a href="/login">Already have an account? Login</a>
                            </div>
                            <button
                                onClick={handleLogin}
                                className="bg-purple-500 text-white uppercase text-sm font-semibold px-16 py-4 rounded">Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
