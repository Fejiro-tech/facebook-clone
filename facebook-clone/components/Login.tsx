'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
// import { doc, getDoc } from "firebase/firestore";



export default function LoginPage() {
    const router = useRouter(); // ✅ define at the top of your component

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
           const login =  await signInWithEmailAndPassword(auth, email, password);
            router.push('/feed'); // ✅ redirect to feed
        } catch (error: any) {
            alert('Login failed: ' + error.message);
        }

        // const docRef = doc(db, "user", email);
        // const docSnap = await getDoc(docRef);

        // if (docSnap.exists()) {
        //     console.log("Document data:", docSnap.data());
        // } else {
        //     // docSnap.data() will be undefined in this case
        //     console.log("No such document!");
        // }

    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex max-w-5xl w-full p-8 gap-10">
                {/* Left Section */}
                <div className="flex-1 flex flex-col my-16">
                    <h1 className="text-blue-600 text-6xl font-bold  ">facebook</h1>
                    <p className="text-2xl mt-4">
                        Facebook helps you connect and share with the people in your life.
                    </p>
                </div>

                {/* Right Section */}
                <div className='w-full max-w-[25rem]'>
                    <div className="bg-white p-6 rounded-lg shadow-lg ">
                        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
                            <input
                                type="email"
                                placeholder="Email address or phone number"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="p-3 border rounded-md border-gray-300  focus:outline-blue-500"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="p-3 border rounded-md border-gray-300 focus:outline-blue-500"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                            >
                                Log In
                            </button>
                        </form>

                        <div className="text-center mt-4">
                            <a href="#" className="text-blue-600 text-sm hover:underline">
                                Forgotten password?
                            </a>
                        </div>

                        <hr className="my-4 text-gray-300" />

                        <div className="flex justify-center">
                            <button className="bg-green-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-600 transition">
                                Create New Account
                            </button>
                        </div>
                    </div>
                    <p className='text-center my-4'><strong>Create a page</strong> for celebrity, brand or business</p>
                </div>

            </div>
        </div>
    );
}
