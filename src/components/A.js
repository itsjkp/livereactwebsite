import React, { createContext } from 'react'
import B from './B'
export const firstName = createContext()
export const lastName = createContext()
const A = () => {
    return (
        <div>
            <firstName.Provider value={"Jitendra"}>
                <lastName.Provider value={"Pal"}>
                    <B />
                </lastName.Provider>
            </firstName.Provider>
        </div>
    )
}

export default A
