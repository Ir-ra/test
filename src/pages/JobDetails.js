import './JobDetails.css'
// import './JD.scss'

import { useParams } from 'react-router-dom'
import Map from './Map';
import location from '../assets/location.svg'
import star from '../assets/star.svg'
import share from '../assets/share.svg'

function JobDetails() {
    const { id } = useParams()
    const jobs = window.localStorage.getItem('jobs');
    const filteredJobs = JSON.parse(jobs).filter(j => j.id === id)
    const job = filteredJobs.length > 0 ? filteredJobs[0] : null;
    console.log(job)
    return (

        <div className='details'>
            {job && (
                <div className='container1'>

                    <div className='container3'>
                        <div className='card'>

                            <div className='box1'>
                                <span id='h1'>Job Details</span>
                                <div className='separatorA'></div>


                                <div className='box1_a'>
                                    <div className='box1_b'>

                                        <img src={star} /><p>Save to my list</p>
                                        <img id='share' src={share} /><p>Share</p>

                                    </div>
                                </div>

                            </div>

                            <div className='separatorB'></div>
                            <button id='Bone'>Apply now</button>

                            <div className='box2'>
                                <h2>{job.title}</h2>

                                <div className='salary'>
                                    <p>Brutto, per year</p>
                                    <h3>&#8364; {job.salary}</h3>
                                </div>
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


                            <button id='Btwo'>Apply now</button>

                        </div>
                        <div>


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
                                    {job.employment_type.map(jb =>
                                        <button>{jb}</button>
                                    )}

                                    <p>Benefits</p>
                                    <div className='btns2'>
                                        {job.benefits.map(jb =>
                                            <button>{jb}</button>
                                        )}
                                    </div>
                                </div>
                                {/* <button className='back'>&#8678; Return to job board</button> */}
                            </div>
                            <h1 id='contactH1'>Contacts</h1>

                           
                        </div>

                       
                    </div>


                    <div className='container4'>
                        <div className='contact'>
                            <div className='cintactInfo'>
                                <span
                                    style={{ fontWeight: 'bold' }} >{job.name}</span>

                                <p><img src={location} />{job.address}</p>

                                <p><b>Phone:</b> {job.phone}</p>
                                <p><b>E-mail:</b> {job.email}</p>
                            </div>
                            <Map coordinates={job.location} />
                        </div>


                    </div>



                    
                   
                </div>
                
            )}
            <a id='back' href='/' >&#129152; Return to job board</a>
        </div>


    )
}

export default JobDetails;
//<div></div>