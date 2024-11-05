import Link from "next/link";
import "./globals.css";

// import heroImage from "./public/hero-image.png";

import Image from "next/image";

export default function Home() {
  return (
<div className="home">
       <nav>
          <ul>
          <li><Link href="#freatured-works">Works</Link></li>

          <li><Link href="#recent-post">Blog</Link></li>

          <li><Link href="#contact">Contact</Link></li>
          </ul>
        </nav>
      
      <div className="image">
        <Image src="/hero-image.png" width={300} height={300} alt="Picture of the author" />
      </div>

      <div className="hero-text">
        <h1 id="text1">Hi, I am John, Creative Technologist</h1>
        <p id="text2">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    
      <div className="bt">
        <button>Download Resume</button>
      </div>

      <div className="recent-post">
            
            <div className="rp">
              <h2>Recent Post</h2>
            </div>
            
            <div className="v1">
              <h4>View All</h4>
            </div>
          
          <div className="a1">
                <div className="post1">
                   <h2>Making a design system from scratch</h2>
       
                  <div className="block1">
                   <h3 className="head2">12 Feb 2020</h3>
                  </div>
                
                  <div className="block2">
                  <h3 className="head3">Design , Pattern</h3>
                  </div>
          
                  <p id="rc1">
                   Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                   sint. Velit officia consequat duis enim velit mollit. Exercitation
                   veniam consequat sunt nostrud amet.
                  </p>
              </div>  
        
              <div className="post2">
                      <h2>Making a design system from scratch</h2>
              
                    <div className="block1">
                    <h3 className="head2">12 Feb 2020</h3>
                    </div>

                    <div className="block2">
                    <h3 className="head3">Design , Pattern</h3>
                    </div>
         
                    <p id="rc2">
                     Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                     sint. Velit officia consequat duis enim velit mollit. Exercitation
                     veniam consequat sunt nostrud amet.
                    </p>
                </div>
           </div>
    </div>
    <div className="z1">
             <div className="featured-works">
                    {/* <div className="fw"> */}
                    <h4 id="fw">Featured Works</h4>
                    {/* </div> */}
        
                    <div className="featured1">
                    <Image src={"/Rectangle 30.png"} width={"300"} height={"200"} alt={"featured1"} />
                    </div><br/><br/><br/><br/><br/><br/>
        
                    <div className="featured2">
                     < Image src={"/Rectangle 32.png"} width={"300"} height={"200"} alt={"featured2"} />
                    </div><br/><br/><br/><br/><br/><br/>
        
                    <div className="featured3">
                    <Image src={"/Rectangle 34.png"} width={"300"} height={"200"} alt={"featured3"} />
                    </div><br/><br/><br/><br/><br/><br/>
               </div>
               
              <div className="featured-section">
                    <div className="dd1">
                      <div className="ddash"><br/><br/>
                      <h2>Designing Dashboards</h2>
                      </div>
                    
                      <div className="dash">
                      <h5 id="m1">2020</h5><h5 id="m2">Dashboard</h5>
                      </div>
                      <p id="tx1">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                        amet sint. Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.
                      </p>
                    </div>

                    <div className="dd1">
                      <div className="ddash"><br/><br/>
                      <h2>Designing Dashboards</h2>
                      </div>
                      <div className="dash">
                      <h5 id="m1">2020</h5><h5 id="m2">Dashboard</h5>
                      </div>
                      <p id="tx1">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                        amet sint. Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.
                      </p>
                    </div>

                    <div className="dd1">
                      <div className="ddash"><br/><br/><br/>
                      <h2>Designing Dashboards</h2>
                       </div>
                      <div className="dash">
                      <h5 id="m1">2020</h5><h5 id="m2">Dashboard</h5>
                      </div>
                      <p id="tx1">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                        amet sint. Velit officia consequat duis enim velit mollit.
                        Exercitation veniam consequat sunt nostrud amet.
                      </p>
                    </div>
              </div>    
     
      </div>
    
   <footer>
       <div className="logo">
          <div className="fb">
          <Image src={"/fb.png"} width={"30"} height={"30"} alt={"facebook"} />
          </div><br/><br/>
        
          <div className="inst">
          <Image src={"/insta.png"} width={"30"} height={"30"} alt={"instagram"} />
           </div>
        
          <div className="twit">
          <Image src={"/twitter.png"} width={"30"} height={"30"} alt={"twitter"} />
          </div><br/>
        
          <div className="in">
          <Image src={"/Linkedin.png"} width={"30"} height={"30"} alt={"linkedin"} />
          </div>
      </div>
          <p className="end">Copyright ©2020 All rights reserved</p>
   </footer>
   
</div>
  );
}
