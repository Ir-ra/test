import {Routes, Route} from 'react-router-dom'
import All from './pages/all_jobs/All';
import JobDetails from './pages/job_details/JobDetails';


//styles
import './App.css';


function App() {


  return (
    
    <Routes>
      <Route  path='/' element={<All />}/>
      <Route path='/:id' element={<JobDetails />}/> 
    </Routes>
  )
}

export default App;
