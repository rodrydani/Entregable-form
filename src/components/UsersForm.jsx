import React from 'react';
import { useState,useEffect } from 'react'


const UsersForm = ({addUser,selectUser,updateUser,userSelect}) => {
    
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [first_name, setFirst_name]=useState("");
    const [last_name,setLast_name]=useState("");
    const [birthday,setBirthday]=useState("");
    
   const [open, setOpen]=useState(true);

    useEffect(()=>{
    if(selectUser !==null){
        setEmail(selectUser.email);
        setPassword(selectUser.password);
        setFirst_name(selectUser.first_name);
        setLast_name(selectUser.last_name);
        setBirthday(selectUser.birthday);
    } else{
        reset();
    }
    if (userSelect){
        setOpen(!open)
       }
    },[selectUser]);

    const submit=(e)=>{
        e.preventDefault();
        const newUser ={
            id: Date.now(),
            email:email,
            password:password,
            first_name:first_name,
            last_name:last_name,
            birthday:birthday
        };
        if (selectUser){
            updateUser(newUser);
        } else {
            addUser(newUser);
        };
        reset();
    };
     const reset=()=>{
        setEmail("");
        setPassword("");
        setFirst_name("");
        setLast_name("");
        setBirthday("");
     };
     const handleClick =()=>{
        setOpen(!open)
       }
      

    return (
        <div >
           <div className={`shadow ${open ? "" : "shadow-none"}`}></div>
            <button className={`button-add ${open ? "" : "hidden"}`}  onClick={handleClick}>New User</button>
            
           <form className={`form-list ${open ? "" : "show"}`} action="" onSubmit={submit}>
            <button className='close-button'  onClick={handleClick}><i class="fa-solid fa-circle-xmark"></i></button>
            <div  className="firstName-container">
                <label  htmlFor="first_name">Name</label>
                <input 
                type="text" 
                id="first_name"
                onChange={(e)=>setFirst_name(e.target.value)}
                value={first_name}
                />
            </div>
            <div className="lastName-container">
                <label htmlFor="last_name">Last Name</label>
                <input 
                type="text" 
                id="last_name"
                onChange={(e)=>setLast_name(e.target.value)}
                value={last_name}
                />
            </div>
            <div className="email-container">
                <label htmlFor="email">email</label>
                <input 
                type="text" 
                id="email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                />
            </div>
            <div className="password-container">
                <label htmlFor="password">password</label>
                <input 
                type="password" 
                id="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                />
            </div>
            <div className="birthday-container">
                <label htmlFor="birthday">birthday</label>
                <input 
                type="date" 
                id="birthday"
                placeholder='dd/mm/yyyy'
                onChange={(e)=>setBirthday(e.target.value)}
                value={birthday}
                />
            </div>
            <button className='submit'>submit</button>
             {selectUser && (
                 <button className='cancel' type="button" onClick={() => userSelect(null)}> Cancel</button>
            ) }
             

            </form>    
        </div>
    );
};

export default UsersForm;