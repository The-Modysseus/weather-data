export default function fetchWeatherData(){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b8642f6a6885b73b64fe78b8c6e4631e';
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(err => console.log(err));
}