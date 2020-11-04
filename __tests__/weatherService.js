// jest.mock('../request');

import getWeather from '../src/services/weather';

// The assertion for a promise must be returned.
it('works with promises', async() => {
    const expectedData = {data:{
        request:{
            language: "en",
            query: "Melbourne, Australia",
            type: "City",
            unit: "m"}
        },
        location: {
            country: "Australia",
            lat: "-37.817",
            localtime: "2020-11-04 13:01",
            localtime_epoch: 1604494860,
            lon: "144.967",
            name: "Melbourne",
            region: "Victoria",
            timezone_id: "Australia/Melbourne",
            utc_offset: "11.0"
        },
        current: {
            cloudcover: 75,
            feelslike: 18,
            humidity: 88,
            is_day: "yes",
            observation_time: "02:01 AM",
            precip: 0,
            pressure: 1012,
            temperature: 18,
            uv_index: 6,
            visibility: 10,
            weather_code: 353,
            weather_descriptions: ["Light Rain Shower, Rain Shower"],
            weather_icons: ["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0009_light_rain_showers.png"],
            wind_degree: 240,
            wind_dir: "WSW",
            wind_speed: 28
        }

    }
    fetch = jest.fn(() => Promise.resolve());

    const data = await getWeather('Melbourne');
    expect(JSON.stringify(data)).toEqual(JSON.stringify(expectedData));
});