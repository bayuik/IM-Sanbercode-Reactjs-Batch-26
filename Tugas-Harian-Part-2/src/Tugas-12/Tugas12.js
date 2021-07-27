import React, {Component} from 'react';
import './tugas12.css';

class Tugas12 extends Component {
    constructor(props){
        super(props)
        this.state = {
            daftarBuah: [
                {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
                {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
                {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
                {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
                {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
            ],
            inputNama: "",
            inputHarga: 0,
            inputBerat: 0,
            currentIndex: -1
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event => {
        event.preventDefault()
        let currentIndex = this.state.currentIndex;
        let daftarBuah = this.state.daftarBuah;
        let add = {
            nama: this.state.inputNama,
            hargaTotal: this.state.inputHarga,
            beratTotal: this.state.inputBerat,
        }
        if(currentIndex === -1){
            this.setState({
                daftarBuah: [...daftarBuah, add],
                inputNama: "",
                inputHarga: "",
                inputBerat: "",
            })
        } else {
            daftarBuah[currentIndex] = add;
            this.setState({
                daftarBuah: [...daftarBuah],
                inputNama: "",
                inputHarga: 0,
                inputBerat: 0,
                currentIndex: -1,
            })
        }
    }

    handleChange = event => {
        let target = event.target;
        let name = target.name;
        this.setState({
            [name]: event.target.value
        })
    }

    handleEdit = event => {
        let index = event.target.value;
        let buah = this.state.daftarBuah[index];
        this.setState({
            inputNama: buah.nama,
            inputHarga: buah.hargaTotal,
            inputBerat: buah.beratTotal,
            currentIndex: index
        })
    }

    handleDelete = event => {
        let index = parseInt(event.target.value);
        let daftarBuah = this.state.daftarBuah.filter((e, i) => {
            return i !== index
        })
        this.setState({
            daftarBuah: [...daftarBuah]
        })
    }

    render(){
        return(
            <div className="container12">
                <h1>Daftar Harga Buah</h1>
                <table>
                    <thead>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Harga Total</th>
                        <th>Berat Total</th>
                        <th>Harga per kg</th>
                        <th>Aksi</th>
                    </thead>
                    <tbody>
                        {this.state.daftarBuah.map(({nama, hargaTotal, beratTotal }, index) => {
                            return (
                                <tr key={index} className="borderBottom">
                                    <td>{index+1}</td>
                                    <td>{nama}</td>
                                    <td>{hargaTotal}</td>
                                    <td>{beratTotal/1000} kg</td>
                                    <td>{hargaTotal/(beratTotal/1000)}</td>
                                    <td>
                                        <button onClick={this.handleEdit} value={index} className="edit">Edit</button>
                                        <button onClick={this.handleDelete} value={index}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <h1>Form Daftar Harga Buah</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="containerForm">
                        <label>Nama:</label>
                        <input required name="inputNama" onChange={this.handleChange} value={this.state.inputNama} type="text" />
                    </div>
                    <div className="containerForm">
                        <label>Harga Total:</label>
                        <input required type="number" name="inputHarga" onChange={this.handleChange} value={this.state.inputHarga} />
                    </div>
                    <div className="containerForm">
                        <label>Berat Total(dalam gram):</label>
                        <input required min="2000" type="number" name="inputBerat" onChange={this.handleChange} value={this.state.inputBerat} />
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default Tugas12;