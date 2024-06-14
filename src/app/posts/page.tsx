import { Suspense } from "react";
import CreatePostForm from "@/components/CreatePostForm";
import { PostsContextProvider, usePosts } from "@/contexts/postsContext";
import PostList from "@/components/PostList";

const Page = () => {
  return (
    <PostsContextProvider>
      <div className="m-4">
        <Suspense fallback={<div>Loading</div>}>
          <PostList />
        </Suspense>
      </div>
      <div className="m-4">
        <CreatePostForm />
      </div>
    </PostsContextProvider>
  );
};

export default Page;
