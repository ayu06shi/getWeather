import { Box, styled } from '@mui/material';
import Sunset from '../images/bg.jpg';
import Form from '../components/Form';
import Info from '../components/Info';
import { useState } from 'react';

const Component = styled(Box)({
    // background: '#fff3e0',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '65%'
})

const Image = styled(Box)({
    backgroundImage: `url(${Sunset})`,
    width: '27%',
    height: '80%',
    backgroundSize: 'cover',
    borderRadius: '20px 0 0 20px'

})

const InfoBox = styled(Box)({
    background: '#fff3e0',
})

const Home = () => {
    const [result, setResult] = useState({})
// in the above line, we cannot make h of home small, since 
// react will treat it like a dom tag

    return(
        // in mui, div wrapper is box (wrapper component)
        <Box>
        <Component>
            <Image></Image>
            <InfoBox style = {{ width: '73%', height: '80%'}}
            >
                <Form setResult = {setResult}/>
                <Info result = {result}/>
            </InfoBox>
        </Component>
        </Box>
    )
}

export default Home;

