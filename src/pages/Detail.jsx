import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getTodoByID } from '../redux/modules/todos'

function Detail() {

  const dispatch = useDispatch()

  const todos = useSelector((state) => {
    return state.todo.todo
  })

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTodoByID(id))

  }, [dispatch, id])
  
  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID : {todos.id}</div>
            <StButton
              borderColor='#E7EECF'
              onClick={() => {
                navigate('/');
              }}>이전으로</StButton>
          </StDialogHeader>
          <StTitle>{todos.title}</StTitle>
          <StBody>{todos.body}</StBody>
        </div>
      </StDialog>
    </StContainer>
  )
}

export default Detail

const StContainer = styled.div`
  border : 2px solid #ACCEBC;
  width : 100%;
  height : 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StDialog = styled.div`
  width: 600px;
  height: 400px;
  border : 1px solid #DADEA9;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const StDialogHeader = styled.div`
  display : flex;
  height : 50px;
  justify-content: space-between;
  align-items: center;
`

const StTitle = styled.h1`
  padding : 0 24px;
`

const StBody = styled.h1`
  padding : 0 24px;
`

const StButton = styled.button`
  border : 1px solid ${({ borderColor }) => borderColor };
  height : 40px;
  width : 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor : pointer;
`