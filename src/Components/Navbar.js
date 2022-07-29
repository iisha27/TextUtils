  import React from 'react';
  import PropTypes from 'prop-types'
  import { Link } from 'react-router-dom';

function Navbar(props){
    return(
        <>
         <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" style={{color:props.mode==='dark'? 'white':'black'}} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " style={{color:props.mode==='dark'? 'white':'black'}} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color:props.mode==='dark'? 'white':'black'}} to="/about">{props.aboutText}</Link>
        </li>
       {/* <div className='d-flex'>
        <div className="bg-primary rounded mx-2" style={{height:'30px', width:'30px'}}></div>
       </div> */}
       
      </ul>
      <div className={`form-check form-switch text-${props.mode==='dark'? 'light':'dark'}`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
</div>
      </div>
    </div>
           </nav>
           </>
    );
}

export default Navbar;
Navbar.propTypes={title:PropTypes.isRequired,
aboutText:PropTypes.string}

Navbar.defaultProps={
    title :'Set title here',
    aboutText:'About'
     
}