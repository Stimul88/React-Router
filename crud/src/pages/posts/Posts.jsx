import "./posts.css"
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {Post} from "../../components";

const server = process.env.REACT_APP_API_URL;

export function Posts() {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate();

  useEffect( () => {
    getApiData();
    return () => {
    }
  }, );

  const getApiData = async () => {
    const response = await fetch(`${server}/`)

    const result = await response.json();
    setPosts(result);
  };

  function handleClick(event) {
    event.preventDefault()
    navigate('/posts/new');
  }

  return (
    <div className="posts">
      <div className="create-post">
        <div className="create"><div
                 className="create-box"/>
          <button
            type="button"
            className="link-create-button"
            onClick={handleClick}
          > Создать пост</button>
        </div>
      </div>
      <div className="all-posts">
        {posts.map(item => (
            <Link to={`/posts/${item.id}`} key={item.id}  className="link">
              <Post props={item}/>
            </Link>
        ))}
      </div>
    </div>
  )
}