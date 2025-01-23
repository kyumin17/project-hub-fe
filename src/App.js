import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyPage from './app/my-page/MyPage.tsx';
import NotificationPage from './app/notification-page/NotificationPage.tsx';
import PostCreatePage from './app/post-create-page/PostCreatePage.tsx';
import PostListPage from './app/post-list-page/PostListPage.tsx';
import PostPage from './app/post-page/PostPage.tsx';
import SigninPage from './app/signin-page/SigninPage.tsx';
import SignupPage from './app/signup-page/SignupPage.tsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PostListPage />} />
          <Route path='/:post_id' element={<PostPage />} />
          <Route path='/write' element={<PostCreatePage />} />
          <Route path='/notify' element={<NotificationPage />} />
          <Route path='/my' element={<MyPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
