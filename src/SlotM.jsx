import React from "react";


const Matching = (props)=>{
    let a = props.a;
    let b = props.b;
    let c = props.c;
    return (
        <>
          <div>
            <h1>{a}{b}{c}</h1>
            <h1>This is matching</h1>
          </div>
        </>
      );
}

const NotMatching = (props)=>{
    let a = props.a;
    let b = props.b;
    let c = props.c;
    return (
        <>
          <div>
          <h1>{a}{b}{c}</h1>
            <h1>This is not matching</h1>
          </div>
        </>
      );
}
const SlotM = (props)=>{
  let x = props.x;
  let y = props.y;
  let z = props.z;
    <>
    {((x===y) && (y===z)) ?  <Matching a={x} b={y} c={z}/> : <NotMatching a={x} b={y} c={z} />}
    </>
}

export default SlotM;