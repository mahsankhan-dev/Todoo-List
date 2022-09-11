
import './App.css';
import { useState } from 'react';



function App() {
  const [todoList, setTodoList] = useState([])
  const [input, setInput] = useState('')
  const [editMode, setEditdMode] = useState(false)
  const [editIndex, setEditIndex] = useState()
  const [addColor, setAddColor] = useState()
  const [check, setCheck] = useState()

  const addMe = () => {
    if (!input) {
      alert('Enter the data !')
      return
    }
    
      const copyArray = [...todoList]
      copyArray.push(input)
      setTodoList(copyArray)
      resetMode()
  }
  const deleteMe = (index) => {
    const copyArray = [...todoList]
    setTodoList(copyArray)
    copyArray.splice(index, 1)
    resetMode()
  }
  const editItem = (index) => {
    setInput(todoList[index])
    setEditdMode(true)
    setEditIndex(index)
    setAddColor(index)
    setCheck(index)
  }
  
  const updateItem = () => {
    const copyArray = [...todoList]
    copyArray[editIndex] = input
    setTodoList(copyArray)
    resetMode()
  }

  const completeItem = (index) => {
    setCheck(index)
  }
  
  const resetMode = () => {
    setInput ('')
    setEditdMode(false)
  }

  return (
    <>
      <div className='mainDiv'>
        <h1>TO-DO Application</h1>
        <div className='myForm'>
          <input onChange={e => setInput(e.target.value)} placeholder='Type here !' value={input} id='input-1' />
          {editMode ? 
            <button onClick={updateItem} className='update'>Update</button>
          :
          <i class="fa-solid fa-plus" onClick={addMe}></i>
          }
        </div>
        <div className='center'>
          <ol className='myOl'>
            {todoList.map((item, index) => {
              return <li style={index === addColor ? { backgroundColor : 'yellow',boxShadow : 'none' }: {} }
              className={index === check ? 'line-through' : {}}>
               {item} 
                <i class="fa-solid fa-trash" title='Delete' onClick={() => deleteMe(index)}></i>
                <i class="fa fa-edit" title='Edit' onClick={() => editItem(index)}></i>
                <i class="fa fa-check" title='Complete' onClick={() => completeItem(index)}>{item.value}</i>
              </li>
            })}
          </ol>
        </div>
      </div>
    </>
  )
}



export default App;



