import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {DateTimePretty} from "../../components";
import "./postPage.css"
const server = process.env.REACT_APP_API_URL;

export function PostPage() {
  const { id } = useParams();
  const [{post}, setPost] = useState({post:{}})
  const {content, created} = post
  const navigate = useNavigate();


  useEffect( () => {

    getApiDataId();
    return () => {}

  }, []);


  const getApiDataId = async () => {
    const response = await fetch(`${server}/${id}`)

    const result = await response.json();
    setPost(result);
  };

  const deleteApiDataId = async () => {
    await fetch(`${server}/${id}`, { method: 'DELETE' })
  };

  const deletePost = (e) => {
    e.preventDefault()
    deleteApiDataId()
    navigate('/');
  }
  
  return (
    <div className="post-page" >
      <div> Имя: Женя</div>
      <div >
        <span> {content} </span>
        <DateTimePretty date={created} />
      </div>
      <button >
        <Link
          to={`/posts/${id}/remake`}
          state={{ from: content }}
          className="remake"
        >
          Изменить
        </Link>
      </button >
      <button
        onClick={deletePost}
        className="delete"
      >Удалить</button>
    </div>
  )
}