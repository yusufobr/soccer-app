import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Standing from './components/Standing'

function App() {
  

  return (
    <div className='px-4 max-w-screen-lg mx-auto mb-20'>
      <Navbar />
      <div className='container mt-4 mx-auto grid grid-cols-3 gap-4'>
        <Standing />
        <Sidebar />
      </div>
    </div>
  )
}

export default App
