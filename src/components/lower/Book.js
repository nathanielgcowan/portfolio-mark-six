import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function Book() {
    const { id } = useParams()
    console.log({ id })
    const obj = useOutletContext()
    console.log({obj})
    return (
        <>
            <h1>
                Book { id } { obj.hello }
            </h1>
        </>
    )
}