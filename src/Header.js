import React from 'react';
function Header(){
      return(
          <header>
              <div className="hcont">
               <h2>Welcome To <span>Nasfam</span> <h5>Lorem ipsum dolor sit amet consectetur</h5></h2>
               <div className="img"></div>
              </div>
              <div className="btn_cont">
              <button>Get Started</button>
              </div>
          </header>
      );
  }
  
  //Sections
  function Sections(){
      return(
          <>
          <div className="content_cont">
            <div className="sec1">
             <div className="sec_head">
                <h3>Lorem Ipsum</h3>
             </div>
         <div className="sec_img simg1"></div>
             <div className="sec_content">
            In vehicula nulla turpis, sit amet tristique sem vulputate sed. Vivamus at massa dapibus, luctus turpis vitae, tempor est. Cras semper dictum pharetra. Suspendisse potenti.
            </div>
            </div>
           
           <div className="sec2">
           <div className="sec_head">
                <h3>Lorem Ipsum</h3>
             </div>
             <div className="sec_img simg2"></div>
             <div className="sec_content">
            In vehicula nulla turpis, sit amet tristique sem vulputate sed. Vivamus at massa dapibus, luctus turpis vitae, tempor est. Cras semper dictum pharetra. Suspendisse potenti.
            </div>
            </div>
            
          </div>
          
          <div className="content_cont">
            <div className="sec1">
             <div className="sec_head">
                <h3>Lorem Ipsum</h3>
             </div>
             <div className="sec_img simg3"></div>
             <div className="sec_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu malesuada ex, a efficitur ligula. Phasellus vitae dapibus nulla. 
            </div>
            </div>
           
           <div className="sec2">
           <div className="sec_head">
                <h3>Lorem Ipsum</h3>
             </div>
             <div className="sec_img simg4"></div>
             <div className="sec_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu malesuada ex, a efficitur ligula. Phasellus vitae dapibus nulla.
            </div>
            </div>
            
          </div>
          </>
      );
  }
  export default Header;
