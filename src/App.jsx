import ContextWrapper from './components/wrapper'
import MyContext from './components/context'

function App() {
  return (
    <>
       <MyContext>
         <div className='flex justify-center'>
            <div className=' border-[3px] border-[#f58e19ee] px-4 py-3 mt-[100px] rounded-[12px]'>
                <ContextWrapper/>
            </div>            
         </div>
       </MyContext>
    </>
  )
}

export default App
