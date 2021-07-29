import React from 'react'
import { StudentProvider } from './StudentContext'
import StudentForm from './StudentForm'
import StudentList from './StudentList'

const Student = () => {
    return (
        <div>
            <StudentProvider>
                <StudentList/>
                <StudentForm/>
            </StudentProvider>
        </div>
    )
}

export default Student;