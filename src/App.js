import { useEffect, useState } from "react";
import "./App.css";

import  "./script.js"



const App = () => {
 const [layoutName, setLayoutName] = useState('default')
 const [input, setInput] = useState("")

const [disableInputBox, setDisableInputBox] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [touchedButton, setTouchedButton] = useState("");
  const [sampleParagraph, setSampleParagraph] = useState(
    "The best earning of life is staying healthy. Staying healthy means being physically, mentally and socially fit and stable. Suppose one knows how to have control over his health, then he knows how to lead a successful life. If a person is healthy, he will always be ready to work and be productive at work. If one wants to lead a healthy life, he must eat well and maintain the sleep cycle. One can stay fit by exercising daily and maintaining a proper timetable for everything. Keeping a healthy life will definitely encourage you towards a wealthy life."
  );

  
  const [paragraphArray, setParagraphArray] = useState(Array.from(sampleParagraph));

  const [inputArray, setInputArray] = useState(Array.from(inputValue));
  let [correctLetterCount, setCorrectLetterCount] = useState(0);

  let [showDetailsAfterSubmit, setShowDetailsAfterSubmit] = useState(false);



  const [timer, setTimer] =  useState(0);

  
  useEffect(() => {
    const timerId =
    timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(timerId);
  }, [timer]);

  const onChangeInput = event => {
    const input = event.target.value;
  setInput(input)
 this.keyboard.setInput(input);
  };

const onChange  = input => {
  setInput(input)
    console.log("Input changed", input);
  };

const onKeyPress = button => {
    console.log("Button pressed", button);


    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const handleShift = () => {
    const layoutName = layoutName;

    setLayoutName(
    layoutName === "default" ? "shift" : "default"
    );
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyboardPress = (e) => {
    setTouchedButton(e.key);
    if (e.key === "Enter") {
      
      e.preventDefault();
      alert("Thank you for the test")
      setInputValue('');
      setDisableInputBox(true);
      handleSubmitFunction();
    }
  };
  const handleResetFunction = () => {
    setInputValue('');
 
    setTimer(60);
    setShowDetailsAfterSubmit(false)
    }

  const handleSubmitFunction = () => {
    alert("Thank you for the test")
    setInputValue('');
    setDisableInputBox(true);
    setShowDetailsAfterSubmit(true)
    setTimer(0)
    }


    const CorrectWordsFn = () => {
      let temp = 0
      for (let i=0; i < paragraphArray?.length; i++ ) {
        if(paragraphArray[i] === inputArray[i]){
          temp = temp + 1;
        }
      }
      setCorrectLetterCount(temp)

      if(inputArray?.length === 0) {
        setCorrectLetterCount(0)

      }
    }




  useEffect(() => {
    if (timer > 0) {
      setDisableInputBox(false) 
    }
    else {
      setDisableInputBox(true) 
    }
   
  }, [timer]);

  useEffect(() => {
  
      setInputArray(Array.from(inputValue))
   
    CorrectWordsFn();

  }, [inputValue]);

  let count = 0
  return (
    <div className="App">
      <div className="paragraphBox">
        {sampleParagraph.split("").map((curItem, index) => {

          let a = inputArray[index] === curItem
        
          return (
            <span
              className="paragraphText"
              key={index}
              style={{
                color: a === true ? "green" : inputArray?.length > index ? "red" : "grey",
              }}
            >
              {curItem === ' ' ? ' ' : curItem}
              
            </span>
          );
        })}
      </div>

    

       <div className="container">
       
        <div className="keyboard_wrapp">
            <div className="keyboard_lights"></div>
            <div className="keyboard_keys">
                <div className="row">
                    <div className="keys">`</div>
                    <div className="keys">1</div>
                    <div className="keys">2</div>
                    <div className="keys">3</div>
                    <div className="keys">4</div>
                    <div className="keys">5</div>
                    <div className="keys">6</div>
                    <div className="keys">7</div>
                    <div className="keys">8</div>
                    <div className="keys">9</div>
                    <div className="keys">0</div>
                    <div className="keys">-</div>
                    <div className="keys">=</div>
                    <div className="keys backspace_key">Backspace</div>
                </div>
                <div className="row">
                    <div className="keys tab_key">Tab</div>
                    <div className="keys">Q</div>
                    <div className="keys">W</div>
                    <div className="keys">E</div>
                    <div className="keys">R</div>
                    <div className="keys">T</div>
                    <div className="keys">Y</div>
                    <div className="keys">U</div>
                    <div className="keys">I</div>
                    <div className="keys">O</div>
                    <div className="keys">P</div>
                    <div className="keys">{"{"}</div>
                    <div className="keys">{"}"}</div>
                    <div className="keys slash_key">\</div>
                </div>
                <div className="row">
                    <div className="keys caps_lock_key">Caps Lock</div>
                    <div className="keys">A</div>
                    <div className="keys">S</div>
                    <div className="keys">D</div>
                    <div className="keys">F</div>
                    <div className="keys">G</div>
                    <div className="keys">H</div>
                    <div className="keys">J</div>
                    <div className="keys">K</div>
                    <div className="keys">L</div>
                    <div className="keys">;</div>
                    <div className="keys">"</div>
                    <div className="keys enter_key">Enter</div>
                </div>
                <div className="row">
                    <div className="keys shift_key shift_left">Shift</div>
                    <div className="keys">Z</div>
                    <div className="keys">X</div>
                    <div className="keys">C</div>
                    <div className="keys">V</div>
                    <div className="keys">B</div>
                    <div className="keys">N</div>
                    <div className="keys">M</div>
                    <div className="keys">{"<"}</div>
                    <div className="keys">{">"}</div>
                    <div className="keys">/</div>
                    <div className="keys">?</div>
                    <div className="keys shift_key shift_right">Shift</div>
                </div>
                <div className="row">
                    <div className="keys ctrl_key ctrl_left">Ctrl</div>
                    <div className="keys win_key">Win</div>
                    <div className="keys alt_key alt_left">Alt</div>
                    <div className="keys space_key"></div>
                    <div className="keys alt_key alt_right">Alt</div>
                    <div className="keys">Fn</div>
                    <div className="keys ctrl_key ctrl_right">Ctrl</div>
                </div>
            </div>
        </div>
        <input className="text active inputBox" type="text"
 
        value={inputValue}
        onChange={(e) => handleChange(e)}
        placeholder="Enter your text"

        onKeyDown={(e) => handleKeyboardPress(e)}
        disabled={disableInputBox}
        style={{cursor: disableInputBox ? 'not-allowed' : 'default' }}
    //    style={{height:0,width:0,backgroundColor: 'transparent',
    // position: 'absolute'}}
    
        />
    </div>  
   


      <button onClick={()=>handleResetFunction()}> Reset</button>
      <button onClick={()=>handleSubmitFunction()}> Submit </button>
      
      {

      }

{
  showDetailsAfterSubmit ?  <div className="extraInfo">correct letters : {correctLetterCount}</div> : null
}

     

      <div className="lastTypedWord">{touchedButton}</div>
      <div className="timerBox">{timer}</div>
    </div>
  );
};

export default App;
