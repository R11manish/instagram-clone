import Post from './Post';

const posts = [
  {
    id: '123',
    username: 'r11manish',
    userImg: '/images/profile.jpeg',
    img: '/images/profile.jpeg',
    caption: 'hey buddy follow us for more such amazing updates',
  },
  {
    id: '123',
    username: 'r11manish',
    userImg: '/images/profile.jpeg',
    img: '/images/profile.jpeg',
    caption: 'hey buddy follow us for more such amazing updates',
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
