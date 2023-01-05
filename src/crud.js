import React, { useState } from 'react';
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
        },
        formState: 'new'
    })

    function handleChange(e) {
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
        if (state.formState === 'new') {
            setState({
            ...state,
                obj: {
                    id: 4,
                    fname: '',
                    lname: '',
                    message: '',
                    carBrand: '',
                    isChecked: false,
                    gender: '',
                    price: 0
                }
            });
            state.array.push(state.obj);
            clearState();
        } else {
            setState({
                ...state,
                    obj: {
                        id: state.obj.id,
                        fname: state.obj.fname,
                        lname: '',
                        message: '',
                        carBrand: '',
                        isChecked: false,
                        gender: '',
                        price: 0
                    }
             });
        }
    }

    function clearState() {
        setState({
            ...state,
                obj: {
                    id: 0,
                    fname: '',
                    lname: '',
                    message: '',
                    carBrand: '',
                    isChecked: '',
                    gender: '',
                    price: ''
                },
                formState: 'new'
            });
    }
console.log(state.formState)
    return (
        <div>
            <div>
                <h1>React Form Handling</h1>
                { state.formState }
                { console.log(state.array) }
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
                                fname: e.fname,
                                lname: e.lname,
                                message: e.message,
                                carBrand: e.carBrand,
                                isChecked: false,
                                gender: e.gender,
                                price: 0
                            },
                            formState: 'edit'
                        })}>Select</button><br />
                    </>
                )
                })
            }
        </div>
    )
}