import axios from 'axios'

export const isInViewport = element => {}

export const fetcher = url => axios.get(url).then(res => res.data)