import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav>
            <div className="hi">

            <div className="nav_right">

                <h1>Listee Travel</h1>
            </div>
            {/* <div className="flex"> */}

            <div className="nav_center">
                <a href=''>Home</a>
                <a href=''>About Us</a>
                <a href=''>Destinations</a>
                <a href=''>Tours</a>
                <a href=''>Shop</a>
                <a href=''>Blogs</a>
            </div>
            <div className="nav_left">

                <h3>
                    <b>
                        <a href="">Sign In</a>
                    </b>
                </h3>
                <button>
                    <h3>
                        <b>SingUp</b>
                    </h3>
                </button>
                {/* </div> */}
            </div>
            </div>

            <div className="owner">

            <div className="one">

                <div className="nav_right">

                    <h1>Listee Travel</h1>
                </div>
                {/* <div className="flex"> */}

                <div className="nav_left">

                    <h3>
                        <b>
                            <a href="">Sign In</a>
                        </b>
                    </h3>
                    <button>
                        <h3>
                            <b>SingUp</b>
                        </h3>
                    </button>
                    {/* </div> */}
                </div>
            </div>



            <div className="nav_center">
                <a href=''>Home</a>
                <a href=''>About Us</a>
                <a href=''>Destinations</a>
                <a href=''>Tours</a>
                <a href=''>Shop</a>
                <a href=''>Blogs</a>
            </div>


            </div>



        </nav>
    )
}

export default Navbar