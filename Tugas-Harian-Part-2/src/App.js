import StudentProvider from './Tugas-15/StudentContext15'
import Routes from './Tugas-15/Routes'

function App() {
    return (
        <>
            <StudentProvider>
                <Routes/>    
            </StudentProvider>
            
        </>
    );
}

export default App;