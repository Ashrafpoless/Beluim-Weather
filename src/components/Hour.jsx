import { Paper, Box, Typography } from '@mui/material';
import { FaLongArrowAltDown, FaLongArrowAltUp, FaEquals } from 'react-icons/fa';
import PropTypes from 'prop-types'
import { BsCloudRain, BsEmojiSunglasses, BsFillCloudRainHeavyFill, BsSun } from 'react-icons/bs';

const Hour = ({hourData}) => {
    const getWeatherIcon = (temp)=>{
        if(temp < 10){
            return <BsFillCloudRainHeavyFill size={32} color='black'/>
        }else if(temp <15){
            return <BsCloudRain size={32} color='white'/>
        }else if(temp < 20){
            return <BsSun size={32} color='white'/>
        }else {
            return <BsEmojiSunglasses size={32} color='yellow'/>
        }
    }; 

    const getTrendIcon = (arrow) =>{
        if(arrow === "up"){
            return <FaLongArrowAltUp size={16} color='green'/>
        }else if(arrow === "down"){
            return <FaLongArrowAltDown size={16} color='red'/>
        }else {
            return <FaEquals size={16} color='white'/>
        }
    }

    return (
        <Paper
            elevation={3}
            sx={{
                padding: 2,
                margin: 1,
                color: 'white',
                backgroundColor: '#333333'        
            }}
        >
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Typography variant='h6'>{hourData.hours}</Typography>
                <Box display={"flex"} alignItems={"center"} mt={1}>
                    <Box mr={1}>{getWeatherIcon(hourData.temp)}</Box>
                    <Box mr={1}>{getTrendIcon(hourData.arrow)}</Box>
                    <Typography variant='body1'>{hourData.temp}°C</Typography>
                </Box>
            </Box>
        </Paper>
    )
}

Hour.propTypes = {
    hourData: PropTypes.shape({
        hours: PropTypes.string.isRequired,
        temp : PropTypes.string.isRequired,
        arrow : PropTypes.string.isRequired
    }).isRequired
}

export default Hour