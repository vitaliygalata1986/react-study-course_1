import Post from './Post';
function Posts({ posts, removePost, cb }) {
  return (
    <div>
      {posts.map(({ id, name }, index) => (
        <Post
          key={id}
          id={id}
          name={name}
          cb={cb}
          removePost={removePost}
        ></Post>
      ))}
    </div>
  );
}

export default Posts;
