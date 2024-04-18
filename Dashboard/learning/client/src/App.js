// import React from "react";   
import {io} from "socket.io-client";
// import {useState} from "react";
console.log("how many times..");
let socket = io("http://localhost:5000/");

export default function App() {
    // const [message, setMessage] = useState("");
    console.log("i am here..");
    socket.on("connect", () => {
        console.log(`current socket id is ${socket.id}`);
    })

    socket.on('otherMsg', (msg) => {
        console.log(`other message - ${msg}`);
    })
    function sendMessage(){
        // setMessage(document.getElementById("textMessage").value);
        socket.emit("msg", document.getElementById("textMessage").value);
        console.log(document.getElementById("textMessage").value);
    }

    return <>
        
        <input id = "textMessage" type = "text" />
        <button onClick = {sendMessage}>Send</button>
        
        <br />
        {/* <div id = "msgs" style = {{"width" : "200px", "border" : "1px solid black"}}></div>
        <br /><button onClick = {() => {document.getElementById("msgs").innerHTML = ""}}>Clear</button> */}
    </>
}