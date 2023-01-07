import React, { useState } from 'react'



export default function Crud() {
  const [state, setState] = useState({
    object: {
      id: 0,
      name: ''
    },
    array: []
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
    setState({
      ...state,
      array: [...state.array, { ...state.object, id: Date.now() }]
    })
    console.log('handleSubmit')
  }
  function handleDelete() {
    setState({
      ...state,
      array: state.array.filter(e => {
        return e.id != state.object.id
      })
    })
  }
  console.log(state)
  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <input type='text' name='name'
          value={state.object.name}
          onChange={e => {handleChange(e)}} />
        <button type='submit'>Submit</button>
      </form>
      <button onClick={handleDelete}>Delete</button>
      { state.array.map(e => { 
        return ( 
          <>
            {e.id}
            <button onClick={() => setState({...state, object: {...e}})}>Select</button>
          </>
        )})}
    </>
  )
}