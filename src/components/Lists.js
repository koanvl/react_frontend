import List from './List'

const Lists = ({ lists, deleteTodo }) => {
  return (
    <div>     
      {lists.map((list) => (        
        <List key={list.id} id={list.id} name={list.name} deleteTodo={deleteTodo}/>
      ))}
    </div>
  )
}

export default Lists;

