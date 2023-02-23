import React, { useState } from 'react'
import nextId from 'react-id-generator';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { addTodo } from '../redux/modules/todos';

function Form() {

  // id값 랜덤으로 생성하게 해주는 패키지

  const dispatch = useDispatch()

  const [todo, setTodo] = useState({
    id: 0,
    title : '',
    body: '',
    isDone: false
  });

  // setTodo
  const changeHandler = (event) => {
    
    const { name, value } = event.target

    setTodo({ ...todo, [name]: value })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if(todo.title.trim() === '' || todo.body.trim() === '') {
      return alert('빈칸을 채워주세요!')
    }

    const id = nextId()
    dispatch(addTodo({ ...todo, id }))
    //??
    setTodo({
      id: 0,
      title: '',
      body: '',
      isDone: false
    })
  }
  return (
    <StForm onSubmit={submitHandler}>
      <StInputGroup>
        <StFormName>제목</StFormName>
        <StFormTitleInput 
          type='text'
          name='title'
          value={todo.title}
          onChange={changeHandler}/>
        <StFormName>내용</StFormName>
        <StFormContentInput 
          type='text'
          name='body'
          value={todo.body}
          onChange={changeHandler}/>
      </StInputGroup>
      <StFormButton>
        추가하기🧸
      </StFormButton>
    </StForm>
  )
}

export default Form

const StForm = styled.form`
  background-color: #F0F8F8;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  margin: 0 auto;
`

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const StFormName = styled.label`
  font-size: 16px;
  font-weight: 600;
`
const StFormTitleInput = styled.input`
  height: 30px;
  width: 180px;
  border: none;
  margin-right: 10px;
  border-radius: 8px;
`
const StFormContentInput = styled.input`
  height: 30px;
  width: 300px;
  border: none;
  border-radius: 8px;
`
const StFormButton = styled.button`
  height: 40px;
  width: 100px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: #ACCEBC;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`