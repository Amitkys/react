fetch('https://dummyjson.com/todos')
.then(res => res.json())
.then(console.log);