import { createContext, useContext, useEffect, useState } from "react"
import Child2 from "./Child2"


type User = {
    id:string,
    name:string,
    age:number
}

type ContextType = {
    users: User[],
    addUser: (user: {name:string, age:number}) => void
}

const Context = createContext<ContextType | null>(null);


export function useUsers() {
    const usersContext = useContext(Context);
    if(usersContext == null) {
       throw new Error("Must use within provider") 
    }
    return usersContext;
}

const ContextApp = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUser().then(setUsers);
    },[])

    function addUser({name,age}: {name:string, age:number}) {
        setUsers(prevUsers => {
            return [...prevUsers, {id:crypto.randomUUID(), name, age}]
        })
    }

  return (
    <Context.Provider value={{users,addUser}}>
        <Child2/>
    </Context.Provider>
  )
}

export default ContextApp

function getUser() {
    return Promise.resolve([
        {id:crypto.randomUUID(), name:"Ravi", age: 20},
        {id:crypto.randomUUID(), name:"Kumar", age: 20},
        {id:crypto.randomUUID(), name:"Ravi Kumar", age: 20},
    ])
}