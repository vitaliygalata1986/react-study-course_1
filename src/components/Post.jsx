function Post({ name, cb, id, removePost }) {
  return (
    <h2 onClick={cb}>
      {name} <button onClick={() => removePost(id)}>delete</button>{' '}
    </h2>
  );
}

export default Post;
