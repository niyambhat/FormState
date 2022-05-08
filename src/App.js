import './App.css';
import React, { useState } from 'react';


function App() {
  //login form
const [formState, setFormState] = useState({});
const handleChange = ({target})=>{
  console.log(target)
  const {name, value} = target;
  setFormState((prev)=>(
    //using computed properties here
    // http://eloquentcode.com/computed-property-names-in-javascript
    {...prev,
      [name]:value
    }
  ))
}

return(
  <div>
    <form>
      <input type="email" name="email" onChange={handleChange}/>
      <input type="password" name="password" onChange={handleChange}/>
    </form>
  </div>
)
  
}

export default App;
