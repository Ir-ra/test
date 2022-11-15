import {Routes, Route} from 'react-router-dom'
import All from './pages/All';
import JobDetails from './pages/JobDetails';

// import { useFetch } from './hooks/useFetch';
// import {useParams} from 'react-router-dom'

//styles
import './App.css';


function App() {
  
  // const {id} = useParams()
  // const {data: jobs, isPending, error} = useFetch()

  return (
    
    <Routes>
      <Route  path='/' element={<All />}/>
      <Route path='/:id' element={<JobDetails />}/> 
    </Routes>
  )
}

export default App;
