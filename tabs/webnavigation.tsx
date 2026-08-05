import './fakenostalgia.css';
import { useState, useEffect } from 'react'

function WebNavigationListener() {

  useEffect(() => {
    // setup code
    // x.addEventListener
    return () => {
      // cleanup code
      // x.removeEventListener ;-;


    };
  }, []); // no deps













  return (
    <p>
      webnavigation events will be reported here!
    </p>



  )



}

export default WebNavigationListener
