//styles
// import './All.css'
import './ALLO.css'
import bookmark from '../assets/bookmark.svg'
import star from '../assets/star.svg'
import location from '../assets/location.svg'

import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'


function All() {
    const { jobs: jobS, isPending, error } = useFetch()

    return (
        <div className='container'>
            {isPending && <div className='loading'>Loading...</div>}
            {error && <div className='error'>{error}</div>}

            {jobS && (

                <div >
                    {/* card */}
                    {jobS.map((job) => (
                        <div key={job.id} className='card'>
                            <div>
                                <img src={job.pictures[1]} />
                            </div>

                            <div className='info' >
                                <Link to={`/${job.id}`}>{job.title}</Link>
                                <p>Employment type:</p>
                                <ul>
                                    {job.employment_type.map(type =>
                                        <li key={type}>{type}</li>)}
                                </ul>
                                
                                <p><img src={location}/>location</p>
                            </div>

                            

                            <div className='left'>
                                <div><img src={bookmark}/></div>
                                
                               
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
{/* <div></div> */}