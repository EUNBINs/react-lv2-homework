import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { deleteTodo, statusTodo } from '../redux/modules/todos';
import { Link } from 'react-router-dom'

function List() {

  const dispatch = useDispatch();

  // 데이터 보여주기 핸들러
  const todos = useSelector((state) => {
    return state.todo.todo  // []
  })
  console.log('todos', todos)
  
  // 삭제 핸들러
  const deleteHandler = (id) => {
    dispatch(deleteTodo(id))
  }
  
  // 상태 변화 핸들러
  const statusHandler = (id) => {
    dispatch(statusTodo(id))
  }

  return (
    <div>
      <div>
        <StListTitle>
          해야할 일 🌿
        </StListTitle>
      </div>
      <StTodoArray>
        {
          todos.map((item) => {
            console.log(item)
            if (item.isDone === false) {
              return (
                <StListContainer key={item.id}>
                  <StTodoLink to={`/${item.id}`} key={item.id}>
                    상세보기
                    </StTodoLink>
                  <div>
                    <StTodoTitle>{item.title}</StTodoTitle>
                    <StTodoBody>{item.body}</StTodoBody>
                  </div>
                  <StTodoButtonBox>
                    <StTodoButton 
                      onClick={() => deleteHandler(item.id)}
                      borderColor="#f8d9e4">
                      삭제하기
                    </StTodoButton>
                    <StTodoButton 
                      borderColor="#E7EECF"
                      onClick={() => statusHandler(item.id)}>
                      {item.isDone ? '취소' : '완료'}
                    </StTodoButton>
                  </StTodoButtonBox>
                </StListContainer>
              )
            } else {
              return null;
            }
          })
        }
      </StTodoArray>
      <div>
        <StListTitle>
          완료 🌿
        </StListTitle>
      </div>
      <StTodoArray>
      {
          todos.map((item) => {
            if (item.isDone === true) {
              return (
                <StListContainer key={item.id}>
                  <StTodoLink to={`/${item.id}`} key={item.id}>
                    상세보기
                  </StTodoLink>
                  <div>
                    <StTodoTitle>{item.title}</StTodoTitle>
                    <StTodoBody>{item.body}</StTodoBody>
                  </div>
                  <StTodoButtonBox>
                    <StTodoButton 
                      onClick={() => statusHandler(item.id)}
                      borderColor="#f8d9e4">
                      삭제하기
                    </StTodoButton>
                    <StTodoButton 
                      borderColor="#E7EECF"
                      onClick={() => statusHandler(item.id)}>
                      {item.isDone ? '취소' : '완료'}
                    </StTodoButton>
                  </StTodoButtonBox>
                </StListContainer>
              )
            } else {
              return null;
            }
          })
        }
      </StTodoArray>
    </div>
  )
}

export default List

const StListTitle = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 15px;
`

const StTodoArray = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px
`
const StTodoLink = styled(Link)`
  margin-bottom: 20px;
`
const StListContainer = styled.div`
  width: 300px;
  max-height: 150px;
  border : 3px solid #ACCEBC;
  border-radius: 10px;
  padding: 20px;
`

const StTodoTitle = styled.div`
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
`

const StTodoBody = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`

const StTodoButtonBox = styled.div`
  font-weight: 500;
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 20px;
`
const StTodoButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  width: 80px;
  height: 40px;
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 10px;
  background-color: white;
`
