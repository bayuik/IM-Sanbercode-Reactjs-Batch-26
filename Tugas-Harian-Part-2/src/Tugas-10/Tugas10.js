import React from 'react';
import './tugas10.css';

export default function Tugas10() {
    let dataHargaBuah = [
        {nama: "Semangka", harga: 10000, berat: 1000},
        {nama: "Anggur", harga: 40000, berat: 500},
        {nama: "Strawberry", harga: 30000, berat: 400},
        {nama: "Jeruk", harga: 30000, berat: 1000},
        {nama: "Mangga", harga: 30000, berat: 500}
    ]

    return(
        <>
            <table>
                <thead>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                </thead>
                <tbody>
                    {dataHargaBuah.map(({nama, harga, berat}) => {
                        return (
                            <Row nama={nama} harga={harga} berat={berat / 1000} />
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

const Row = (props) => {
    return (
        <tr>
            <td className="namaBuah">{props.nama}</td>
            <td className="harga">{props.harga}</td>
            <td className="berat">{props.berat} kg</td>
        </tr>
    )
}