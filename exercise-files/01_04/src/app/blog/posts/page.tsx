import Component from "../../ui/components/posts/Post";
import { posts } from "../../lib/placeholder-data";

export default function Page() {
  return (
    <>
      <h1>Posts</h1>

      {posts.map((post) => (
        <Component
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          date={post.date}
        />
      ))}
    </>
  );
}
