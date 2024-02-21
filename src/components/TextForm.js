import React,{useState} from "react";


export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () =>{
        let upperCaseText = text.toUpperCase();
        setText(upperCaseText);
        if(text === ""){
          props.showAlert("Text area empty!","warning");
        }else{
          props.showAlert("Text has been converted to upper case!","success");
        }
        
    }
    const handleLoClick =() => {
        let lowerCaseText = text.toLowerCase();
        setText(lowerCaseText);
        if(text === ""){
          props.showAlert("Text area empty!","warning");
        }else{
        props.showAlert("Text has been converted to lower case!","success");
        }
    }
    const handleClearText = () => {
        setText("");
        if(text === ""){
          props.showAlert("Text area empty!","warning");
        }
    }
    const handleCopyText = () => {
        let entireText = document.getElementById("myBox");
        entireText.select();
        navigator.clipboard.writeText(entireText.value);
        if(text === ""){
          props.showAlert("Text area empty!","warning");
        }else{ 
        props.showAlert("Copied to clipboard!","success");
        }
    }
    const handleRemoveSpaces = () => {
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        if(text === ""){
          props.showAlert("Text area empty!","warning");
        }else{
        props.showAlert("Extra spaces removed!","success");
        }
    }
    const wordCount = () => {
        if(text.trim() === ''){
            return 0;
        } else {
            return text.trim().split(/\s+/).length;
        }
    }
    const calculateTimeToRead = () => {
        const wordsPerMinute = 20; // Average reading speed in words per minute
        const minutesToRead = wordCount() / wordsPerMinute;
        return minutesToRead.toFixed(2); // Return minutes rounded to two decimal places
    }

    const [text,setText] = useState("");
  return (
    <>
    <div className="textArea">
      <div className="mb-3">
        <h3 style={{color: props.mode==='light'? '#198754':'#53d79a'}}>{props.heading}</h3>
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='light'? 'white':'#333b37',color: props.mode==='light'? 'black':'white'}} onChange={handleOnChange} id="myBox" cols="30" rows="10"></textarea>
      </div>
      <button type="button" onClick={handleUpClick} className="btn btn-success mx-1">
        Convert to Upper Case
      </button>
      <button type="button" onClick={handleLoClick} className="btn btn-success mx-1">
        Convert to Lower Case
      </button>
      <button type="button" onClick={handleClearText} className="btn btn-success mx-1">
        Clear Text
      </button>
      <button type="button" onClick={handleCopyText} className="btn btn-success mx-1">
        Copy Text
      </button>
      <button type="button" onClick={handleRemoveSpaces} className="btn btn-success mx-1">
        Remove extra spaces
      </button>
    </div>

    <div className="container my-3 ">
        <h5><span style={{color: props.mode==='light'? '#198754':'#53d79a'}}>Your Text Summary:</span> <span style={{color: props.mode==='light'? 'black':'white'}}>Your text has {wordCount()} words and {text.length} characters.</span></h5>
    </div>

    <div className="container my-3 ">
        <h5><span style={{color: props.mode==='light'? '#198754':'#53d79a'}}>Average minutes to read:</span> <span style={{color: props.mode==='light'? 'black':'white'}}>Your text can be read in approximately {calculateTimeToRead()} minutes.</span></h5>
    </div>

    <div className="container">
        <h5><span style={{color: props.mode==='light'? '#198754':'#53d79a'}}>Preview:</span></h5>
        <p style={{color: props.mode==='light'? 'black':'white'}}>{text===''?'(Enter some text in the above text area to preview it here)':text}</p>
    </div>

    </>
  );
}
