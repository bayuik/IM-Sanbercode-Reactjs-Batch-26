import "./App.css";

function App() {
    let daftarItem = ["Semangka", "Jeruk", "Nanas", "Salak", "Anggur"];
    let data = daftarItem.map(item => {
        return (
            <label><input type="checkbox" value={item} />{item}</label>
        );
    });

    return (
        <div>
            <div className="container">
                <h1 className="title">Form Pembelian Buah</h1>
                <form>
                    <p>
                        <strong className="nama">Nama Pelanggan</strong>
                        <input type="text" />
                    </p>
                    <p className="daftarItem">
                        <strong className="label">Daftar Item</strong>
                        <div className="item">
                            {data}
                        </div>
                    </p>
                    <input type="submit" value="Kirim" />
                </form>
            </div>
        </div>
    );
}

export default App;
