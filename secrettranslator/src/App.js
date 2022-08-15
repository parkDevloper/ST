
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Selector from './components/Selector';
import UploadFile from './components/UploadFile';
import Main from './components/Main';
import Admin from './Admin';
function App() {
  return (
    <div>
         <Router>
           <Routes>
             <Route path='/' exact element={<Login/>} />
             <Route path='/selector' exact element={<Selector/>} />
             <Route path='/upload' exact element={<UploadFile/>} />
             <Route path='/main' exact element={<Main/>} />
             <Route path='/admin' exact element={<Admin />} />

           </Routes>
         </Router>
        
    </div>
   
  );
}

export default App;
