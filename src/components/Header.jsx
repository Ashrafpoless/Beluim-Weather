import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { FaHome } from 'react-icons/fa'

const Header = ({title}) => {
  return (
    <AppBar position='static' color='primary'>
        <Toolbar>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
            >
                <IconButton edge="start" color='inherit' aria-label='menu'>
                    <FaHome/>
                </IconButton>
                <Typography variant='h5' component="div" sx={{textAlign: "center"}}>
                    {title}
                </Typography>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;