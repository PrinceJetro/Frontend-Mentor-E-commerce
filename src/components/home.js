import React, {useState, useEffect} from 'react';
import "../styles/home.css";
import c from "../images/icon-cart.svg"
import avatar from "../images/image-avatar.png"
import stuffs from './stuffs';


export default function Home(){
  const [things, setThings] = useState([])
  const [counter,setCounter] = useState(stuffs);
  const [cart,setCart] = useState("");
  const [modal,setModal] = useState(false);




    
  const openModal = () => {
    setModal(true);
    document.getElementById("basket").style.width = "100%";
  };
  const closeModal = () => {
    setModal(false);
    document.getElementById("basket").style.width = "0%";
  };
  useEffect(()=>{
    console.log(modal)
  },[modal])

  const products =() =>{
    if(things.length > 0){
      return things.map((item, index) => (
        <li key={index} className='mb-3'>
          <img src={item.img} width={50} height={50}/> : {item.com.slice(0,29)}, {item.pri}  X {item.num} : $<span className='total'>{item.pri.slice(1) * item.num}</span>      
        </li>
      ))
    }
    else{
      return <h6>Nothing in cart yet</h6>
    }
  }

    useEffect(() => {
        console.log("counter is now :",  counter[1].number)
      }, [counter]);

      const increment = (event, item, index) => {
        const updatedCounter = [...counter]; // Create a copy of the array
        updatedCounter[index].number += 1;   // Increment the value at the specified index
        setCounter(updatedCounter); // You can use setCounter to update the state if counter is a state variable
    }
     
    const decrement = (event, item, index) => {
        const updatedCounter = [...counter]; // Create a copy of the array
        if(updatedCounter[index].number <= 0){
          return
        }
        updatedCounter[index].number -= 1;   // decrement the value at the specified index
        setCounter(updatedCounter); // You can use setCounter to update the state if counter is a state variable
    }
    
    const display = (event, item) => {
        // Assuming 'thumbnails' is a class
        const images = document.querySelectorAll('.thumbnails');
        for (let i = 0; i < images.length; i++) {
          images[i].style.opacity = 1;
        }
      
        const big = event.target.parentElement.previousElementSibling;
        big.querySelector("img").src=event.target.src
        event.target.style.opacity = 0.4;
      };
      

    
    const addToCart = (event, item) => {
        // Get the HTML content of the element with ID "company"
        const companyElement = event.target.parentElement.parentElement.parentElement.parentElement
        if (companyElement) {
            const title = companyElement.querySelector("#title").innerHTML          
            const price = companyElement.querySelector(".price").textContent
            const img = companyElement.parentElement.querySelector("#img1").src
            const number = companyElement.querySelector("#count").textContent
            const popup = companyElement.querySelector("#myPopup")
            if(number == 0){
              popup.innerHTML = "You cannot add 0 products to cart"
              popup.classList.toggle("show");
              return setTimeout(function () {
                popup.classList.toggle("show");
            }, 3000);              
            }
            popup.innerHTML = `${number} ${title} has been added to cart`
            popup.classList.toggle("show");
            setTimeout(function () {
              popup.classList.toggle("show");
          }, 3000);
            
            const content = {
            com : title,
            pri:price,
            img: img,
            num: number
          };
         
    
          // Create a new array by spreading the existing item array and adding the company content
        
            const newItemArray = [...things, content];

        
          // Update the state with the new array
          setThings(newItemArray);
        }
      };
        
    return(
        <>


<>
        <nav class="navbar navbar-expand-lg navbar-light bg-light p-3 ">
  <a class="navbar-brand ml-5 mr-5" href="/"> <h1>sneakers</h1> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item links active">
        <a class="nav-link " > Collection <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item links">
        <a class="nav-link " >Men</a>
      </li>
      <li class="nav-item links">
        <a class="nav-link " >Women</a>
      </li>
      <li class="nav-item links">
        <a class="nav-link " >About</a>
      </li>
      <li class="nav-item links">
        <a class="nav-link " target="_blank"  href='https://adegbuyi-jephthah.vercel.app' >Contact</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <img src={c} alt='cart' className='m-3' onClick={openModal}/>
      <img src={avatar} alt='avatar' width={50} height={50} className='m-3'/>

    </form>
  </div>
</nav>
              <img src={c} alt='cart' className='float sticky' onClick={openModal}/>

        <div className='basket' id='basket'>
          <h4 className='x' onClick={closeModal}>X</h4>
            <p>Cart</p>
          <hr/>
            <div>
              {products()}
            </div>
        </div>
     </>

        {
            stuffs.map((item, index)=>(
                <div className='container'>
                <div className='row mb-5'>
                    <div className='col-sm-6'>
                        <div id="big_div">
                            <img src={item.img1} id='big' alt="big"/>
                        </div>
                        <div className='thumbnails_div' id="thumbnails_div">
                        <img src={item.img1}  alt="1" id={"img1"}  onClick={(event) => display(event, item)} className='thumbnails'/>
                        <img src={item.img2}  alt='2' id={"img2"}  onClick={(event) => display(event, item)} className='thumbnails'/>
                        <img src={item.img3}  alt="3" id={"img3"}  onClick={(event) => display(event, item)} className='thumbnails'/>
                        <img src={item.img4}  alt="4" id={"img4"}  onClick={(event) => display(event, item)} className='thumbnails'/>
                        </div>
    
                    </div>
                    <div className='col-sm-6 p-5' id='ada'>
                        <p id='company'>{item.company}</p>
                        <h1 id='title'>{item.title}</h1>
                        <p id='desc'> {item.desc}</p>
                        <div className='price_div'>
                        <h2 className='price'><span>$</span>{item.price()}</h2>
                        <span className='off'>{item.off}%</span>
                            </div>           
                        <h2 id='strike'>${item.strike}</h2>       
    
                        <div className='cart row'>
                            <div className='col-sm-6 counter'>
                            <i className="fa fa-minus" onClick={(event) => decrement(event, item, index)}></i>
                                <h3 id='count'>{counter[index].number}</h3>
                            <i className="fa fa-plus" onClick={(event) => increment(event, item, index)}></i>
                            </div>
                            
                            <div className='col-sm-6'>
                                <div className='fake_button'  onClick={(event) => addToCart(event, item)}>
                                    <i  className='fa fa-shopping-cart'></i>
                                    <p>Add to cart</p>
                                </div>
                            </div>
                                    <div class="popup"><span class="popuptext" id="myPopup">{item.title} has been added to cart</span></div>
                            </div>  
                    </div>
    
                </div>
    
            </div>
            ))
        }

        </>    
)

}