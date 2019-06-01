import React from 'react';
import {
    View,
    Text
} from 'react-native';

const SuggestionListLayout = (props) => (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        {props.children}
    </View>
);

const styles = {
    container: {
        paddingVertical: 10,
        flex: 1
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 10,
        fontWeight: 'bold'
    }
}

export default SuggestionListLayout;

