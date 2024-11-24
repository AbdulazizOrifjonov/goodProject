import './App.css'
import Navbar from './components/navbar/Navbar'
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
import img1 from "./assets/Rectangle.png"
import img22 from "./assets/Rectangl.png"
import img3 from "./assets/Rectan.png"

function App() {


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
          <div className="about">

            <h1 className='chose'>Popular</h1>
            <br />
            <h1 className="tetx">TOUR PACKAGES </h1>
            <p className="pi">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>
            <br />
            <div className="box">
              <div className="box1">
                <img src={img1} alt="" />
                <div className="flex">

                  <div className="d">

                    <h className="texts">ROME, ITALY</h>
                    <p className=''>10 days trip</p>
                  </div>
                  <h1><b>$5.24K</b></h1>
                </div>
              </div>
              <div className="box1">
                <img src={img22} alt="" />
                <div className="flex">

                  <div className="d">

                    <h className="texts">LAHORE, PAKISTAN</h>
                    <p className=''>6 days trip</p>
                  </div>
                  <h1><b>$3.25K</b></h1>
                </div>

              </div>
              <div className="box1">

                <img src={img3} alt="" />
                <div className="flex">

                  <div className="d">

                    <h className="texts">SlNGAPORE</h>
                    <p className=''>6 days trip</p>
                  </div>
                  <h1><b>$7.00K</b></h1>
                </div>
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>

  )
}

export default App
