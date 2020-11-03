import React, {Component, useEffect, useState} from 'react';
import { StyleSheet, Text, View, BackHandler, TouchableOpacity, Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph,Divider } from 'react-native-paper';
import {WeatherImage_2} from '../../assets/index';
import { List } from 'react-native-paper';
import ForecastCard from '../forecast';
import getWeather from '../../services/weather';
import {WeatherData} from '../weather/Weather';

type MultiCityWeatherProps = {
    navigation: any;
}

export default function MultiCityWeather(props: MultiCityWeatherProps) {
    let data: WeatherData = {
            request:{type:'',query:'',language:'',unit:''},
            location:{
                name: '',
                country: '',
                region: '',
                lat: '',
                lon: '',
                timezone_id: '',
                localtime: '',
                localtime_epoch: 0,
                utc_offset: ''
            },
            current:{
                observation_time: '',
                temperature: 0,
                weather_code: 0,
                weather_icons: [],
                weather_descriptions: [],
                wind_speed: 0,
                wind_degree: 0,
                wind_dir: '',
                pressure: 0,
                precip: 0,
                humidity: 0,
                cloudcover: 0,
                feelslike: 0,
                uv_index: 0,
                visibility: 0,
                is_day: ''
            }
        };
    const [showWeather,setShowWeather] = useState(false);
    const [selectedCity,setSelectedCity] = useState('');
    const [forecast, setForecast] = useState(data);

    const getSelectedCityWeather = async(city: string) => {
        setShowWeather(true);
        setSelectedCity(city);
        const weatherData = await getWeather(city);
        data = weatherData.data;
        setForecast(data);
    }

    const cities = ['Surat','Sydney','London'];
    return(
        <View style={styles.container}>
            <div style={{width:'80%'}}>
                <Image source={WeatherImage_2} style={styles.backgroundImage} />
                
                {
                cities.map(function(city, index){
                    return (
                        <div key={index}>
                        <Button  onPress = {() => getSelectedCityWeather(city) } style={styles.btn} color='black' >Show weather for {city}</Button>
                        </div>
                    )
                  })
                }
                {showWeather && 
                (
                    <ForecastCard request={forecast.request} location={forecast.location} current={forecast.current} />
                )} 
                
            </div>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // opacity: 0.3
    },
    card:{
		backgroundColor:'#f3ccb1',
		borderWidth:0,
        borderRadius:20,
        marginBottom: '5%'
    },
    titleStyle: {
        textAlign: 'center'
    },
    timeView: {
        paddingBottom: '5%',
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center'
    },
    btnContent: {
        textTransform: 'none'
    },
    btn: {
        marginBottom: '10%',
        borderRadius: 8,
        backgroundColor: '#e64f16cf',

    }
});

