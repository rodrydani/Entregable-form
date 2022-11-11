import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios";
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';


function App() {
  const [userList,setUserList]=useState([]);
  const [selectUser, setSelectUser]=useState(null);

  useEffect (()=>{
        axios.get(`https://users-crud1.herokuapp.com/users/`)
        .then((res)=>setUserList(res.data));
  },[])

 const getUser =()=>{
  axios.get(`https://users-crud1.herokuapp.com/users/`)
  .then((res)=>setUserList(res.data));
 }

 const addUser =(newUser)=>{
  axios.post(`https://users-crud1.herokuapp.com/users/`,newUser)
  .then(()=>getUser())
  .catch(error=>console.log(error.response?.data));
 }

 const deleteUser =(id)=>{
  axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
  .then(()=>getUser());
 }

 const userSelect=(info)=>{
  setSelectUser(info)
 }

 const updateUser =(editedUser)=>{
  axios.put(`https://users-crud1.herokuapp.com/users/${selectUser.id}/`,editedUser)
  .then(()=>getUser())
   setSelectUser(null);
 }

  return (
    <>
   <h1 className='users-tittle'><b>Users:</b></h1>
    <div className="App">
   
        <UsersList
      userList={userList}
      deleteUser={deleteUser}
      userSelect={userSelect}
      />
      <div>
      <UsersForm 
      addUser={addUser}
      selectUser={selectUser}
      updateUser={updateUser}
      userSelect={userSelect}
 
      />
      </div>
    </div>
    </>
  )
}

export default App
