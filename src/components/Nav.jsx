import React,{useState,useEffect} from "react";
import '../Nav.css';
const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll',() => {
      if(window.scrollY > 100){
        handleShow(true);
      }else{
        handleShow(false);
      }
      return  () => {
        window.removeEventListener('scroll');
      }
    })
  }, [])
  return (
    <>
      <div className={`nav ? ${show && 'navBlack'}`}>
        <img className="navLogo" src="logo.png" alt="logo" />
        <img className="icon" src="icon.png" alt="profile" />
      </div>
    </>
  );
};

export default Nav;
