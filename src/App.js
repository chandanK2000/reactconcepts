import React, { useState } from "react";
import Classcomponents from "./Classcomponents";
import Props from "./props";
import Myform from "./Myform";
import Memo from "./Memo";
function App() {
  const carInfo = { name: "Ford", model: "Mustang" };

  const [count, setcount] = useState(0);
  const [data, setdata] = useState(100);
  return (
    <div className="m-4">
      {/* <Props name="chandan kumar" /> */}
      <Props brands={carInfo} />
      <Classcomponents />
      <Myform />
      <Memo data={data} />
      <p> {count}</p>
      <button onClick={() => setcount(count + 1)} className="btn btn-primary">
        count
      </button>
      {/* <button onClick={()=>setdata(data+1)}>data</button> */}
    </div>
  );
}

export default App;
