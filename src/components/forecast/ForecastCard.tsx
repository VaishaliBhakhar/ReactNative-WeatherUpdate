import React, {Component} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph,Divider } from 'react-native-paper';
import { WeatherData } from '../weather/Weather';


export default function ForecastCard(props: WeatherData) {
        const { request, location, current} = props;
        const splitLocalTime = location.localtime.split(" ");
        const localTime = splitLocalTime[1];
        return (
            <Card style={styles.card}>
                <Card.Title title={location.name} subtitle="Weather Update" subtitleStyle={styles.titleStyle} titleStyle={styles.titleStyle} />
                <Card.Content>
                 	<View style={styles.timeView}>
                        <Image style={{width:100, height:100}} source={{uri: current.weather_icons[0]}} />
                        <Text style={styles.timeText}>{localTime}</Text>
                    </View>
                    <Divider />
                    <View style={styles.degreeView}>
                        <Text style={styles.weatherText}>{current.weather_descriptions[0]}</Text>
                        <Text style={styles.temperatureText}>{current.temperature}<span>&#8451;</span></Text>
                    </View>
                </Card.Content>
            </Card>
		);
}

const styles = StyleSheet.create({
	card:{
		backgroundColor:'#f3ccb1',
		borderWidth:0,
		borderRadius:20
	},
    titleStyle: {
        textAlign: 'center'
    },
    timeText: {
        fontSize: 50,
        fontWeight: 'bold'
    },
    timeView: {
        paddingBottom: '5%',
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center'
    },
    degreeView: {
        paddingTop: '5%',
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center'
    },
    weatherText: {
        color: '#00000085',
        fontWeight: 'bold'
    },
    temperatureText: {
        color: '#00000085',
        fontWeight: 'bold'
    }
});
