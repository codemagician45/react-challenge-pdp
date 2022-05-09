import {Routes, Route} from 'react-router-dom'
import { Navigation } from './components/Navigation';
import Home from './components/Home';
import { AddStudent } from './components/AddStudent';
function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-student" element={<AddStudent/>}/>
      </Routes>
    </div>
  );
}

export default App;
