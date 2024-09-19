import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import List from './components/List'

function App() {

  return (
    <div className='mx-auto md:mt-[120px] sm:mt-[80px] px-[24px]'>
    <Header/>
      <div className='flex flex-col justify-center items-center'>
        <Form />
        <List />
      </div>
    </div>
  )
}

export default App
