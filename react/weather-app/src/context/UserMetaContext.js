import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const apiInfos = {
    path: 'https://api.openweathermap.org/data/2.5/',
    token: process.env.API_TOKEN
}

const UserMetaContext = createContext()

export const UserMetaProvider = ({children}) => {
    const [selectedCityId, setSelectedCityId] = useState(localStorage.getItem('selectedCityId') || 34)
    const [cityWeatherData, setCityWeatherData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const citiesData = require('../data/cities.json')

    useEffect(() => {
        localStorage.setItem('selectedCityId', selectedCityId)
    }, [selectedCityId,cityWeatherData])

    const values = {
        selectedCityId, setSelectedCityId, cityWeatherData, setCityWeatherData, isLoading, setIsLoading
    }

    useEffect(() => {
        setIsLoading(true)
        const cityData = citiesData.filter(city => city['id'] === parseInt(selectedCityId))
        const apiString = `${apiInfos.path}onecall?lat=${cityData[0].latitude}&lon=${cityData[0].longitude}&units=metric&exclude=current,minutely,hourly,alerts&lang=en&appid=${apiInfos.token}`
        axios(apiString)
            .then(async res => {
                setCityWeatherData(await (res.data.daily))
            })
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false))
    }, [selectedCityId])

    return <UserMetaContext.Provider value={values}>{children}</UserMetaContext.Provider>
}

export const useUserMeta = () => useContext(UserMetaContext)

