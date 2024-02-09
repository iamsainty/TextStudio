import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, newtext] = useState("Your text goes here");
    const uppercase = () => {
        let uppertext = text.toUpperCase();
        newtext(uppertext);
        props.setmsg("Text converted in upeercase", "success");
    }
    const lowercase = () => {
        let lowercase = text.toLowerCase();
        newtext(lowercase);
        props.setmsg("Text converted in lowercase", "success");
    }
    const clear = () => {
        let cleartext = "";
        newtext(cleartext);
    }
    const handlechange = (event) => {
        newtext(event.target.value);
    }

    return (
        <>
        <div  style={{color: props.mode==='dark'?'white':'#232D3F'}}>
            <div>
                <h2 >{props.heading}</h2>
                <div className="mb-3">
                    <textarea placeholder='Your text goes here' className="form-control my-4" value={text} onChange={handlechange} style={{color: props.mode==='dark'?'white':'#232D3F', backgroundColor: props.mode==='light'?'white':'#232D3F'}} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-2" onClick={uppercase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={lowercase}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-2" onClick={clear}>Clear</button>
            </div>
            <div className="stats">
                <h2>Statistics</h2>
                <p className="words">Number of words : {text.split(" ").length}</p>
                <p className="letters">Number of letters : {text.length}</p>
                <p className="avgtime">Time to read the text : {0.008*(text.split(" ").length-1)} minutes</p>
            </div>
            </div>
        </>

    )
}
