import React from 'react';
import {
    View,
    Text,
    ImageBackground
} from 'react-native';

const Category = (props) => (
    <ImageBackground
        style={styles.wrapper}
        source={{uri: props.background_image}}
    >
        <Text style={styles.genre}>{props.genres[0]}</Text>
    </ImageBackground>
);

const styles = {
    wrapper: {
        width: 250,
        height: 110,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'        
    },
    genre: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 30,
        shadowColor: 'rgba(0, 0, 0, .75)',
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowRadius: 0,
    }
};

export default Category