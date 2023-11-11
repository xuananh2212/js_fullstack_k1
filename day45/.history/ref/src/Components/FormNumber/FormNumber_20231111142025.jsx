import { useLayoutEffect, useRef, useState } from 'react'
import useSelector from '../../Core/useSelector';
import { toast } from 'react-toastify';
import './FormNumber.scss'

export default function FromNumber() {
     const [value, setValue] = useState("");
     const arrayItem = useRef([]);
     const input = useRef();
     const numberRandom = useRef(Math.floor(Math.random() * 99) + 1);
     const { state: { remaining, listPlays }, dispatch } = useSelector();
     const handleChange = (e) => {
          setValue(e.target.value);
     }
     const handleKeyDown = (e) => {
          ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
     }
     window.addEventListener("keydown", (e) => {
          if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(+e.key)) {
               input.current.focus();
          }
     });
     const handleResetArrayItem = () => {
          console.log(arrayItem.current);
          const arrayNew = JSON.parse(JSON.stringify(listPlays))
          arrayNew.unshift(arrayItem.current);
          dispatch({
               type: "listPlays/add",
               payLoad:
                    arrayNew

          });
          arrayItem.current = [];
     }
     const handleSubmit = (e) => {
          console.log(numberRandom.current);
          e.preventDefault();
          if (value && +value !== 0) {
               if (+value === numberRandom.current) {
                    toast.success(`chúc mừng bạn đã nhập đúng số cần tìm là: ${numberRandom.current}`);
                    dispatch({ type: "remaining/decrease", payLoad: 1 });
                    arrayItem.current.push(value);
                    handleResetArrayItem();

               } else {
                    if (+value < numberRandom.current) {
                         toast.warning("bạn cần tăng 1 chút!")
                    } else {
                         toast.warning("bạn cần giảm 1 chút!");
                    }
                    dispatch({ type: "remaining/decrease", payLoad: remaining });
                    arrayItem.current.push(value);
               }

               setValue('');
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

     useLayoutEffect(() => {
          if (remaining === 0) {
               handleResetArrayItem();
          }

     }, [remaining])



     return (
          <form
               className='form-number'
               onSubmit={handleSubmit}
          >
               <div className="form-group">
                    <label htmlFor="number-random">
                         Hãy thử nhập một số
                         <input
                              ref={input}
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
