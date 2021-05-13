import axios from 'axios'

export function getMessage() {
    return axios.get('http://localjost:3000/message').then((result) => {
        return result.data
    })
}