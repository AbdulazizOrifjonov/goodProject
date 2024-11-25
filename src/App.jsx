import './App.css'
import Navbar from './components/navbar/Navbar'
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import 'boxicons'
import img from "./assets/svg.svg"
import search from "./assets/search.svg"
import img2 from "./assets/colendar.svg"
import fourSvg from "./assets/four.svg"
import fourdSvg from "./assets/fourd.svg"
import oneSvg from "./assets/one.svg"
import onedSvg from "./assets/oned.svg"
import twoSvg from "./assets/two.svg"
import twodSvg from "./assets/twod.svg"
import threeSvg from "./assets/three.svg"
import threedSvg from "./assets/threed.svg"
import fiveSvg from "./assets/five.svg"
import fivedSvg from "./assets/fived.svg"
import sixSvg from "./assets/six.svg"
import sixdSvg from "./assets/sixd.svg"
import lisa from "./assets/lisa.png"
import jonim from "./assets/jonim.png"
import john from "./assets/john.png"
import loya from "./assets/loya.png"
import kiss from "./assets/kiss.png"
import elif from "./assets/Elif.png"
import home from "./assets/Home.png"
import a from "./assets/a.png"
import b from "./assets/b.png"
import c from "./assets/c.png"
import d from "./assets/d.png"
import e from "./assets/e.png"
import f from "./assets/f.png"


import imms from "./assets/Rectangl.png"
import immes from "./assets/Rectangle.png"
import immse from "./assets/Rectan.png"


function App() {

  const packages = [
    {
      image: imms, // Rasm URL
      title: "ROME, ITALY",
      days: "10 days trip",
      price: "$5.24K",
    },
    {
      image: immes,
      title: "LAHORE, PAKISTAN",
      days: "6 days trip",
      price: "$3.25K",
    },
    {
      image: immse,
      title: "SINGAPORE",
      days: "6 days trip",
      price: "$7.00K",
    },
  ];
  return (

    <div className="container">
      <div className="wrapper">
        <section className='section_1'>

          <Navbar />
          <div className="main">

            <h1>
              Explorer and Travel
            </h1>
            <h2>
              Let’s Go Now
            </h2>
            <p className='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            <div className="location">
              {/* <i class='bx bx-map' style='color:#ffffff'  ></i> */}
              <div className="side_right">

                <img src={img} alt="" />
                <div>

                  <p>Location</p>
                  <h4><b>Thailand</b></h4>
                </div>
              </div>
              <div className="side_left">

                <img src={img2} alt="" />
                <div>
                  <p>Date</p>
                  <h4><b>13 May, 2023</b></h4>
                </div>
              </div>
              <button>
                <img src={search} alt="" />
              </button>
            </div>
          </div>
        </section>
        <section className="section_2">
          <div className="card">
            <h1 className='chose'>Choose your</h1>
            <br />
            <h1 className='text'>Destination</h1>
            <div className="images">
              <div className="img_ziro center">

                <h1 className='heding'>Malaysia</h1>
                <button className='btn'>16 Tours</button>
              </div>
              <div className="card_img">
                <div className="second_div">

                  <div className="img_one center">
                    <h1 className='heding'>Dubai</h1>
                    <button className='btn'>16 Tours</button>
                  </div>
                  <div className="img_two center">
                    <h1 className='heding'>Greece</h1>
                    <button className='btn'>16 Tours</button>
                  </div>

                </div>


                <div className="img_three center">
                  <h1 className='heding'>Singapore</h1>
                  <button className='btn'>16 Tours</button>

                </div>
              </div>
            </div>
            <button className='btn'>View More</button>
            <br />
            <br />
            <h1 className='chose'>Travel by</h1>
            <br />
            <h1 className="tetx">ACTIVITY </h1>
            <p className='pi'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
          </div>
          <div className="card_father">
            <div className="card_children">
              <img className='see' src={oneSvg} alt="" />
              <img className='saw' src={onedSvg} alt="" />

              <h1><b>Adventure</b></h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="card_children">
              <img className='see' src={twoSvg} alt="" />
              <img className='saw' src={twodSvg} alt="" />
              <h1><b>Camping</b></h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="card_children">
              <img className='see' src={threeSvg} alt="" />
              <img className='saw' src={threedSvg} alt="" />
              <h1><b>Trekking</b></h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="card_children">
              <img className='see' src={fourSvg} alt="" />
              <img className='saw' src={fourdSvg} alt="" />
              <h1><b>Off Road</b></h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="card_children">
              <img className='see' src={fiveSvg} alt="" />
              <img className='saw' src={fivedSvg} alt="" />
              <h1><b>Camp Fire</b></h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="card_children">
              <img className='see' src={sixSvg} alt="" />
              <img className='saw' src={sixdSvg} alt="" />
              <h1><b>Expiring</b></h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
          </div>
 

<section className="tour-packages">
      <h2 className="section-subtitle">Popular</h2>
      <h1 className="section-title">TOUR PACKAGES</h1>
      <p className="section-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>

      <div className="cards">
        {packages.map((pkg, index) => (
          <div className="cart" key={index}>
            <img src={pkg.image} alt={pkg.title} className="card-img" />
            <div className="card-content">
              <div className="layli">

              <h3 className="card-title">{pkg.title}</h3>
              <p className="card-days">{pkg.days}</p>
              </div>
              <p className="card-price">{pkg.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
          <br />
          <br />
          <br />

          <div className="what">
            <h1 className="chose">Best Traveler’s</h1>
            <h1 className="tetxs">SHARED PHOTOS</h1>
            <p className="pis">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <div className="all">
              {[a, b, c, d, e, f].map((src, index) => (
                <div className="how" key={index}>
                  <img src={src} alt={`Image ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="main_ending">
            <h1 className='chose'>Review & Testimonials</h1>
            <br />
            <h1 className="tetx">TOP REVIEWS FOR ETOUR </h1>
            <p className="pi">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <br />
            <br />
            <br />
            <div className="also">
              <p className='pis'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.....
              </p>
            </div>
            <div className="phptos">
              <img src={elif} alt="" />
              <img src={john} alt="" />
              <img src={loya} alt="" />
              <img src={jonim} alt="" />
              <div className="day">

                <span>Scarlett Thomas</span>
                <p>Singapore</p>
              </div>
              <img src={lisa} alt="" />
              <img src={kiss} alt="" />
            </div>
          </div>

          <footer>
            <br />
            <div className="footer">
              <img className='footer_img' src={home} alt="" />
              <div className="newsletter-container">
                <h1 className="newsletter-title">Get Our Monthly Newsletter</h1>
                <p className="newsletter-description">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <form className="newsletter-form">
                  <input
                    type="email"
                    placeholder="Input your email address in here"

                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-button">
                    →
                  </button>
                </form>
              </div>
              <br />
            </div>

          </footer>
          <footer class="footers">
            <div class="footer-container">
              <div class="footer-brand">
                <h2  className="tetx">Listee Travel</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div class="footer-socials">
                  <a href="#"><RiInstagramFill /></a>
                  <a href="#"><FaFacebook /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaYoutube /></a>
                </div>
              </div>

              <div class="footer-links">
                <h3>About</h3>
                <ul>
                  <li><a href="#">Menu</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">News & Blogs</a></li>
                  <li><a href="#">Help & Supports</a></li>
                </ul>
              </div>

              <div class="footer-links">
                <h3>Company</h3>
                <ul>
                  <li><a href="#">How we work</a></li>
                  <li><a href="#">Terms of service</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>

              <div class="footer-contact">
                <h3>Contact Us</h3>
                <p>Akshya Nagar 1st Block 1st Cross, Ramamurthy nagar, Bangalore-560016</p>
                <p>+1 202-918-2132</p>
                <p>listeetravel@mail.com</p>
                <p>www.listeetravel.com</p>
              </div>
            </div>
          </footer>
        </section>



      </div>
    </div>

  )
}

export default App
