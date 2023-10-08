import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/education' element={<Education />} />
        <Route path='/work' element={<Work />} />
        <Route path='/community' element={<Community />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/post/:postID' element={<Post />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='/editeducation' element={<EditEducation />} />
        <Route path='/editwork' element={<EditWork />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
