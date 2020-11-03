const getWeather = async(city: string) =>{
    return new Promise((resolve, reject) => {
        let url = `http://api.weatherstack.com/current?access_key=3f6768a4e195e376101cd61b9a4b194d&query=${city}`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            resolve({data:data});
        })
        .catch(error => {
            console.log(error);
            reject(error);
        })
    })
    
}

export default getWeather;