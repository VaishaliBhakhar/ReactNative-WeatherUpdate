import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import ForecastCard from '../forecast';
import { ActivityIndicator, Colors, Button } from 'react-native-paper';
import {WeatherImage_2} from '../../assets/index';
import getWeather from '../../services/weather';
    
  
type WeatherRequest = {
    type: string,
    query: string,
    language: string,
    unit: string
}
  
type WeatherLocation = {
    name: string,
    country: string,
    region: string,
    lat: string,
    lon: string,
    timezone_id: string,
    localtime: string,
    localtime_epoch: number,
    utc_offset: string
}
  
type WeatherCurrent = {
    observation_time: string,
    temperature: number,
    weather_code: number,
    weather_icons: Array<string>,
    weather_descriptions: Array<string>,
    wind_speed: number,
    wind_degree: number,
    wind_dir: string,
    pressure: number,
    precip: number,
    humidity: number,
    cloudcover: number,
    feelslike: number,
    uv_index: number,
    visibility: number,
    is_day: string
}
  
export type WeatherData = {
    request: WeatherRequest,
    location: WeatherLocation,
    current: WeatherCurrent
}

type WeatherProps = {
    forecast: WeatherData,
    error: string,
    loading: boolean,
}

type testProps = {
    forecast: WeatherData,
    error: boolean,
    errMsg: string,
    loading: boolean,
    navigation: {}
}
  
export default class Weather extends Component<{},testProps> {
    constructor(props: WeatherProps) {
      	super(props);
          
      	this.state = {
      		forecast: {
                  request:{type:'',query:'',language:'',unit:''},
                  location:{name: '',
                    country: '',
                    region: '',
                    lat: '',
                    lon: '',
                    timezone_id: '',
                    localtime: '',
                    localtime_epoch: 0,
                    utc_offset: ''},
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
                    }},
              error:false,
              errMsg:'',
              loading: true,
              navigation: this.props.navigation
        };
    }
    
    async componentDidMount() {
        const getData = await getWeather('Melbourne');
        const weatherData = getData.data;
        if(weatherData.success === false ) {
            this.setState((prevState, props) => ({
                error: true,
                errMsg: weatherData.error,
                loading: false
            }));
        } else {
            this.setState((prevState, props) => ({
                error: false,
                forecast: weatherData,
                loading: false
            }));
        }
    }

    goToMultiCityScreen = () =>
    {
        this.props.navigation.navigate('MultiCityWeather');
        
    }

    render() {

        const { forecast, error, loading } = this.state;
        
      return (
        <div style={{width:'80%'}}>
            {/* // <ImageBackground source={WeatherImage_2}  style={styles.image} > */}
            <Image source={WeatherImage_2} style={styles.backgroundImage} />
              {
                  Object.keys(forecast).length > 0 && loading === false && !error ?
                  (
                    <div>
                        <ForecastCard request={forecast.request} location={forecast.location} current={forecast.current} />
                        <Button testID="all-cities-weather" onPress = { this.goToMultiCityScreen } style={styles.btn} color='black' >Show weather for other cities</Button>
                            
                    </div>
                  )
                  :
                  (loading ? <ActivityIndicator animating={true} color={Colors.white} size={'large'} /> : <span>Something went wrong!</span>)
              }
            {/* //   </ImageBackground> */}
        </div>
      );
    }
}
  
const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        // width: "100%"
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        // opacity: 0.3
    },
    btn: {
        marginTop: '10%',
        borderRadius: 8,
        backgroundColor: '#e64f16cf',

    }
});