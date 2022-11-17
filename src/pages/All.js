//styles
import './All.css'


import grade from '../assets/grade.svg'
import location from '../assets/location.svg'

import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import RatingSIze from './Rating'
import { Rating } from '@mui/material'


function All() {
    const { jobs: jobS, isPending, error } = useFetch()

    return (
        <div className='container'>
            {isPending && <div className='loading'>Loading...</div>}
            {error && <div className='error'>{error}</div>}

            {jobS && (

                <div >

                    {jobS.map((job) => (
                        <div key={job.id} className='card'>
                            <div>
                                <img src={job.pictures[1]} />
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


                            {/* <div className='grade'><img src={grade}/></div> */}
                            {/* <RatingSIze /> */}

                            <div className='left'>
                                <div className='grade'><RatingSIze /></div>

                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                                        fill="#000000"><path d="M0 0h24v24H0V0z"
                                            fill="none" /><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
                                    </svg>
                                </button>
                                {/* <div><img src={bookmark}/></div> */}


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