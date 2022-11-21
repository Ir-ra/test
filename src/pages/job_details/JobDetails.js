import './JobDetails.css'

import { useParams } from 'react-router-dom'
import Map from '../../components/Map';
import location from '../../assets/location.svg'
import star from '../../assets/star.svg'
import share from '../../assets/share.svg'


function JobDetails() {
    const { id } = useParams()
    const jobs = window.localStorage.getItem('jobs'); 
    const filteredJobs = JSON.parse(jobs).filter(j => j.id === id) 
    const job = filteredJobs.length > 0 ? filteredJobs[0] : null;
    

    let count = 0;
    return (

        <div className='details'>
            {job && (
                <div className='container1'>

                    <div className='container2'>
                        <div className='card'>

                            <div className='box1'>
                                <span id='h1'>Job Details</span>
                                <div className='separator_mob'></div>

                                <div className='box1_1'>
                                    <img src={star} /><p>Save to my list</p>
                                    <img id='share' src={share} /><p>Share</p>
                                </div>
                            </div>

                            <div className='separator'></div>
                            <button id='apply_1'>Apply now</button>

                            <div className='box2'>
                                <h2>{job.title}</h2>

                                <div className='salary'>
                                    <p>Brutto, per year</p>
                                    <h3>&#8364; {job.salary}</h3>
                                </div>
                            </div>

                            <div className='posted'>Posted {job.createdAt.substring(0,10)}</div>

                            <div>
                                <h3>Responsibilities</h3>
                                <p>{job.description}</p>
                            </div>

                            <div>
                                <h3>Compensation & Benefits:</h3>
                                <ul>
                                    {job.benefits.map(benefit =>
                                        <li key={benefit}>{benefit}</li>
                                    )}
                                </ul>
                            </div>

                            <button id='apply_2'>Apply now</button>
                        </div>

                        <div>
                            <div className='attached_imgs'>
                                <h1>Attached images</h1>

                                <div className='imgs'>
                                    {job.pictures.map(img =>
                                        <img  src={`${img}?count=${++count}`} />
                                    )}
                                </div>

                            </div>

                            <h1>Additional info</h1>

                            <div className='additional'>
                                <p>Employment type</p>
                                <div className='empl_type'>
                                    {job.employment_type.map(type =>
                                        <span key={type}>{type}</span>
                                    )}
                                </div>

                                <p>Benefits</p>
                                <div className='benefits'>
                                    {job.benefits.map(benefit =>
                                        <span key={benefit}>{benefit}</span>
                                    )}
                                </div>

                            </div>

                            <h1 id='contactH1'>Contacts</h1>
                        </div>
                    </div>

                    <div className='map_box'>
                        <div>
                            <div className='contacts'>
                                <span><b>{job.name}</b></span>
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
