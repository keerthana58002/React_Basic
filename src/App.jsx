
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import AxiosHome from './Axios/AxiosHome';
import AxiosAbout from './Axios/AxiosAbout';



function App() {
  // const [formData, setFormData] = useState(null);

  return (
    <>
    
      {/* <ReatYup/> */}
      {/* <FormikYupForm/> */}
      <Router>
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Home setFormData={setFormData} />} />
        <Route path="/about" element={<About formData={formData} />} /> */}
        <Route path="/" element={<AxiosHome/>} />
        <Route path="/about" element={<AxiosAbout/>} />
      
      </Routes>
    </Router>
  </>
    
  )
}

export default App;
