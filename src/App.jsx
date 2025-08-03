import {  useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput.jsx";
import  Results  from "./components/Results";
function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 122000,
    expectedReturn: 12,
    duration: 10,
  });
     function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  const isValid=userInput.duration >= 1;

  return (
  <>
   <Header/>
   <UserInput userInput={userInput} onChange={handleChange}/>
   {!isValid && <p className='center'>Please enter duration is greater than zero</p>}
   {isValid && <Results input={userInput}/>}
   </>
  )
}

export default App
