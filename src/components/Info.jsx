import { Box, Typography, styled } from "@mui/material";
import {LocationOn, Thermostat, Opacity, Brightness5, Brightness6, Dehaze, Cloud} from '@mui/icons-material';
// import {Brightness5} from '@mui/icons-material/Brightness5';
// import {Brightness6} from '@mui/icons-material/Brightness6';
// import DehazeIcon from '@mui/icons-material/Dehaze';
const Row = styled(Typography)(({ theme }) => ({
    padding: 8,
    fontSize: 16,
    letterSpacing: 1.3,
    display: 'flex',
    '& > svg': {
        marginRight: 6
    },
    [theme.breakpoints.up('xs')]: {
        padding: 3,
        margin: 6,
        fontSize: 12,
    },
    [theme.breakpoints.up('sm')]: {
        padding: 4,
        margin: 20,
        fontSize: 14,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 16,
    },
}))

const Error = styled(Typography)({
    color: '#e67e22',
    margin: 35,
    padding: 10
})

const Info = ( {result} ) => {
    return (
        // Object.keys(rersult) if empty result: returns empty array, else returns full
        result && Object.keys(result).length > 0 ?
        <Box style = {{ margin: {sm: '30px 60px', xs: '20px 30px'}}} 
            // sx={(theme) => ({
            //     [theme.breakpoints.up('sm')]: { fontSize: 12 },
            // })}
        >
            <Row><LocationOn/>Location: {result.name}, {result.sys.country}</Row>
            <Row><Thermostat/>Termperature: {result.main.temp}</Row>
            <Row><Opacity />Humidity: {result.main.humidity}</Row>
            <Row><Brightness5/>Sunrise: {new Date(result.sys.sunrise*1000).toLocaleTimeString()}</Row>
            <Row><Brightness6/>Sunset: {new Date(result.sys.sunset*1000).toLocaleTimeString()}</Row>
            <Row><Dehaze />Humidity: {result.weather[0].main}</Row>
            <Row><Cloud/>Clouds: {result.clouds.all}%</Row>
        </Box>
        :
        <Error>Please enter your city name</Error>
    )
}


export default Info;