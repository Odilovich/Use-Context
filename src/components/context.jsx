import { createContext, useState } from "react";

export const ContextCounter = createContext([])


    function changeCount({children}){
         const [counters, setCounters] = useState({

            A: 0,
            B: 0,
            C: 0,
            D: 0
            
         });

         return (
            <ContextCounter.Provider value={{counters, setCounters}}>
               {children}
            </ContextCounter.Provider>
         )
    }

export default changeCount;

