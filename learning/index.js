

fetch('http://localhost:5000/get-data').then((res) => {
    return res.json();
}).then((emplyObj) => {console.log(emplyObj)});