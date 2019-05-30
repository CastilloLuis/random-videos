import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar
} from 'react-native';

const Header = (props) => (
    <View style={styles}>
        <SafeAreaView>
            <Text>Header</Text>
        </SafeAreaView>
    </View>
);

const styles = {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
}

export default Header;