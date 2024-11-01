import axios from 'axios'
import React, { useEffect, useState } from 'react'



const UserList = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const request = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(request.data)  
        setUsers(request.data)  
    }

    useEffect ( () => {
        getUsers();
    }, [])

  return (

    <div className='w-100 bg-slate-50 m-10 rounded p-10  '>
        <table className='mx-auto w-[726px]'>
            <thead className='bg-blue-400 py-5 text-white font-semibold'>
                <tr>
                    <td >nom</td>
                    <td>prenom</td>
                </tr>

            </thead>
            <tbody>

        
            {
                users && users.map( (user, index) => {
                    return (
                        <tr className='border-b-2 py-2' index = {index}>
                             <td>
                                {user.name}
                            </td>
                            <td>
                                {user.username}
                            </td>
                        </tr>

                    )
                })
            }
            </tbody>

        </table>
    </div>
  )
}

export default UserList