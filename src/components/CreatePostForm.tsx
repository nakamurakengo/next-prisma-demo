"use client";

import createPost from "@/actions/createPost";
import fetchPosts from "@/actions/fetchPosts";
import { usePosts } from "@/contexts/postsContext";
import { SubmitHandler, useForm } from "react-hook-form";

type PostInputs = {
  title: string;
};

const CreatePostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostInputs>();

  const { setPosts } = usePosts();

  const onSubmit: SubmitHandler<PostInputs> = async (data) => {
    try {
      await createPost(data);
      alert("Post created successfully");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post");
    }

    try {
      const fetchedPosts = await fetchPosts();
      setPosts?.(fetchedPosts);
    } catch (error) {
      throw new Error("setPosts is not defined");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input {...register("title", { required: true })} />
        {errors.title && <span>This field is required</span>}
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostForm;
