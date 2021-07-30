import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {StudentContext} from "./StudentContext15"
import {useHistory} from "react-router"

const StudentForm = () => {
    const [inputNamaStudent, setInputNamaStudent] = useState("")
    const [inputMataKuliah, setInputMataKuliah] = useState("")
    const [inputNilaiStudent, setInputNilaiStudent] = useState(0)
    const {setTriggerStudent, currentId, setCurrentId} = useContext(StudentContext)
    let history = useHistory();

    useEffect( () => {
        const fetchData = async () => {
            if(currentId !== null) {
                const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`)
                setInputNamaStudent(result.data.name)
                setInputMataKuliah(result.data.course)
                setInputNilaiStudent(result.data.score)
            }
        }
        fetchData()
    }, [currentId])

    const handleChangeName = (event) =>{
        let inputNamaValue = event.target.value
        setInputNamaStudent(inputNamaValue)
    }
    
    const handleChangeMataKuliah = (event) =>{
        let inputMataKuliahValue = event.target.value
        setInputMataKuliah(inputMataKuliahValue)
    }

    const handleChangeNilai = (event) =>{
        let inputNilaiValue = event.target.value
        setInputNilaiStudent(inputNilaiValue)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(currentId)
        if(currentId == null){
            axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {name: inputNamaStudent, course:inputMataKuliah, score: inputNilaiStudent})
            .then(() => {
                setTriggerStudent(true)
                history.push(`/tugas15`)
            })

        }else{
            axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name: inputNamaStudent, course:inputMataKuliah, score: inputNilaiStudent})
            .then(() => {
                setTriggerStudent(true)
                history.push(`/tugas15`)
            }
                
            )
        }
        setInputNamaStudent("")
        setInputMataKuliah("")
        setInputNilaiStudent(0)
        setCurrentId(null)
    }

    return(
        <>
        <div style={{width: "50%", margin: "0 auto"}}>
            <h1>Form Nilai Mahasiswa</h1>
            <form onSubmit={handleSubmit} style={{textAlign: "center", marginTop: "20px"}}>
                <tr>
                    <td><label><b>Nama:</b></label></td>
                    <td><input type="text" value={inputNamaStudent} onChange={handleChangeName}/></td>    
                </tr>
                <tr>
                    <td><label><b>Mata Kuliah:</b></label></td>
                    <td><input type="text" value={inputMataKuliah} onChange={handleChangeMataKuliah}/></td>
                </tr>
                <tr>
                    <td><label><b>Nilai:</b></label></td>
                    <td><input type="number" min="0" max="100" value={inputNilaiStudent} onChange={handleChangeNilai}/></td>         
                </tr>
                <tr>
                    <td><input type="submit" value="Submit"/></td>
                </tr>
            </form>
        </div>
        </>
    )
}

export default StudentForm;