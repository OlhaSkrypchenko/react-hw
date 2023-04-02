import MainPage from "./components/mainPage/MainPage";
import {Routes, Route, Navigate} from 'react-router-dom';
import "./App.css";
import Article from "./components/article/Article";



function App() {
  
  return(
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/article/:id' element={<Article/>}/>
      <Route path='/article' element={<Navigate to="/" replace />} />
      <Route path='/:category' element={<MainPage/>}/>
    </Routes>
  )
      
}

export default App;