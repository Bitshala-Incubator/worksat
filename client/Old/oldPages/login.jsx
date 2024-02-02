import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../config/firebase.js";

const Login = () => {
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

  const handleLogin = (e) => {
    e.preventDefault();
    const devsCollectionRef = collection(db, "devs");
    const serachQuery = query(
        devsCollectionRef,
        where("email", "==", email),
    );
    getDocs(serachQuery).then((querySnapshot) => {
      if (querySnapshot.empty) {
        // No user found
        alert("No user found with this email! Please sign up first.");
      } else {
        // User found
        const doc = querySnapshot.docs[0];
        window.localStorage.setItem('upsats-user-data-id', doc.id);
        navigate('/');
      }
    });
  }

  return (
    <>
      <div className="antialiased bg-gray-200 text-gray-900 font-sans">
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-8">Login to upsats</span>
          <form className="mb-4" action="/" method="post">
            <div className="mb-8 md:w-full">
              <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email"
                     id="email" placeholder="Email">
              </input>
            </div>
            <div className="mb-8 md:w-full">
              <a href="/signup">Don&apos;t have an account? Signup</a>
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

export default Login;
