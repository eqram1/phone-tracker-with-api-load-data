fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

// async not written mistake in function before of try
try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
catch {

}

// document.getElementById('abc');
// synchronous and asynchronous
console.log(1);
setTimeout(() => {
    console.log(2);
}, 3000);
console.log(3);
console.log(13);
console.log(32);
console.log(33);
console.log(34);