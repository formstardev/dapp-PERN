import axios from "axios";

const API_URL = "http://localhost:8080/api";
const user = localStorage.getItem('user');
const parsedUser = JSON.parse(user);
const email = parsedUser.email;
console.log('emailjsdaflkjsdafsdklfjklsdjflksdjflksdjflkjsdlfjsl', email)
const fetchData = async () => {
    console.log('emailssssssssssssssss',email)

    return new Promise(function(resolve, reject) {
        axios.get(API_URL + `/userdata/${email}`)
            .then(result => {
                resolve(result)
            }).catch(err => {
                reject(err)
            })
        })
    };

export default { fetchData };
