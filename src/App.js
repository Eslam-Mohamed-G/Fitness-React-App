import './App.css';
import {Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExercisDetail from './pages/ExerciseDelails';

function App() {
  return (
    <Box width='400px' sx={{width: {xl:'1488px'}}} m="auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='exercise/:id' element={<ExercisDetail/>} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
