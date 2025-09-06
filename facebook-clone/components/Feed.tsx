import React, { useEffect } from 'react';
import axios from 'axios';
import LeftSidebar from './LeftSidebar'
import Stories from './Stories'
import CreatePost from './CreatePost'
import Posts from './Posts'
import RightSidebar from './RightSidebar'
import { useRouter } from 'next/navigation';
import { useState } from 'react';


const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const res = await axios.get("http://localhost:5000/api/posts");
          console.log(res.data);
          setPosts(res.data);
        } catch (err) {
          console.error("Error fetching posts:", err);
        }
      };
  
      fetchPosts();
    }, []);

    return (
        <div className='flex bg-[#f2f3f7] overflow-hidden h-screen'>
            {/* left sidebar */}
            <LeftSidebar />

            <div className="mx-auto overflow-y-auto no-scrollbar">
                {/* createpost */}
                <CreatePost />

                {/* stories */}
                <Stories />

                {/* posts */}
                <Posts posts={posts}/>
            </div>

            {/* right sidebar */}
            <RightSidebar />
        </div>
    )
}

export default Feed
