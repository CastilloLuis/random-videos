import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';


export default class NotFound extends Component {

    goBack = () => this.props.onPress();
    
    render() {
        return (
            <View style={styles.container}>

                <View>
                    <Text style={styles.emoji}>🎥</Text>
                </View>
                <View>
                    <Text style={styles.text}>Not Found</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => this.goBack()} style={styles.button}>
                        <Text style={styles.buttonText}>IR ATRAS</Text>
                    </TouchableOpacity>
                </View>                    

            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    },
    emoji: {
        fontSize: 40
    },
    button: {
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',        
        backgroundColor: '#70b124',
        padding: 10,
        fontSize: 14,
        borderRadius: 5,
        overflow: 'hidden',
    }
}

