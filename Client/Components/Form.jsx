import React, { useState } from 'react'

function Form () {
  const [formData, setFormData] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newColour, setNewColour] = useState('')
  const [newAnimal, setNewAnimal] = useState('')


  const colours = ['Blue', 'Green', 'Red', 'Black', 'Brown']

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setFormData({
      email: newEmail,
      password: newPassword,
      colour: newColour,
      animal: newAnimal
    })
  }

  const handleEmailChange = (evt) => {
    console.log(evt.target.value)
    setNewEmail(evt.target.value)
  }
  const handlePasswordChange = (evt) => {
    console.log(evt.target.value)
    setNewPassword(evt.target.value)
  }

  const handleColourChange = (evt) => {
    console.log(evt.target.value)
    setNewColour(evt.target.value)
  }

  // const { email, password, colour, animal } = formData

return (
  <div className="base add-contact add">
  <h1>Contact Form</h1>
  <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor='email' >Email:</label>
          <input name='email'  value={newEmail} type='text' onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor='password' >Password:</label>
          <input name='password' value={newPassword} type='text' onChange={handlePasswordChange} />
        </div>
        <div>
        <label htmlFor='colour'>Colour </label>
        <select onChange={handleColourChange}>
        <option value="" selected disabled hidden >Click here!</option>
          {
        colours.map((colour) => {
          return <option key={colour}>{colour}</option>
          })
        }
        </select>
        </div>
        <button OnClick={console.log(formData)}>Submit!</button>
      </form>
  </div>
)
}

export default Form
