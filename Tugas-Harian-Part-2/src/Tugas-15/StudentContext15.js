import React, {useState, createContext} from 'react'

export const StudentContext = createContext();

export const StudentProvider = props => {
    const [triggerStudent, setTriggerStudent] = useState(true)
    const [currentId, setCurrentId] = useState(null)

    const studentState = {
        triggerStudent,
        setTriggerStudent,
        currentId,
        setCurrentId,
    }

    return (
        <StudentContext.Provider value={studentState}>
            {props.children}
        </StudentContext.Provider>
    )
}
export default StudentProvider;