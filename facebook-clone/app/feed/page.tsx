'use client'
import Feed from '@/components/Feed'
import Header from '@/components/Header'
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { auth } from '../../../firebase/firebase';

const feed = () => {

    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push('/');
        }
      });
  
      return () => unsubscribe();
    }, []);
    
  return (
    <div>
        <Header />
        <Feed />
    </div>
  )
}

export default feed