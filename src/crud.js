import React, { useState } from 'react'
import uuid from 'react-uuid'

export default function Crud() {
    const [state, setState] = useState({
        array: [],
        obj: {
            id: 0,
            fname: '',
            lname: '',
            message: '',
            carBrand: '',
            isChecked: false,
            gender: '',
            price: 0
        }
    })

    const handleChange = e => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setState({
            ...state,
            obj: {
                ...state.obj,
                [e.target.name]: value
            }
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        state.array.push(state.obj)
        setState({
            ...state,
            obj: {
                id: Math.max(state.obj.id) + 1,
                fname: '',
                lname: '',
                message: '',
                carBrand: '',
                isChecked: false,
                gender: '',
                price: 0
            }
        })
    }

    return (
        <div>
            <div>
                <h1>React Form Handling</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:{" "} 
                        <input 
                            type='text' 
                            name='fname'
                            value={state.obj.fname}
                            onChange={handleChange} 
                        />
                    </label>{' '}
                    <label>
                        Last Name:{' '}
                        <input 
                            type='text'
                            name='lname'
                            value={state.obj.lname}
                            onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Your Message:{" "}
                        <textarea
                        name="message"
                        value={state.obj.message}
                        onChange={handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Pick your favorite car brand:
                        <select
                        name="carBrand"
                        value={state.obj.carBrand}
                        onChange={handleChange}
                        >
                        <option value="mercedes">Mercedes</option>
                        <option value="bmw">BMW</option>
                        <option value="maserati">Maserati</option>
                        <option value="infinity">Infinity</option>
                        <option value="audi">Audi</option>
                        </select>
                    </label>
                    <br /><br />
                    <label>
                        <input
                        type="checkbox"
                        name="isChecked"
                        checked={state.obj.isChecked}
                        onChange={handleChange}
                        />
                    {" "}
                        Is Checked?
                    </label>
                    <br /><br />
                    <label>
                        <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={state.obj.gender === "male"}
                        onChange={handleChange}
                        />
                    {" "}
                        Male
                    </label>
                    <label>
                        <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={state.obj.gender === "female"}
                        onChange={handleChange}
                        />
                    {" "}
                        Female
                    </label>
                    <br /><br />
                    <label>
                        Price (between 0 and 50):
                        <input
                        type="range"
                        name="price"
                        min="0"
                        max="50"
                        value={state.obj.price}
                        onChange={handleChange}
                        />
                    </label>
                    <button type='submit'>Submit</button>
                </form>
                <br />
                <h5>{state.obj.id}</h5>
                <h5>Name: {state.obj.fname} {state.obj.lname}</h5>
                <h5>My favorite car brand: {state.obj.carBrand}</h5>
                <p>Message: {state.obj.message}</p>
                <h5>It is checked? : 
                    {state.obj.isChecked ? "Yes" : "No"}
                </h5>
                <h5>Gender Selected : {state.obj.gender}</h5>
                <h5>Price: ${state.obj.price}</h5>
            </div>
            { state.array.map(e => {
                return (
                    <>
                        <label>Car Brand: {e.carBrand}</label>{" "}
                        <label>First Name: {e.fname}</label>{" "}
                        <label>Gender: {e.gender}</label>{" "}
                        <label>Id: {e.id}</label>{" "}
                        <label>Is Checked: {e.isChecked}</label>{" "}
                        <label>Message: {e.message}</label>{" "}
                        <label>Price: {e.price}</label>{" "}<br />{" "}
                        <button onClick={() => setState({
                            ...state,
                            obj: {
                                id: e.id,
                                fname: '',
                                lname: '',
                                message: '',
                                carBrand: '',
                                isChecked: false,
                                gender: '',
                                price: 0
                            }
                        })}>Select</button>
                    </>
                )
                })
            }
        </div>
    )
}