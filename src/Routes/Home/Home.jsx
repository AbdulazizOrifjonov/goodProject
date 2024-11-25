import React from 'react'
import a from "../../assets/a.png"
import b from "../../assets/b.png"
import c from "../../assets/c.png"
import d from "../../assets/d.png"
import e from "../../assets/e.png"
import f from "../../assets/f.png"

const Home = () => {
  return (
    <div>
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
    </div>
  )
}

export default Home