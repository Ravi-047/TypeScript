


type ListProps<Item> = {
    items: Item[],
    getKey: (item:Item) => React.Key,
    renderItem: (item:Item) => React.ReactNode
}

const List = <Item,>(props : ListProps<Item>) => {
    const {items, getKey, renderItem}  = props
  return (
    <div>
        {
            items.map(item => {
                return (
                    <div key={getKey(item)}>
                        {renderItem(item)}
                    </div>
                )
            })
        }
    </div>  
  )
}

export default List