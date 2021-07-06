import React from 'react'
import {Header ,Landing , Layout , About} from '../components/index';
import  {useState } from 'react';
const LandingView = ()  => {
 

    const [colorChange, setColorchange] = useState('none');
  
    



  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange('gray');
  
     }
     else{
       setColorchange('none');
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
    return (
        <Layout pageTitle='Home'>
         <Header color= {colorChange}  height={'70px'} login={true} />
         <Landing/>
         <About/>
        </Layout>
    )
}

export default LandingView;