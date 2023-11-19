import React, {useEffect, useState} from 'react';
import cart from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"
import  "../styles/nav.css"

import stuffs from "./stuffs"

export default function Nav(props){
  const [modal,setModal] = useState(false);
  const [item, setItem] = useState(true)


  const openModal = () => {
    setModal(true);
    console.log(modal)
  };

  const closeModal = () => {
    setModal(false);
    console.log(modal)
  };
  useEffect(()=>{
    console.log(modal)
  },[modal])

  const products =() =>{
    if(modal){
      console.log("if")
      return item
    }
    else{
          console.log("else")
      return <h6>Nothing in cart yet</h6>
    }
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setItem(props.something)
      products()
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [item]); // Empty dependency array means this effect runs once on mount


    return(
     <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light p-3">
  <a class="navbar-brand ml-5 mr-5" href="/"> <h1>sneakers</h1> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/"> Collection <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Men</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Women</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Contact</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <img src={cart} alt='cart' className='m-3' onClick={openModal}/>
      <img src={avatar} alt='avatar' width={50} height={50} className='m-3'/>

    </form>
  </div>
</nav>

{modal && (
        <div className='basket'>
          <h4 className='x' onClick={closeModal}>X</h4>
            <p>Cart</p>
          <hr/>
            <div>
              {products()}
            </div>
        </div>
    )}
     </>
    )
}