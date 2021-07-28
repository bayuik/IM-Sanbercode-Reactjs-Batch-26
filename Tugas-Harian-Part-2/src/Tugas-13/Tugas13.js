import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './tugas13.css';

const Tugas13 = () => {
    const [mahasiswa, setMahasiswa] = useState([]);
    const [inputNama, setInputNama] = useState("");
    const [inputMataKuliah, setInputMataKuliah] = useState("");
    const [inputNilai, setInputNilai] = useState(0);
    const [currentId, setCurrentId] = useState(null);
    const [trigger, setTrigger] = useState(true);

    useEffect(() => {
        const fetchData = async() => {
            const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`);
            setMahasiswa(
                result.data.map(res => {
                    let indexNilai = "";
                    if(res.score > 80) indexNilai = "A"
                    else if(res.score >= 70 && res.score < 80) indexNilai = "B"
                    else if(res.score >= 60 && res.score < 70) indexNilai = "C"
                    else if(res.score >= 50 && res.score < 60) indexNilai = "D"
                    else if(res.score < 50) indexNilai = "E"
                    return {id: res.id, nama: res.name, mataKuliah: res.course, nilai: res.score,index: indexNilai}
                })
            )
            setTrigger(false)
        }
        if(trigger){
            fetchData()
        }
    }, [trigger])

    const handleChangeNama = e => {
        let inputNama = e.target.value;
        setInputNama(inputNama);
    }

    const handleChangeMataKuliah = e => {
        let inputMataKuliah = e.target.value;
        setInputMataKuliah(inputMataKuliah);
    }

    const handleChangeNilai = e => {
        let inputNilai = e.target.value;
        setInputNilai(inputNilai);
    }

    const handleEdit = e => {
        let idMahasiswa = e.target.value;
        axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
        .then(res => {
            let data = res.data;
            setCurrentId(data.id)
            setInputNama(data.name);
            setInputMataKuliah(data.course);
            setInputNilai(data.score)
        })
    }

    const handleDelete = e => {
        let idMahasiswa = parseInt(e.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${idMahasiswa}`)
        .then(() => {
            let newMahasiswa = mahasiswa.filter(data => {return data.id !== !idMahasiswa})
            setMahasiswa(newMahasiswa)
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(currentId == null){
            axios.post(`http://backendexample.sanbercloud.com/api/student-scores`, {name: inputNama, course: inputMataKuliah, score: inputNilai})
            .then(() => setTrigger(true));
        } else {
            axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name: inputNama, course:inputMataKuliah, score: inputNilai})
            .then(() => setTrigger(true))
        }
        setCurrentId(null);
        setInputNama("");
        setInputMataKuliah("");
        setInputNilai(0);
    }

    return (
        <>
            {
                mahasiswa !== null && (
                    <div className="container13">
                        <h1>Daftar Nilai Mahasiswa</h1>
                        <table>
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
                                    mahasiswa.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{item.nama}</td>
                                                <td>{item.mataKuliah}</td>
                                                <td>{item.nilai}</td>
                                                <td>{item.index}</td>
                                                <td>
                                                    <button onClick={handleEdit} value={item.id}>Edit</button>&nbsp;
                                                    <button onClick={handleDelete} value={item.id}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        <h1>Form Nilai Mahasiswa</h1>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Nama:</label>
                                <input type="text" value={inputNama} onChange={handleChangeNama} />
                            </div>
                            <div>
                                <label>Mata Kuliah:</label>
                                <input type="text" value={inputMataKuliah} onChange={handleChangeMataKuliah} />
                            </div>
                            <div>
                                <label>Nilai:</label>
                                <input type="number" min="0" max="100" value={inputNilai} onChange={handleChangeNilai} />
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                )
            }
        </>
    )
}

export default Tugas13;