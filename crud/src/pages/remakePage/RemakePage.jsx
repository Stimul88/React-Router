import {useLocation, useNavigate, useParams} from "react-router-dom";
import "./remakePage.css"
import {useEffect, useState} from "react";

const server = process.env.REACT_APP_API_URL;

export function RemakePage() {
  const { id } = useParams();
  const [value, setValue] = useState({content: '',})
  const navigate = useNavigate();

  useEffect( () => {
    setValue({
      id: id,
      content: from,
    })
    return () => {}
  }, []);

  const location = useLocation()
  const { from } = location.state

  const postApiData = async () => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id: id, content: value.content})
    };
    await fetch(`${server}/${id}`, requestOptions);
  }


    const returnPage = () => {
      navigate(-1)
    }

  const savePost = (e) => {
    e.preventDefault()
    postApiData()
    navigate('/');
  }

  const inputChange = (e) => {
    const { name, value } = e.target;

    setValue((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };


  return (
    <div className="remake">
      <header>
        <div>Редактировать публикацию</div>
        <div
          className="close"
          onClick={returnPage}
        >✘</div>
      </header>
      <form action="" onSubmit={savePost}>
        <input type="text"
               name="content"
               value={value.content}
               onChange={inputChange}
               className="input"/>
        <button type="submit">Сохранить</button>
      </form>
    </div>
  )
}