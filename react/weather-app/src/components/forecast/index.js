import Weather from "./weather";
import {useUserMeta} from '../../context/UserMetaContext'

export default function Forecast() {
    const {cityWeatherData} = useUserMeta()

    return (
        <div className="pt-4">
            {cityWeatherData !== null && cityWeatherData.map((w,index) =>{
                    return (<Weather key={index} isToday={index === 0} weather={w.weather[0].id}
                                     min={w.temp.min} max={w.temp.max} dayNumber={(index + new Date().getDay())%7}></Weather>)
                }) }
        </div>
    )
}