import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/ipb.png')}
                style={styles.image}
                resizeMode='contain'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    image: {
        width: '50%',
        height: '30%'
    }
});

export { HomeScreen };
