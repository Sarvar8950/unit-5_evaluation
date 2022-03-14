import React from "react";


export default function Wis() {
    var [data, setData] = React.useState("")
    var [arr, setArr] = React.useState([])

    function handel(e) {
        const {value} = e.target
        setData(value)
    }

    function add() {
        var ans = data
        setArr([...arr, ans])
        if(arr.length === 2) {
            document.getElementById("inp").style.display = "none"
            document.getElementById("add").style.display = "none"
            document.getElementById("text").style.display = "block"
        }
    }

    return (
        <>
            <h1>Wishlist</h1>
            <input type="text" value={data} id="inp" onChange={handel} />
            <button id="add" onClick={add}>ADD</button>
            <h3 id="text" style={{display:"none"}}>You can not add more than 3 items Refresh the page to add again</h3>
            {arr.map((ans,i) => <div key={i}>{ans}</div>)}
        </>
    )
}