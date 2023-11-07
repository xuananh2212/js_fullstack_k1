
import { useAuth0 } from '@auth0/auth0-react'

import "./Logout.css"
import Profile from '../Profile/Profile';
export default function Logout() {
     const { logout, isAuthenticated } = useAuth0();
     return (
          isAuthenticated && (
               <div
                    className='log-out'
                    style={{ padding: 10, border: "1px solid #333", borderRadius: 12, flex: 1 }}>
                    <div>
                         <Profile />

                         <form className='form-sendEmail'>
                              <div className="form-group">
                                   <input type="text" />
                                   <textarea name="" id="" cols="30" rows="10"></textarea>

                              </div>
                              <div className="form-group">
                                   <button
                                        className='btn btn-send'
                                        onClick={() => logout()}
                                   >gửi</button>
                              </div>
                         </form>
                    </div>
                    <button
                         className='btn btn-logout'
                         onClick={() => logout()}
                    >Đăng Xuất</button>
               </div>

          )

     )
}
