import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="logo_wrap">
        <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 249" enable-background="new 0 0 256 249" xml:space="preserve" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M47.522,170.287l11.172,76.681h138.612l11.172-76.681H47.522z M128,215.249c-5.748,0-10.407-3.063-10.407-6.84 s4.659-6.84,10.407-6.84c5.748,0,10.407,3.062,10.407,6.84S133.748,215.249,128,215.249z M233.315,233.054h-26.028l10.292-70.639 H38.421l10.292,70.639H22.685c-14.848,0-24.85-15.195-18.978-28.834l36.809-85.489c7.149-16.605,23.493-27.362,41.571-27.362h14.486 l22.885,34.061l4.665-22.254l-7.809-11.807h23.491l-7.81,11.807l4.655,22.098l22.78-33.905h14.486 c18.078,0,34.422,10.757,41.571,27.362l36.808,85.489C258.165,217.858,248.164,233.054,233.315,233.054z M128,2.033 c22.496,0,40.733,18.237,40.733,40.733S150.496,83.498,128,83.498S87.267,65.261,87.267,42.765S105.504,2.033,128,2.033z"></path> </g></svg>
        </div>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Login</a>
            </li>
            <li>
                <a className="hireme" href="#">Sell</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar