import React from "react";
import About from "./component/About";
import Business from "./component/business";
import Personal from "./component/personal";
import Onlineservice from "./component/onlineservice";
import Banner from "./component/banner";
import Footer from "./component/footer";
import More from "./component/more";
import Available from "./component/available";
import Navbar from "./component/navbar/navbar";

function Main(){
    return(
        <>
        <Navbar/>
        <Banner/>
        <More/>
        <Footer/>
        
        </>
    )
}
export default Main;