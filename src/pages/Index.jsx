import { View } from 'react-native';
import { Route, Routes } from 'react-router-native';
import Welcome from '../components/Home/Welcome';
import Login from './login/login';
import { useState } from 'react';
import Home from './Home/Home';
import Search from './Search/Search';
import NewPost from './NewPost/NewPost';
import Sends from './Sends/Sends';
import MyPost from './MyPost/MyPost';

export default function Main() {
  const [auth, setAuth] = useState(null);
  return (
    <View style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Login" element={<Login auth={auth} setAuth={setAuth} />} />
        <Route path="/Home" element={<Home auth={auth} />} />
        <Route path="/Search" element={<Search auth={auth} />} />
        <Route path="/New" element={<NewPost auth={auth} />} />
        <Route path="/Chat" element={<Sends auth={auth} />} />
        <Route path="/MyPost" element={<MyPost auth={auth} />} />
      </Routes>
    </View>
  );
}
