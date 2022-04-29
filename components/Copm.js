import React from 'react';
import {StatusBar ,Text, View} from 'react-native';
import styles from './styles';
import Box from './box/Box.js';
import Column from './Tods/Column';
import Row from './Tods/Row.js';

function Copm() {
    return (
        <View style = {styles.container}>
            <StatusBar hidden={true} />
            <Row>
                <Column>
                    <Box> 1 </Box>
                    <Box> 2 </Box>
                    <Box> 3 </Box>
                </Column>   
                <Column>
                    <Box> 1 </Box>
                    <Box> 2 </Box>
                    <Box> 3 </Box>
                </Column>   
            </Row>    

            <Row>
                <Column>
                    <Box> 4 </Box>
                    <Box> 5 </Box>
                </Column>   
                <Column>
                    <Box> 4 </Box>
                    <Box> 5 </Box>
                </Column>   
            </Row>    
        </View>
    );
}

export default Copm;
