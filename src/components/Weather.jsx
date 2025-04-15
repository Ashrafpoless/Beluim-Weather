import { Container, Box } from '@mui/material';
import PropTypes from 'prop-types';

import Day from './Day';

import organizeWeather from '../utils/organizeWeather';


const Weather = ({ weather }) => {
    const organizedWeather = organizeWeather(weather);

    return (
        <Container>
            {Object.entries(organizedWeather).map(([day, dayWeather], index)=>(
                <Box key={index} mb={4}>
                    <Day  day={day} dayOfWeek={dayWeather.dayOfWeek} dayWeather={dayWeather.data}/>
                </Box>

            ))}
        </Container>
    )
};

Weather.propTypes = {
    weather: PropTypes.object.isRequired
};

export default Weather;
