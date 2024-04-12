import './App.css'
import React from 'react'
import search from './search'

function App() {
  const handleClick = () => {
    const randSearch = search[Math.floor(Math.random() * 2997 )]
    
    window.location = `https://www.google.com/search?q=site%3Aeatthis.com+${randSearch}&sca_esv=12fe31487ad231eb&sca_upv=1&ei=GSYZZpnDJqHh4-EP0uuSqAc&ved=0ahUKEwjZs_Ls07yFAxWh8DgGHdK1BHUQ4dUDCBA&uact=5&oq=site%3Aeatthis.com+a&gs_lp=Egxnd3Mtd2l6LXNlcnAiEnNpdGU6ZWF0dGhpcy5jb20gYUi1vQhQAFgAcAJ4AJABAJgBAKABAKoBALgBA8gBAJgCAKACAJgDAIgGAZIHAKAHAA&sclient=gws-wiz-serp`
  }
  return (
    <div className='App' onClick={handleClick}>
      <h1>Click Anywhere</h1>
    </div>
  )
}

export default App
