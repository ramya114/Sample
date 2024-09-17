import React, {useState, useEffect ,useRef} from "react";
import  ReactDOM from "react-dom";

// function College()
// {
//     const [count,setCount]=useState(10);
//     const [value,setValue]=useState(5);
//     const [temp,setTemp]=useState(100);
//     const change=()=>{
//         setValue(value+1);
//     }
//     const changetemp=()=>{
//         setTemp(temp+1);
//     }
//     useEffect(()=>
//     {
//         setCount(count=>count+1);
//     },[value,temp])
//     return (
//         <>
//         <h4>current count is {count}</h4>
//         <h4>current value is {value}</h4>
//         <button onClick={change}>value</button>
//         <h4>current value is {temp}</h4>
//         <button onClick={changetemp}>temp</button>
//         </>
//     )
// }



// function College()
// {
//     const [count,setCount]=useState(10);
//     const value=useRef(5);
//     console.log(value);
//     useEffect(()=>{
//         value.current=value.current+1;
//     })
//     return (
//         <>
//         <h4>current count is {count}</h4>
//         <h4>current value is {value.current}</h4>
//         <button onClick={()=>setCount(count+1)}>+</button>
//         </>
//     )
// }


function College()
{
    const ele=useRef();
    const change=()=>{
        console.log(ele.current);
        ele.current.style.background="pink";
    }
   return(
    <>
    <input type="text" ref={ele}/>
    <button onClick={change}>Click here</button>
    </>
   )
}
const root=ReactDOM.createRoot(document.getElementById('candy'));
root.render(<College />)