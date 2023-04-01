import MainPage from "./components/mainPage/MainPage";
import {Routes, Route} from 'react-router-dom';
import "./App.css";
import Article from "./components/article/Article";



function App() {
  
  return(
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/article/:id' element={<Article/>}/>
    </Routes>
  )
      
}

export default App;