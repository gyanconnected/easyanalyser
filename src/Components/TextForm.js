import React, { useState } from 'react'


export default function (props) {
    const [text, setText] = useState('');

    const handleOnChange = (event)=>{
        console.log(text);
        setText(event.target.value);
    }

    const UpperhandleOnClick = ()=>{
        let newText = text.toUpperCase(); 
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const LowerhandleOnClick = ()=>{
        let newText = text.toLocaleLowerCase(); 
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const ClearhandleOnClick = ()=>{
        setText('');
        props.showAlert("Text Cleared", "success");
    }

    const CopyhandleOnClick = ()=>{

        // Get the text field
        var copyText = document.getElementById("mybox");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
  
        props.showAlert("Copied the text: " + copyText.value, "success");
    }

  return (
    <>
    <div>
        <div className="container" style={{backgroundColor: props.mode==="light"?"white":"#042743", color: props.mode==="light"?"black":"white"}}>
        {/* <label for="mybox" class="form-label">Enter your text below</label> */}
            <h2 className="mb-2">{props.heading}</h2>
        <textarea className="form-control row-8" onChange={handleOnChange} value={text} id="mybox" style={{backgroundColor: props.mode==="light"?"white":"#042743", color: props.mode==="light"?"black":"white"}}></textarea>
        <br/>
        <div>
        <button disabled={text.length===0}  className='btn-btn-primary mx-1 my-1' onClick={UpperhandleOnClick}>Convert to Uppercase</button>
        <button disabled={text.length===0}  className='btn-btn-primary mx-1 my-1' onClick={LowerhandleOnClick}>Convert to Lowercase</button>
        <button disabled={text.length===0}  className='btn-btn-primary mx-1 my-1' onClick={ClearhandleOnClick}>Clear</button>
        <button disabled={text.length===0}  className='btn-btn-primary mx-1 my-1' onClick={CopyhandleOnClick}>Copy</button>
        </div>
        </div>
    </div>

    <div className="container my-3" style={{backgroundColor: props.mode==="light"?"white":"#042743", color: props.mode==="light"?"black":"white"}}>
        <h1>Your Text Summery</h1>

       
        <p>Words : <b>{text.split(/\s+/).filter((e)=>{return e.length != 0}).length}</b> ,Character : <b>{text.length}</b></p>

        <p>{text.split(" ").filter((e)=>{return e.length != 0}).length *0.008} Minutes Read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    
    </>

  )
}
