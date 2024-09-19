import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Form } from './form'

function App() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className='app'>
      <div className='form-container'>
        <Form formData={formData} handleChange={handleChange} />
      </div>
      <div className='cv-container'>
        <CV formData={formData} />
      </div>
    </div>
  )
}

export default App
