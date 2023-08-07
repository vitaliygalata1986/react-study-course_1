function Post({ name, cb }) {
  return <h2 onClick={cb}>{name}</h2>;
}

export default Post;
