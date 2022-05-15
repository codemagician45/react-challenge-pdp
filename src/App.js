import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Navigation } from './components/Navigation';
import Home from './components/Home';
import { AddStudent } from './components/AddStudent';
function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-student" element={<AddStudent/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
