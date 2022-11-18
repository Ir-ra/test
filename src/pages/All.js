//styles
import './All.css'



import location from '../assets/location.svg'

import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import RatingSIze from './Rating'
import IconCheckboxes from './Checkbox'
import { Rating } from '@mui/material'




function All(props) {
    const { jobs: jobS, isPending, error } = useFetch()
    let count = 0;
    return (
        <div className='container'>
            {isPending && <div className='loading'>Loading...</div>}
            {error && <div className='error'>{error}</div>}

            {jobS && (

                <div >

                    {jobS.map((job) => (
                        <div key={job.id} className='card'>
                            <div>
                            
                                <img src={`${job.pictures[0]}?count=${++count}`} />
                            </div>

                            <div className='info' >
                                <div className='title'>
                                    <Link to={`/${job.id}`}>{job.title}</Link>
                                </div>
                                <p>Employment type:</p>
                                <ul>
                                    {job.employment_type.map(type =>
                                        <li key={type}>{type}</li>)}
                                </ul>

                                <p><img src={location} />Vienna, Austria</p>
                            </div>


                           
                            <div className='left'>
                                <div className='grade'><Rating name="size-medium" defaultValue={0} /> </div>
                                <div className='gradeSmall'> <Rating name="size-small" defaultValue={0} size="small" />  </div>
                                <div className='check'><IconCheckboxes/></div>
                               
                                {/* <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                                        fill="#000000"><path d="M0 0h24v24H0V0z"
                                            fill="none" /><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
                                    </svg>
                                </button> */}
                              
                                
                               
                                    <p>Posted 2 days ago</p>
                                
                            </div>
                        </div>


                    ))}
                </div>

            )}
        </div>
    )
}

export default All;
{/* <div></div> */ }