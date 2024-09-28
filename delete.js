import axios from "axios";

axios.get('https://backend-ddtz.onrender.com/notification').then((res) => console.log(res.data))