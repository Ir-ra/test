import { useEffect, useState } from "react"

export const useFetch = () => {

    const [jobs, setJobs] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const localStorageToken = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
        const url = "https://api.json-generator.com/templates/ZM1r0eic3XEy/data";

        const fetchData = async () => {
            try {
                let data;

                if (window.localStorage.getItem('jobs')) {
                    data = window.localStorage.getItem('jobs');
                   
                } else {
                    const response = await fetch(url,
                        {
                            method: "GET",
                            headers: { "Authorization": `Bearer ${localStorageToken}` }
                        }
                    )
                    if (!response.ok) {
                        throw new Error(`Request failed: ${response.status}`);
                    }

                    data = await response.json();

                    localStorage.setItem('jobs', JSON.stringify(data))  
                }
                setJobs(JSON.parse(data))
                setError(null)
                setIsPending(false)

            } catch (error) {
                if (error.name === "AbortError") {
                    console.log('the fetch was aborted')
                } else {
                    setIsPending(false)
                    setError('Could not fetch the data')
                }
            }
        }
        fetchData()
    }, [])

    return { jobs, isPending, error }
}