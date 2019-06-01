import React from 'react';
import { 
    ActivityIndicator,
    View,
} from 'react-native';

const Loader = () => (
    <View style = {styles.container}>
        <ActivityIndicator
        color = '#bc2b78'
        size = "large"
        style = {styles.activityIndicator}/>
    </View>
);

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    }
}

export default Loader;