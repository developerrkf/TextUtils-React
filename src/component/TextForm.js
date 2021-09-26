import React, {useState} from 'react'

export default function TextForm(props) {   
    const handleUpClick = ()=> {
        //console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text is converted in the Uppercase","success");
    }
    const handleUpClicklow = ()=> {
        let newLowText = text.toLowerCase();
        setText(newLowText);
        props.showAlert("Text is converted in the Lowercase","success");
    }
    const handleOnChange = (event)=> {
        //console.log("Uppercase on change");
        setText(event.target.value);
    }
    const handleUpCleartext = ()=> {
        let cleartext = " ";
        setText(cleartext);
        props.showAlert("Text is clear","success");
    }
    const [text, setText] = useState('');
   // setText("New text valus");

     let myStylecolor = {
        color: props.setthemeMode == 'danger'?'white':'black',
        //opacity: props.mode == 'dark'?'0.5': '1',
    }


    return (
        <>
            <div className="container"style={{color: props.mode==='dark'?'white':'black'}} >
                <h1>{props.heading}</h1> 
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Example textarea</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'grey':'white',
                    color: props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercasae</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleUpClicklow}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpCleartext}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1 >Your text summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length } Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
            </div>
        </>
    )
}
