import './App.css'; 

import Tooltip from './Tooltip.js' 




function App() {
  return (
    <div>
      <div className="App">
        <p>Tooltipping</p>
        <div>
          <div className="bottomSpace">
            <Tooltip content={"Partly sunny with rain"} >
              <img className="image"
                  src={require("./weather_icon-removebg-preview.png")} 
                  alt="Weather" />
            </Tooltip>     
          </div>
          <div className="bottomSpace">
            <Tooltip content={"Checkmark"} 
                     place={"left"} 
                     delay={0} >
              <img className="image" 
                  src={require("./checkmark-removebg-preview.png")} 
                  alt="CheckMark" />
            </Tooltip>
          </div>
          <div className="bottomSpace">
            <Tooltip content={"Press Me"} place={"bottom"} delay={2000}>
              <button>Press Me</button>
            </Tooltip>
          </div>
          <div className="bottomSpace">
            <Tooltip content={"Submit"}>
              <button>Submit</button>
            </Tooltip>
            <Tooltip content={"Enter Text"}>
              <input datatype="text" />
            </Tooltip>
          </div>
          <div className="example-wrapper">
          <div>
            <Tooltip content="Yee-haw!" place="right" delay={1000}>
              <span className="emoji" role="img" aria-label="cowboy emoji">
                🤠
              </span>
            </Tooltip>
          </div>
      </div>
        </div>
      </div>
    </div>  
  );
}

export default App;
