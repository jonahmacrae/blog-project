import Post from "../../../ui/components/posts/Post";
import { posts } from "../../../lib/placeholder-data";

export default function Page({ params }: { params: { id: string } }) {
  const post = posts.find((post) => post.id === params.id);
  return (
    <>
      <h1>Posts</h1>
      <Post {...post} />
    </>
  );
}
