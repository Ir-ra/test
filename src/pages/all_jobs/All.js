//styles
import './All.css'

import location from '../../assets/location.svg'

import { useFetch } from '../../hooks/useFetch'
import { Link } from 'react-router-dom'
import IconCheckboxes from '../../components/Checkbox'
import { Rating } from '@mui/material'

function All() {
    const { jobs, isPending, error } = useFetch()
    let count = 0;
    return (
        <div className='container'>
            {isPending && <div className='loading'>Loading...</div>}
            {error && <div className='error'>{error}</div>}

            {jobs && (
                <div >
                    {jobs.map((job) => (

                        <div key={job.id} className='card'>
                            <div className='frontPic'>
                                <img src={`${job.pictures[0]}?count=${++count}`} />
                            </div>

                            <div className='info' >
                                <div className='title'>
                                    <Link to={`/${job.id}`}>{job.title}</Link>
                                </div>

                                <div className='ET_ul'>
                                    <p>Employment type:</p>
                                    <ul>
                                        {job.employment_type.map(type =>
                                            <li key={type}>{type}</li>)}
                                    </ul>
                                </div>
                                <p><img src={location} />Vienna, Austria</p>
                            </div>

                            <div className='right'>
                                <div className='grade'><Rating name="size-medium" defaultValue={0} /> </div>
                                <div className='gradeSmall'> <Rating name="size-small" defaultValue={0} size="small" />  </div>
                                <div className='check'><IconCheckboxes /></div>
                                <p>Posted {job.createdAt.substring(0,10)}</p>  
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default All;
