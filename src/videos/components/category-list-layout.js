import React from 'react';
import {
    View,
    Text,
    ImageBackground,
} from 'react-native';

const CategoryListLayout = (props) => (
    <ImageBackground 
        source={require('../../../assets/backgronund.png')}
        style={styles.container}
    >
        <Text style={styles.title}>{props.title}</Text>
        {props.children}
    </ImageBackground>
);

const styles = {
    container: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold'
    }
}

export default CategoryListLayout;

