import React, {useState} from 'react'

function InputForm() {
    const [form, setForm] = useState({ 
        firstName: 'Luke', 
        lastName: 'Jones', 
        email: 'lukeJones@sculpture.com', 
      }); 
      return ( 
        <> 
          <label> 
            First name: 
            <input 
              value={form.firstName} 
              onChange={e => { 
                setForm({ 
                  ...form, 
                  firstName: e.target.value 
                }); 
              }} 
            /> 
          </label> 
          <br />
          <label> 
            Last name: 
            <input 
              value={form.lastName} 
              onChange={e => { 
                setForm({ 
                  ...form, 
                  lastName: e.target.value 
                }); 
              }} 
            /> 
          </label>
          <br /> 
          <label> 
            Email: 
            <input 
              value={form.email} 
              onChange={e => { 
                setForm({ 
                  ...form, 
                  email: e.target.value 
                }); 
              }} 
            /> 
          </label> 
          <p> 
            {form.firstName}
            {form.lastName}
            ({form.email})
          </p> 
        </> 
      ); 
}

export default InputForm