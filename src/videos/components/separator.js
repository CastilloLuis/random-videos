import React from 'react';
import {
    View,
    Text
} from 'react-native';

const Separator = (props) => (
    <View style={styles.separator} />
);

const styles = {
    separator: {
        borderTopWidth:  1,
        borderTopColor: '#eaeaea'
    }
}

export default Separator;

