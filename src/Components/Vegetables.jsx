import React from "react"

function Veg() {
    const [tom, setTom] = React.useState(10)
    const [pot, setPot] = React.useState(8)
    const [car, setCar] = React.useState(5)
    const [oni, setOni] = React.useState(7)

    function add1(a) {
        setTom(tom + a)
    }
    function add2(a) {
        setPot(pot + a)
    }
    function add3(a) {
        setCar(car + a)
    }
    function add4(a) {
        setOni(oni + a)
    }
    return (
        <>
            <br />
            <br />
            <br />
            <hr />
            <h2>Tomato - {tom} Kgs</h2>
            <button onClick={() => add1(1)}>+</button>
            <button onClick={() => add1(-1)}>-</button>
            <h2>Potatoes - {pot} Kgs</h2>
            <button onClick={() => add2(1)}>+</button>
            <button onClick={() => add2(-1)}>-</button>
            <h2>Carrots - {car} Kgs</h2>
            <button onClick={() => add3(1)}>+</button>
            <button onClick={() => add3(-1)}>-</button>
            <h2>Onions - {oni} Kgs</h2>
            <button onClick={() => add4(1)}>+</button>
            <button onClick={() => add4(-1)}>-</button>
        
        </>
    )
}

export default Veg