function getAPI(url) {
    return fetch(url)
.then(response => response.json())
.then(data => {
        return data;
})
.catch(error => console.error(error));
} 