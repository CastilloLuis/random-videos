import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';

const Close = (props) => (
    
    <TouchableOpacity
        onPress={props.onPress}
        style={styles.container}
    >
    <Text style={styles.button}>X</Text>
    </TouchableOpacity>
);

const styles = {
    button: {
        fontWeight: 'bold',
        color: 'white',
    },
    container: {
        backgroundColor: '#14b739',
        borderRadius: 12,
        width: 25,
        height: 25,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

export default Close;

