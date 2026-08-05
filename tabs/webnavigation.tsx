import './fakenostalgia.css';
import { useState, useEffect } from 'react'

function WebNavigationListener() {

  useEffect(() => {
    // setup code: a function called by an event listener and the listener itself
    const handleCreatedNavigationTarget = (event) => {
      console.log("createdNavigationTarget?", event);
    }
    chrome.webNavigation.onCreatedNavigationTarget.addListener(handleCreatedNavigationTarget); //  chrome.webNavigation is undefined?
    return () => {
      // cleanup code
      chrome.webNavigation.onCreatedNavigationTarget.removeListener(handleCreatedNavigationTarget);

    };
  }, []); // no deps




  return (
    <div>
      <p>
        webnavigation events will be reported here!!
      </p>
      <p>
        yo hey check this cool link out: <a href="https://www.example.com">https://www.example.com</a>
      </p>
      <p>
        and this: <a href="https://en.wikipedia.org/wiki/Special:Random">Wikipedia:Random</a>
      </p>
    </div>
  )

}

export default WebNavigationListener
