import React from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    Platform,
    StatusBar
} from 'react-native';

const Header = (props) => (
    <View style={styles.header}>
        <SafeAreaView>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/logo.png')}
                />
                <View style={styles.children}>
                    {props.children}
                </View>
            </View>
        </SafeAreaView>
    </View>
);

const styles = {
    header: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    logoContainer: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: 'row',
        backgroundColor: '#fcfcfc',
        borderBottomColor: 'rgba(83,90,96,0.1)',
        borderBottomWidth: 1, 
    },
    logo: {
        width: 80,
        height: 25,
        resizeMode: 'contain'
    },
    children: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
}

export default Header;