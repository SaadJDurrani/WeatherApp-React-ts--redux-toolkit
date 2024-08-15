import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { WeatherData } from '../../typings/JsonRes'
const Api_key="8c1f43252b8d89765b475bfd792e43ae"

export const weatherApi=createApi({
    reducerPath:"weatherApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://api.openweathermap.org/data/2.5/weather"}),
    endpoints:(builder)=>({
        getWeatherData:builder.query<WeatherData,string>({
            query:(city)=>`?q=${city}&appid=${Api_key}&units=metric`,
        })
    })
})

export const {useGetWeatherDataQuery}=weatherApi
