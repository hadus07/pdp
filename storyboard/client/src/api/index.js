import { setUser, defaultUser } from '../store'

export const Api = (url, data = null, type = 'get') => {

    let opts = {
        method: type,
        headers: {'Content-type': 'application/json'},
    }

    if (data) {
        opts.body = JSON.stringify(data)
    }

    return fetch(`http://localhost:4000/api/${url}`, opts)
        .then(res => res.json()).then(res => res)
        .catch(err => {
            if(err.error === 'invalid_token' || err.error === 'token_expired') {
                setUser(defaultUser)
            }
        })

}