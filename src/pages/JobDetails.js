import './JobDetails.css'
// import './JD.scss'

import { useParams } from 'react-router-dom'
import Map from './Map';
import location from '../assets/location.svg'

function JobDetails() {
    const { id } = useParams()
    const jobs = window.localStorage.getItem('jobs');
    const filteredJobs = JSON.parse(jobs).filter(j => j.id === id)
    const job = filteredJobs.length > 0 ? filteredJobs[0] : null;
    console.log(job)
    return (
        <div>
            <div className='details'>
                {job && (
                    <div className='container2'>
                        <div className='card'>
                            <h1>Job Details</h1>
                            <h2>{job.title}</h2>

                            <div className='salary'>
                                <p>Brutto, per year</p>
                                <h3>&#8364; {job.salary}</h3>
                            </div>


                            <div className='responsibilities'>
                                <h3>Responsibilities</h3>
                                <p>{job.description}</p>
                            </div>

                            <div>
                                <h3>Compensation & benefits</h3>
                                <ul>
                                    {job.benefits.map(jb =>
                                        <li key={jb}>{jb}</li>
                                    )}
                                </ul>

                            </div>


                            <button>Apply now</button>
                        </div>

                        <div className='imgs'>
                            <h1>Attached images</h1>
                            <div className='attach'>
                                {job.pictures.map(img =>
                                    <img src={img} />
                                )}
                            </div>
                        </div>

                        <div className='info'>
                            <h1>Additional info</h1>
                            <span>Employment type</span>
                            <div className='btns'>
                                <button>Full-time</button>
                                <button>Part time</button>
                                <button>Temporary</button>

                                <p>Benefits</p>
                                <div className='btns2'>
                                    {job.benefits.map(jb =>
                                        <button>{jb}</button>
                                    )}
                                </div>
                            </div>

                        </div>
                        <h1>Contacts</h1>
                        <div className='contacts'>
                            <div className='contact'>
                                <span
                                style={{
                                   fontWeight: 'bold',
                                }} >{job.name}</span>

                                <p><img src={location}/>{job.address}</p>
                                
                                <p><b>Phone:</b> {job.phone}</p>
                                <p><b>E-mail:</b> {job.email}</p>
                                
                            </div>
                            <div><Map coordinates={job.location}/></div>
                           
                        </div>

                    </div>
                )}
            </div>

        </div>
    )
}

export default JobDetails;
//<div></div>