import { useState } from "react"
import Header from "./components/Header"
import NewsBoard from "./components/newsboard"
function App() {
   const [category,setCategory]=useState("general")

  return (
    <>
    
    <Header setCategory={setCategory}></Header>
    <NewsBoard category={category}></NewsBoard>
    </>
  )
}

export default App
