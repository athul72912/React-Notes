import React from "react";
import ReactDOM from "react-dom/client";

//the below is core react

// const heading=React.createElement("div",{id:"hello"},[
//     React.createElement("div",{id:"athul"},
//         [
//         React.createElement("div",{id:"hello1"},"hello world 1"),
//         React.createElement("div",{id:"hello2"},"hello world 2")
//         ]
//     ),
//     React.createElement("div",{id:"jas"},
//         [
//         React.createElement("div",{id:"myhello1"},"myhello world 1"),
//         React.createElement("div",{id:"myhello2"},"myhello world 2")
//         ]
//     )]);

//now we use jsx =React element
// const heading=(
// <h1 className="heading">
//     Hello Namaste React
// </h1>
// )

//React Components
//1) Fuctional Components
//2) Class components

//Functional Components
// const Fn1=()=>{
//     return <h1>Hello Fn1</h1>
// }

// const Fn2=()=>{
//   return (<h1>
// Hello Fn2 
// </h1> ) 
// }

//const Fn2=()=>(<h1>Hello Fn2</h1>)

//so we use this way the functional component
const HeadingComponent=()=>(
    <div>
        <h1>Hello Functional Component</h1>
    </div>
    
);




const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
//rendering functional component that babel understands
root.render(<HeadingComponent />)

