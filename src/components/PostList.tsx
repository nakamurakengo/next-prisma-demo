"use client";

import fetchPosts from "@/actions/fetchPosts";
import { usePosts } from "@/contexts/postsContext";
import { useEffect } from "react";

const PostList = () => {
  const { posts, setPosts } = usePosts();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const loadedPosts = await fetchPosts();
        setPosts?.(loadedPosts);
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    };

    loadPosts();
  }, [setPosts]);

  const handleClick = async () => {
    const reloadedPosts = await fetchPosts();
    try {
      setPosts?.(reloadedPosts);
    } catch (error) {
      throw new Error("setPosts is not defined");
    }
  };

  return (
    <>
      <div>
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
      <button onClick={handleClick}>Reload</button>
    </>
  );
};

export default PostList;
