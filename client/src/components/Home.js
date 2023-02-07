import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StoreState } from "../context/Context";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Resume from "./Resume";

const Home = () => {
  
  const navigate = useNavigate();
  var { dispatch } = StoreState();
 
  useEffect(() => {

    const homePageValid = async () => {
      let token = localStorage.getItem("userdatatoken");
  
      axios.get("api/vailduser", {
          headers: {
            token: token,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            dispatch({type: "SET_USER_DETAILS",payload: res.data.ValidUserOne });
          } else {
            navigate("/login");
          }
        }).catch((err)=>{
          console.log('vu err');
        })
    };
    homePageValid(); 
  }, [navigate, dispatch]); 

  return (
    <>
        <Navbar/>
        <div className="home">
          <Header />
          <Resume />
        </div>
        <Footer/>
    </>
  )
};

export default Home
