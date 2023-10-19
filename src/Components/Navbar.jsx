import React from 'react'

const Navbar = () => {
  return (
    <div className='navb'>
    <div className='logo-item'>
    <span className='logo'>Gama App
</span> 
<img  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQaoeemrDi9j9usIHaK_sF4okgt4z7vVRTQ&usqp=CAU' className='log-img'/>
</div>
    
<ul className='list'>
<li className='listitem'>Home</li>
<li className='listitem'>About</li>
<li className='listitem'>Blog</li>
<li className='listitem'>contact us</li>

</ul>
<div className='registration-btn'>
<button className='login btn'>login</button>
<button className='signup btn'> Register</button>
</div>
</div>
);
};

export default Navbar
