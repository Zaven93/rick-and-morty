import { useState } from 'react'
import axios from 'axios'

const useAxios = () => {
    const [data, setData] = useState(null)

    const sendRequest = async (url, options) => {
        try {
            const response = await axios(url, options)

            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return { data, sendRequest }
}

export default useAxios
