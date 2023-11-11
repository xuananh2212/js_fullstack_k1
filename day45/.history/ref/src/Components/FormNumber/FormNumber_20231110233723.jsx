import React, { useLayoutEffect, useState } from 'react'
import './FormNumber.scss'

export default function FromNumber() {
     const [value, setValue] = useState("");
     const handleChange = (e) => {
          setValue(e.target.value);
     }
     const handleKeyDown = (e) => {
          ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
     }
     const handleSubmit = (e) => {
          e.preventDefault();
          if (value) {

          }
     }
     useLayoutEffect(() => {
          const regexNumber = /^[0-9]{1,2}$/;
          if (value && +value !== 0) {
               if (regexNumber.test(value)) {
                    setValue(value)
               } else {
                    const valueNew = Math.floor(value / 10);
                    setValue(valueNew)
               }
          } else {
               setValue("");
          }
     }, [value])
     return (
          <form
               action=""
               className='form-number'
               onSubmit={handleSubmit}
          >
               <div className="form-group">
                    <label htmlFor="number-random">
                         Hãy thử nhập một số
                         <input
                              min={1}
                              max={99}
                              type="number"
                              value={value}
                              id='number-random'
                              placeholder='Thử nhập một số'
                              onChange={handleChange}
                              onKeyDown={handleKeyDown}

                         />
                    </label>
               </div>
               <div className="form-group">
                    <button className='btn btn-check'>Kiểm tra</button>
               </div>

          </form>
     )
}
