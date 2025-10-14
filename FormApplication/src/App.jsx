import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState('')
  const [errors, setErrors] = useState({})
  

  const handleForm = (event) => {
    event.preventDefault();

    if (!validate()) return 

    alert(`Submitted: ${name} ${email} ${consent}`)
  }

  const validate =() => {
    const newErrors = {}
    if (!name) {
      alert('PLEASE! Enter your name')
      newErrors.name = 'No name input'
    }

    if (!email) {
      alert('POR FAVOR! Enter an email')
      newErrors.email = 'No email input'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0 
  }

  const handleChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    console.log(event.target.value)
    setEmail(event.target.value);
  }

  const handleConsent = (event) => {
    console.log(event.target.value)
    setConsent(event.target.value);
  }

  

  return (
    <>
    <form onSubmit={handleForm}>
      <div>
        <label>Enter Name: </label>
        <input type="text" value={name} onChange={handleChange} />
        <label>Enter Email: </label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <label>Are you ok with the destructurelization & restructurelization of all of your atoms?: </label>
        <input type="checkbox" value={consent} onChange={handleConsent} />
        <button type="submit">Submit</button>
      </div>
    </form>
    </>
  )

  
}

export default App

