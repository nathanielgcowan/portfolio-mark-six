import React, { useState } from 'react'



export default function Crud() {
  const [state, setState] = useState({
    object: {
      id: 0,
      name: ''
    },
    array: [],
    process: true
  })

  function handleChange(e) {
    setState({
      ...state,
      object: {
        ...state.object,
        [e.target.name]: e.target.value
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleCreate();
    if (state.object.id === 0) {
      handleCreate();
    } else {
      handleUpdate()
    }
    if (state.process) {
      console.log('true')
    } else {
      console.log('false')
    }
  }
  function handleCreate() {
    setState({
      ...state,
      array: [...state.array, { ...state.object, id: Date.now() }],
      process: !state.process
    })
  }
  function handleUpdate() {
    setState({
      ...state,
      array: state.array.map(e => {
        if (e.id === state.object.id) {
          return state.object
        } else {
          return e
        }
      }),
      process: !state.process
    })
  }
  function handleDelete() {
    setState({
      ...state,
      array: state.array.filter(e => {
        return e.id !== state.object.id
      })
    })
  }
  function clearFields() {
    setState({
      ...state,
      object: {
        id: 0,
        name: ''
      }
    })
  }
  
  return (
    <>
      <br />
      <form onSubmit={e => handleSubmit(e) }>
        <input type='text' name='name'
          value={state.object.name}
          onChange={e => {handleChange(e)}} />
          <button type='submit'>{
            (state.object.id === 0) ? 'Submit' : 'Update'
          }</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={clearFields}>Clear</button>
      <br />
      { state.array.map((e,i) => { 
        return ( 
          <p key={i}>
            {e.id}
            {" "}
            {e.name}
            <button onClick={() => 
              setState({...state, object: {...e}})}>
                Select
            </button>
          </p>
        )})}
    </>
  )
}