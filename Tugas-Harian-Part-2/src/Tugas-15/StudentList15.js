import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {useHistory } from "react-router-dom"
import {StudentContext} from "./StudentContext15"

const StudentList = () =>{
    const [student, setStudent] = useState([])
    const {triggerStudent, setTriggerStudent, currentId, setCurrentId} = useContext(StudentContext)
    let history = useHistory();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
            setStudent(
                result.data.map(res => {
                    let indexNilai = ''
                    if(res.score >= 80) indexNilai = 'A'
                    else if (res.score >= 70  && res.score < 80) indexNilai = 'B'
                    else if (res.score >= 60 && res.score < 70) indexNilai = 'C'
                    else if (res.score >= 50 && res.score < 60) indexNilai = 'D'
                    else if (res.score <50) indexNilai = 'E'
                    return {id: res.id, nama: res.name, matkul: res.course, nilai: res.score, index: indexNilai}
                })
            )
            setTriggerStudent(false)
        }
        if(triggerStudent){
            fetchData()
        }
    }, [triggerStudent])

    const handleEdit = (event) =>{
        let idStudent = parseInt(event.target.value)
        setCurrentId(idStudent)
        console.log(currentId)
        history.push(`/tugas15/student/${idStudent}`)
    }

    const handleDelete = (event) =>{
        let idStudent = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${idStudent}`)
        .then(() => {
          setTriggerStudent(true)
        })
    }

    return(
        <>
        {
            student !== null &&
            (<div style={{width: "50%", margin: "0 auto"}}>
            <h1 style={{textAlign: "center"}}>Daftar Nilai Mahasiswa</h1>
            <table className="daftar-nilai">
                <thead>
                <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Mata Kuliah</th>
                    <th>Nilai</th>
                    <th>Indeks Nilai</th>
                    <th>Aksi</th>
                </tr>
                </thead>
                <tbody>
                    {
                    student.map((item, index)=>{
                        return(                    
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.nama}</td>
                            <td>{item.matkul}</td>
                            <td>{item.nilai}</td>
                            <td>
                            {item.index}
                            
                            </td>
                            <td>
                            <button onClick={handleEdit} value={item.id}>Edit</button>
                            &nbsp;
                            <button onClick={handleDelete} value={item.id}>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </table>
            </div>)
        }
        </>
    )

}

export default StudentList;