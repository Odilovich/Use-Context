import { useContext, useState} from 'react'
import { ContextCounter } from './context'

export default function hello(props) {
  const {counters} = useContext(ContextCounter)
  const [count, setCount] = useState(0)
  
  return (
    <div className='border-2 border-[#78f141] w-[200px] px-3 py-2 gap-3 rounded-[12px] '>
       <h1 className=' flex font-bold text-[20px] justify-center'>{props.title} component</h1>
       <p className='flex text-[#c74d4d] justify-center font-medium text-[18px] mb-2'>Count: {count + counters[props.title]}</p>
       <div className='flex gap-[20px] justify-center'>
         <button className='py-[6px] px-[16px] bg-[#78f141] text-[#fff] font-semibold active:bg-[#beb7b7] rounded-xl' onClick={() =>setCount(count - 1)}>-</button>
         <button className='py-[6px] px-[16px] bg-[#517c3c] text-[#fff] font-semibold active:bg-[#beb7b7] rounded-xl' onClick={() => setCount(count + 1)}>+</button>
       </div>
    </div>
  )
}
