import React from 'react';
import { useState } from 'react';


const UsersList = ({userList,deleteUser,userSelect}) => {
    return (
        
            <ul className="user-map">
                {
                userList.map((info)=>(
                       <li style={{color:"rgb(105, 101, 101)"}} className='li-container' key={info.id}>
                         <h3>{info.first_name}{" "}{info.last_name} </h3>
                         <div >
                            <b>email:{""}</b>
                            {info.email}
                         </div>
                         <div>
                            <b>Birthday:{""}</b>
                            {info.birthday}
                         </div>
                         <div className="button">
                         <button style={{maxWidth:"100px", background:"red", border:"none",borderRadius:"3px",cursor:"pointer"}} onClick={()=>deleteUser(info.id)}><i style={{color:"white", padding:"4px"}} class="fa-regular fa-trash-can"></i></button>
                         <button style={{maxWidth:"100px", background:"bisque", border:"none",borderRadius:"3px",cursor:"pointer"}}  onClick={()=>userSelect(info)}><i style={{color:"black", padding:"4px"}} class="fa-regular fa-pen-to-square"></i></button>
                         </div>
                         
                       </li>
                ))

                }

            </ul>
        
    );
};

export default UsersList;
