const heading=React.createElement("div",{id:"hello"},[
    React.createElement("div",{id:"athul"},
        [
        React.createElement("div",{id:"hello1"},"hello world 1"),
        React.createElement("div",{id:"hello2"},"hello world 2")
        ]
    ),
    React.createElement("div",{id:"jas"},
        // [
        // React.createElement("div",{id:"myhello1"},"myhello world 1"),
        // React.createElement("div",{id:"myhello2"},"myhello world 2")
        // ]
    )]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);