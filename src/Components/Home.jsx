import React from 'react';
import Dwarka from '../Assets/Dwarka.jpg';
import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();
function Contact(){
    navigate("/ContactUs");
}
    return(<>
        <h1 className='text-center p-4 bg-dark text-white'>Welcome to my home!</h1>
        <div><img src={Dwarka}  className = 'rounded mx-auto d-block  mt-5'width = "95%" alt="Logo"/></div>
        <div className='text-justify p-4 m-4'>Welcome to my home!. House Flat Living room Bedroom Kitchen Hall Bathroom Toilet. Furniture Fridge Sofa Armchair Wardrobe Bookshelf Carpet Coffee - table. Phonetic drill. Where is the cat?. Under In front of On the right Behind On the left In the middle of on. Kindly purchase my house , whoever wants.</div>
        <div className='text-center mb-5'><button className='btn btn-dark' onClick={Contact}>Contact Us</button></div>
    </>);
}

export default Home;