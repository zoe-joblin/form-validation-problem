import React, { useState } from 'react'

function Form () {
  const [formData, setFormData] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newColour, setNewColour] = useState('')
  const [newAnimal, setNewAnimal] = useState('')
  const [ifTiger, setIfTiger] = useState(false)
  const [tigerType, setTigerType] = useState('')


  const colours = ['Blue', 'Green', 'Red', 'Black', 'Brown']
  // const animals = ['Bear', 'Tiger', 'Snake', 'Donkey']

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setFormData({
      email: newEmail,
      password: newPassword,
      colour: newColour,
      animal: newAnimal,
      tigerType: tigerType
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
  const handleAnimalChange = (evt) => {
    if(evt.target.value == "Tiger") {
      setIfTiger(true)
    }
    setNewAnimal({
          selectedOption: evt.target.value
        })
  }
  const handleTigerType = (evt) => {
    console.log(evt.target.value)
    setTigerType(evt.target.value)
  }

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
        <label htmlFor='colour'>Colour: </label>
        <select onChange={handleColourChange}>
        <option value="" selected disabled hidden >select a colour</option>
          {
        colours.map((colour) => {
          return <option key={colour}>{colour}</option>
          })
        }
        </select>
        </div>

        <div>
          <label htmlFor='animal'>Animal: </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Bear"
                checked={newAnimal.selectedOption === "Bear"}
                onChange={handleAnimalChange}
              />
              Bear
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Tiger"
                checked={newAnimal.selectedOption === "Tiger"}
                onChange={handleAnimalChange}
              />
              Tiger
            </label>
          </div>
          {ifTiger ? 
            <div>
              <label htmlFor='tigerType' >Type of Tiger:</label>
              <input name='tigerType' value={tigerType} type='text' onChange={handleTigerType} required />
            </div>
          : null}
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Snake"
                checked={newAnimal.selectedOption === "Snake"}
                onChange={handleAnimalChange}
              />
              Snake
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Donkey"
                checked={newAnimal.selectedOption === "Donkey"}
                onChange={handleAnimalChange}
              />
              Donkey
            </label>
          </div>
        </div>
       




        <button onClick={console.log(formData)}>Submit!</button>
      </form>
  </div>
)
}

export default Form


{/* <select onChange={handleAnimalChange}>
<option value="" selected disabled hidden >select an animal</option>
  {
animals.map((animal) => {
  return <option key={animal}>{animal}</option>
  })
}
</select> */}
