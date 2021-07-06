import React from 'react'
import {Header ,Landing , Layout , About} from '../../components/index';
import  {useState } from 'react';
const LandingView = ()  => {
 

    const [colorChange, setColorchange] = useState('none');
    const [logo, setLogo] = useState('none');
    
    



  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange('gray');  
       setLogo('flex');
     }

     else{
       setColorchange('none');
       setLogo('none');
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
    return (
        <Layout pageTitle='Home'>
         <Header color= {colorChange}  height={'70px'} login={true} logo={logo} />
         <Landing/>
         <About/>
        </Layout>
    )
}

export default LandingView;