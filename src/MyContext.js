import React, { createContext, useState } from 'react'
export const myContext = createContext()
function MyContext({ children }) {
    const [count, setcount] = useState(0);
    const [data, setdata] = useState(0);

    const addCount = () => {
        setcount(count + 1);
    };
    const addData = () => {
        setdata(data + 1)
    };
    return (
        <>
            <myContext.Provider value={{ count, data, addCount, addData }}>
                {children}
            </myContext.Provider>
        </>
    )
}

export default MyContext