'use client'
import Feed from "@/components/Feed";
import Header from "@/components/Header";
import { div } from "framer-motion/client";
import Image from "next/image";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation"; // or 'next/router' for pages directory
import { auth } from "../../firebase/firebase";

import Login from "@/components/Login";

export default function Home() {


  return(
    <div>
      <Login/>
    </div>
  );

}
