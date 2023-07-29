import React, { useState } from "react";
const Myform = () => {
  const [name, setname] = useState("");
  // console.log(name);

  const submitbutton = (events) => {
    // alert("it is working");
    events.preventDefault();
    // alert(`the form name was ${name} submitted`);
    console.log(`the form name was ${name} submitted`);
  };

  const [textarea, setTextarea] = useState(
    "hello your contents in here only"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value);
    console.log(textarea);
  }

  return (
    <>
      <h3>My form in the reactjs</h3>
      <form onSubmit={submitbutton}>
        <div>
          <input type="text" onChange={(e) => setname(e.target.value)} />
          <br />
          <br />
          <textarea onChange={handleChange} value={textarea}/> <br />
          <br />
          <input type="submit" />
        </div>
      </form>
    </>
  );
};

export default Myform;
