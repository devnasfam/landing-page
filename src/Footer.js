import React from 'react';
const Footer = () =>{
      return(
          <>
          <footer>
          <div className="desk">
          <div className="falldivs">
          
            <div className="first_divs">
            <div className="social_div">
             <div className="social_head">
              <h4>Follow Us</h4>
              </div>
              <ul>
                  <li><i className="fab fa-instagram"></i> Instagram</li>
                  <li><i className="fab fa-facebook"></i> Facebook</li>
                  <li><i className="fab fa-twitter"></i> Twitter</li>
              </ul>
             </div>
            </div>
            
            <div className="first_divs">
            <div className="social_div">
             <div className="social_head">
              <h4>Projects</h4>
              </div>
              <ul>
                  <li><i className="fab fa-github"></i> Github</li>
                  <li><i className="fab fa-linkedin"></i> LinkedIn</li>
                  <li><i className="fab fa-youtube"></i> YouTube</li>
              </ul>
             </div>
            </div>
            
          </div>
          
           <div className="first_divs">
             <div className="social_head">
              <h4>Send Us An Email</h4>
             </div>
             <div className="inputs_cont">
                <input 
                type="email"
                placeholder="Email Address"
                />
                <button>Send</button>
             </div>
           </div>
           </div>
          <div className="copyright">
            copyright @devnasfam 2023
          </div>
          </footer>
          </>
      );
  }
export default Footer;
