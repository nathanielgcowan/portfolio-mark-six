import React, { useState, useEffect } from 'react'



export default function Crud() {
  const [state, setState] = useState({
    object: {
      id: 0,
      name: ''
    },
    array: [],
    process: false
  })
  useEffect(() => {
    if (state.process) {
      console.log('its working')
      setState({...state, object: { id: 0, name: '' }, process: !state.process });
    }
  }, [state]);

  function selectItem(e) {
    setState({...state, object: {...e}})
  }
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
    (state.object.id === 0) ? handleCreate() : handleUpdate()
  }
  function handleCreate() {
    setState({
      ...state,
      array: [...state.array, { ...state.object, id: Date.now() }],
      process: true
    });
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
      process: true
    })
  }
  function handleDelete() {
    setState({
      ...state,
      array: state.array.filter(e => {
        return e.id !== state.object.id
      }),
      process: true
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
          <p key={i}>{e.id}{" "}{e.name}
            <button onClick={() => setState({...state, object: {...e} }) }>Select</button>
          </p> )}) }
    </>
  )
}