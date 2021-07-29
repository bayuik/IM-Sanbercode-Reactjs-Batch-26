import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {StudentContext} from "./StudentContext"
import '../Tugas-13/tugas13.css'

const StudentForm = () => {
    const [inputNamaStudent, setInputNamaStudent] = useState("")
    const [inputMataKuliah, setInputMataKuliah] = useState("")
    const [inputNilaiStudent, setInputNilaiStudent] = useState(0)
    const {setTriggerStudent, currentId, setCurrentId} = useContext(StudentContext)

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
        if(currentId == null){
            axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {name: inputNamaStudent, course:inputMataKuliah, score: inputNilaiStudent})
            .then(() => {setTriggerStudent(true)})

        }else{
            axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name: inputNamaStudent, course:inputMataKuliah, score: inputNilaiStudent})
            .then(() => {setTriggerStudent(true)})
        }
        setInputNamaStudent("")
        setInputMataKuliah("")
        setInputNilaiStudent(0)
        setCurrentId(null)
    }

    return(
        <>
        <div className="container13">
            <h1>Form Nilai Mahasiswa</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nama:</label>
                    <input type="text" value={inputNamaStudent} onChange={handleChangeName} />
                </div>
                <div>
                    <label>Mata Kuliah:</label>
                    <input type="text" value={inputMataKuliah} onChange={handleChangeMataKuliah} />
                </div>
                <div>
                    <label>NIlai:</label>
                    <input type="number" min="0" max="100" value={inputNilaiStudent} onChange={handleChangeNilai} />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
        </>
    )
}

export default StudentForm;