import axios from 'axios'

const API_URL = 'http://192.168.1.8:8080'

export function fetchOrders() {
    return axios(`${API_URL}/orders`)
}