// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item-container">
      <div className="todo-item">
        <p className="todo-item-title">{title}</p>
        <button className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
