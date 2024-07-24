import { useState } from 'react'
import { InputBox } from './Components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
   const [amount,setAmount]=useState(0)
   const [from,setFrom] = useState("usd")
   const [to,setTo]=useState("inr")
   const[convertedAmount,setConvertedAmount]=useState(0)//for conversion

   const currencyInfo = useCurrencyInfo(from)  //obviously we pass value (from ) the currency we want to convert
  //this custom hook return data from API
  //The API contains data in form of K-V Pair for eg "usd" : 82.09
  //we want to give options to users that like usd,inr etc
  const currencyTypes=Object.keys(currencyInfo)
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setConvertedAmount(convertedAmount)
  }

  const convert =()=>{
    setConvertedAmount(amount * currencyInfo[to]) 
  }
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://imgs.search.brave.com/CeoUFBoxV5uqbsqvvN8BS1DoKRG7FfKZpPpxRwuAA7s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzQxLzY2LzI3/LzM2MF9GXzE0MTY2/MjcwMl9TY1VJQ2VW/M1cyMEtNaER0NUl2/OHVwTUpuMkN2OG1U/US5qcGc')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();  //to prevent form submiting
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={currencyTypes}
                            onCurrencyChange={(currency)=>setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount)=>setAmount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                             label="To"
                             amount={convertedAmount}
                             currencyOptions={currencyTypes}
                             onCurrencyChange={(currency)=>setTo(currency)}
                             selectCurrency={from}
                             amountDisable
                            
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
