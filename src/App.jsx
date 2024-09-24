import './App.css'
import VideoUpload from './components/VideoUpload'

function App() {

  return (
    <>
      <div className='flex flex-col items-center justify-center space-y-3 py-5'>
        <h1 className='text-3xl font-bold text-gray-500'>Welcome to video streaming app!</h1>
        <VideoUpload/>
      </div>
    </>
  )
}

export default App
