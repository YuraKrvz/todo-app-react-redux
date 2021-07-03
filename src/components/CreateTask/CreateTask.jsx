import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '@store/actions';
import cn from 'classnames';
import styles from './CreateTask.module.css';

const CreateTask = ()=> {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handlerInput = (e) => {
    setInputValue(e.currentTarget.value);
    //console.log(e.currentTarget.value);
    e.preventDefault();
  };
  const handlerForm = (e) => {
    dispatch(addTodo(inputValue))
    e.preventDefault();
    setInputValue('')
  }
  return (
    <div>
      <form onSubmit={handlerForm} className={styles.createTask__wrapper} >
      <input 
        className={ cn('rounded', styles.createTask__enter_task) } 
        type="text" 
        placeholder="create task"
        value={inputValue}
        onChange={handlerInput}
      />   
      <input type="submit" className={cn('btn', 'btn-primary', styles.btn_submit, )} />
      </form>
    </div>
    
  );
}

export default CreateTask;

// <form onSubmit={()=> alert('submit of form')}>
//       <input type="checkbox" />
//       
//       <input type="submit" />
// </form>