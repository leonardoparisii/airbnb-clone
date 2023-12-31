'use client'
 import { useEffect } from 'react'
import EmptyState from './components/EmptyState'

 interface ErrorStateProps {
    error: Error
 }

 
 const Error = ({ error }: ErrorStateProps) => {
   
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <EmptyState
            title='Uh oh!'
            subtitle='Something Went wrong!'
        />
    )
 } 
 
 export default Error