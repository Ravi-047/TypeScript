
import List from './List'

const Generic = () => {
  return (
    <List <{id:number,name:string}> //nod need to specify the type of the item it will be inferred automatically by the typescript
        items={[
            {id:1, name:"Ravi"},
            {id:2, name:"Kumar"},
            {id:3, name:"Ravi Kumar"},
        ]}
        getKey={item => item.id}
        renderItem={item => <div>{item.name}</div>}
    />
  )
}

export default Generic