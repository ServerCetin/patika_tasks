import {useUserMeta} from '../../context/UserMetaContext'
import {axios} from "axios";

export default function SelectCity() {
    const {setSelectedCityId} = useUserMeta()

    const cities = require('../../data/cities.json')

    return (
        <div className="p-4 bg-gray-100">
                <select name="selectedCity" className="border-2" onChange={(e) => setSelectedCityId(e.target.value)}>
                    {cities.map((city) =>{
                        return <option key={city.id} value={city.id}>{city.name}</option>
                    })}
                </select>
        </div>
    )
}