import { useEffect, useState } from 'react';
import Card from './Card';
import { Post } from '../types';

const URL = "https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json";

const CardList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(URL);
      const res = await req.json();
      setPosts(res);
    }
    fetchData();
  }, [])

  return (
    <div className='row'>
      { posts.map (post => (
          <Card
            key={post.id}
            image={post.featured_media}
            title={post.title.rendered}
            author={post._embedded.author}
            date={post.date}
            source={post.link}
          />
      ))}
    </div>
  )
}

export default CardList