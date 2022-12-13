
const init = {
        testData : () => {
        let dataz;
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => dataz = json)
        console.log(dataz)
        return dataz;
    }
}

