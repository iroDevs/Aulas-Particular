import './App.css';

import {useState} from 'react';
import ItensSalvos from './ItensSalvos';
import {
  Container,
} from 'reactstrap';





function App() {
let urlImage = "https://www.10wallpaper.com/wallpaper/1680x1050/1411/Cool_Black_3D-Abstract_widescreen_wallpaper_1680x1050.jpg"

return (
  <>
   <Container fluid  style={{
    height:"100vh",
    background: `linear-gradient(to top, rgba(0, 0, 0, 0), transparent), url(${urlImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
    >
      <h1 className='text-center animate__animated animate__bounceInDown  animate__delay-1s' style={{color:"white",paddingTop:"200px"}}>Ola mundo</h1>

   </Container>
 </>
   
 );
}

export default App;
