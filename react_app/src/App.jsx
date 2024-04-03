import { useState } from 'react'
import avatar from "./assets/No_avatar.png"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <form onSubmit={() => {}} >

        <label htmlFor='file-upload' className='custom-file-upload'>

          <img src={avatar} alt="" />

        </label>

        <input 
          type="file"
          label="ProfilePic"
          name="myFile"
          id="file-upload"
          accept=".jpeg, .png, .jpg"
        />

        <h3>Moses Adewolu</h3>

        <span>Designer</span>

        <button> Login </button>

        <button> Submit </button>

      </form>
    </div>
  )
}

export default App
