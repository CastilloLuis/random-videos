import React from 'react';
import {
    View,
    Text
} from 'react-native';

const Separator = (props) => (
    <View 
        style={separatorStyles(props)} 
    />
);

const separatorStyles = ({ horizontal }) => {
    return {
        borderTopWidth: 1,
        borderTopColor: '#eaeaea', 
        marginLeft: horizontal ? 10 : 0
    }
}

export default Separator;

