
function Weather({info}){
    function imgs(){
        let id= info?.weather[0]?.id;
        if(id == 800){
            return `http://openweathermap.org/img/wn/01d@2x.png`;
        }else if(id >= 200 && id <= 232){
            return `http://openweathermap.org/img/wn/11d@2x.png`;  
        }else if(id >= 600 && id <= 622){
            return `http://openweathermap.org/img/wn/13d@2x.png`;
        }else if(id >= 701 && id <= 781){
            return `http://openweathermap.org/img/wn/50d@2x.png`;
        }else if(id >= 801 && id <= 804){
            return `http://openweathermap.org/img/wn/02d@2x.png`;
        }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
            return `http://openweathermap.org/img/wn/10d@2x.png`;
        }  

    }
    return(
        <>
        <div className="card">
            <div className="name">
                <h2>{info?.name}</h2>
            </div>
            {/* <hr /> */}
            <div className="temp">
                <h2>{((info?.main?.temp)-273.15).toFixed(2)} °C</h2>
                <p><img src={imgs()} alt="img" className="img"/></p>
                <p>{info?.weather[0]?.description}</p>
                <p>{info?.name},{info?.sys?.country}</p>
            </div>
            {/* <hr /> */}
            <div className="foot">
                <div className="feel">
                    <p className="bi bi-thermometer-sun">{info?.main?.humidity}%</p>
                </div>
                {/* <hr /> */}
                <div className="hum">
                    <p className="bi bi-moisture">{info?.main?.feels_like}</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Weather;