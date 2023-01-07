import React, { useEffect, useContext } from "react";
import { myContext } from "../MyContext";
import CardsData from "./CardsData";
function MyUseEffect() {
    const { count, data, addCount, addData } = useContext(myContext)
    useEffect(() => {
        alert("Data is " + data)
    }, [data])
    useEffect(() => {
        alert("Count is " + count)
    }, [count])
    return (
        <>
            <div className="container mt-3">
                <h1>Count: {count}</h1>
                <h1>Data: {data}</h1>
                <button className="btn btn-dark" onClick={() => addCount()} > Update Count</button>
                <button className="btn btn-dark ms-2" onClick={() => addData()} > Update Data</button>
                <div className="row mt-5">
                    {CardsData.map((value) => {
                        return (
                            <div key={value.id} className="col-4">
                                <img className="w-100" src={value.img} alt="img" />
                                <h2 className="mt-3">{value.para}</h2>
                                <p>{value.disc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default MyUseEffect