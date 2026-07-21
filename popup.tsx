import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        padding: 16
      }}>
      <h2>
        {" "}
        <a href="./tabs/test-tab-page.html" target="_blank">
          Test Tab Page 
        </a>{" "}
         {" "}
        <a href="./tabs/graph.html" target="_blank">
          Example Graph 
        </a>{" "}
        <a href="./tabs/webnavigation.html" target="_blank">
          you got this :3 
        </a>{" "}</h2>
        {" "}
        <a href="./tabs/boilerplate.html" target="_blank">
          please for the love of god work please
        </a>{" "}   
        <input onChange={(e) => setData(e.target.value)} value={data} />

	      <p><b>IF THE EXTENSION WON'T RELOAD A TAB PAGE, IT'S BECAUSE YOUR CODE DOESN'T WORK. IF NEEDED RESTART THE DEV SERVER</b>
      	<div />
    	(React Flow pages don't change without a refresh)
      	</p>
      <a href="https://docs.plasmo.com" target="_blank">
        View Docs
      </a>
    </div>
  )
}

export default IndexPopup
