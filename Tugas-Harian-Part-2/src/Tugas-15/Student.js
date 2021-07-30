import React from 'react'
import { StudentProvider } from './StudentContext15'
import StudentForm15 from './StudentForm15'
import StudentList15 from './StudentList15'

const Student = () => {
    return (
        <div>
            <StudentProvider>
                <StudentList15/>
                <StudentForm15/>
            </StudentProvider>
        </div>
    )
}

export default Student;