import React, { useContext } from 'react'
import Counter from './counts'
import { ContextCounter } from './context'

export default function contextWrapper() {
  const {counters, setCounters} = useContext(ContextCounter)
  return (
    <>
        <div className='w-full px-4 py-4 flex justify-center gap-[30px] mb-[40px] border-b-2 border-[#fb4444] '>
          <button className='py-[12px] px-[24px] bg-[#43dae5] text-white font-bold active:bg-[#ebdede] rounded-[10px]' onClick={() => setCounters({A: counters.A - 1, B:counters.B - 1, C:counters.C - 1, D: counters.D - 1})}>-</button>
          <button className='py-[10px] px-[22px] bg-[#ff3b3b] text-white font-bold active:bg-[#40b6f9] rounded-[10px]' onClick={() => setCounters({A: counters.A + 1, B:counters.B + 1, C:counters.C + 1, D: counters.D + 1})}>+</button>
        </div>

      
        <div className='flex justify-center gap-[100px]'>
          <div>
              <Counter title={"A"}/>
              <Counter title={"B"}/>
          </div>
          <div>
              <Counter title={"C"}/>  
              <Counter title={"D"}/>
          </div>
        </div>
    </>
  )
}
