import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeTodo, changeCompleted} from '@store/actions';
import cn from 'classnames';
import styles from './ListTask.module.css';


const ListTask = ()=> {
  const todos = useSelector(state => state.reducerTodos);
  const dispatch = useDispatch();
  let classes = [];

  return (
    <ul className={cn("text-primary", styles.listTask__wrapper)} >
      {todos.todos.map((todo, index)=> {
        return (
          <li key={todo.id}>
           <strong>{index + 1}&nbsp;</strong>
           
           <input 
            type="checkbox" 
            checked={todo.completed } 
            onChange={()=> dispatch(changeCompleted(todo))}
          />

            &nbsp;

            <span className={ todo.completed ? styles.throw__text : styles.notThrow__text }>{ todo.title }</span>
            <button onClick={()=> dispatch(removeTodo(todo))}>&#10006;</button>
          </li>
        );
      })}
    </ul>
  );
}

export default ListTask;