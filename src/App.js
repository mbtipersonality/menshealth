import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    const randSearch = search[Math.floor(Math.random() * 2997 )]
    
    window.location = `https://www.google.com/search?q=site%3Arobinhood.com+${randSearch}&sca_esv=88aa776b28e671aa&sca_upv=1&ei=1-sXZszVMPjQseMPxMyB0A4&ved=0ahUKEwiMnbaTqLqFAxV4aGwGHURmAOoQ4dUDCBA&uact=5&oq=site%3Arobinhood.com+a&gs_lp=Egxnd3Mtd2l6LXNlcnAiFHNpdGU6cm9iaW5ob29kLmNvbSBhSIrBB1CnwAdYp8AHcAN4AJABAJgBAKABAKoBALgBA8gBAPgBAZgCAKACAJgDAIgGAZIHAKAHAA&sclient=gws-wiz-serp`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
