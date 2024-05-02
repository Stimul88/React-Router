import {Route, BrowserRouter as Router, Routes,} from 'react-router-dom';
import './App.css';
import {Posts, CreatePosts, NotFound, PostPage, RemakePage} from "./pages";


function App() {

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Posts />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/posts/new" element={<CreatePosts />} />
          <Route path="/posts/:id/remake" element={<RemakePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;