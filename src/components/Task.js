const Task = ({id, name}) => {
  return(
    <>
    <div className="border rounded p-4 mb-4 flex items-center justify-between gap-4">{name}</div>
    </>
  )
}

export default Task;