const API_ROOT = `http://localhost:3001/`;

const token = localStorage.getItem('token');

const headers = {
    'Content-Type': 'application/json', 
    Accepts: 'application/json',
    Authorization: token
}