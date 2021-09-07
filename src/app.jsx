import React, {useState} from 'react'
import LeftPanel from "./components/leftPanel";
import Operators from "./components/operators";

function App() {
  let [result, setResult] = useState('0')
  const onClickElement = (numberValue) => {
      if(result === '0' || result === 'ERROR') {
          setResult((result = ''))
      }
      setResult(result + numberValue)

      if(numberValue === 'AC') {
          setResult(0)
      }
  }

  const onClickOperator = (operatorValue) => {
      if(result === '0' || result === 'ERROR') {
          setResult((result = ''))
      }
      setResult(result + operatorValue)
  }

  const calculatingResult = () => {

      if(result === 'NaN') {
          setResult((result = 'ERROR'))
      }

      if(result.includes('+')) {
         let res = String(result.split('+').reduce((a, b) => Number(a) + Number(b)))
          if(res === 'NaN') {
              setResult((result = 'ERROR'))
          } else {
              setResult(res)
          }
      }
      if(result.includes('-')) {
          let res = String(result.split('-').reduce((a, b) => Number(a) - Number(b)))
          if(res === 'NaN') {
              setResult((result = 'ERROR'))
          } else {
              setResult(res)
          }
      }
      if(result.includes('*')) {
          let res = String(result.split('*').reduce((a, b) => Number(a) * Number(b)))
          if(res === 'NaN') {
              setResult((result = 'ERROR'))
          } else {
              setResult(res)
          }
      }
      if(result.includes('/')) {
          let res = String(result.split('/').reduce((a, b) => Number(a) / Number(b)))
          if(res === 'NaN' || res === 'Infinity') {
              setResult((result = 'ERROR'))
          } else {
              setResult(res)
          }
      }
  }
  return (
   <>
       <div className="calculator">
           <div className="input">
               {result}
            </div>
           <div className="buttons">
               <Operators
                   elementValues = {['+', '-', '*', '/']}
                   onClickOperator={onClickOperator}
               />
               <LeftPanel onClickElement={onClickElement}/>
               <div className="equal"
                   onClick={() => calculatingResult()}
               >=</div>
           </div>
       </div>
   </>
  );
}

export default App;
