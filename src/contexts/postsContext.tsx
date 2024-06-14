"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface Post {
  id: number;
  title: string;
}

interface PostsContextType {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>> | undefined;
}

const PostsContext = createContext<PostsContextType>({
  posts: [],
  setPosts: undefined,
});

export const PostsContextProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostsContext);
};
