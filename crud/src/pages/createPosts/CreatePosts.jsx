import "./createPosts.css"
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const server = process.env.REACT_APP_API_URL;

export function CreatePosts() {
  const [value, setValue] = useState({create: ''})

  const navigate = useNavigate();

  const createPost = (e) => {
    e.preventDefault()
    postApiData()
    navigate('/');
  }

  const postApiData = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({id: 0, content: value.create})
    };
    await fetch(`${server}`, requestOptions);
  }

  const close = () => {
    navigate('/');
  }


  const inputChange = (e) => {
    const { name, value } = e.target;

    console.log(value)

    setValue((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };


  return (
    <form action="" className="form-create"

        onSubmit={createPost}
  >
      <header className="header">
        <ul>
          <li className="input-name">✎Публикация</li>
        </ul>
        <div
          className="close"
          onClick={close}
        >✘</div>
      </header>
      <label htmlFor="create"></label>
      <div className="input-box">
        <div className="avatar"></div>
        <input type="text"
               name="create"
               value={value.create}
               onChange={inputChange}
               className="form-create-input"/>
      </div>

      <div className="button-box">
        <button
          type="submit"
          className="form-create-button"
          disabled={value.create === ''}
        >Опубликовать</button>
      </div>
  </form>
  )
}