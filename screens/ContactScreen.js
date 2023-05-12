import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
    ScrollView,
    Dimensions,
    Alert
} from 'react-native';

const valid = (name, email, msg) => {
    if (name.length > 0) {
        let regex = /[\w.-]+@[\w-]+(\.[a-z]+)+/;
        if (email.length > 0 && regex.test(email)) {
            if (msg.length > 0) {
                return true;
            } else {
                Alert.alert('Invalid message!');
            }
        } else {
            Alert.alert('Invalid e-mail!');
        }
    } else {
        Alert.alert('Invalid name!');
    }
    return false;
}

const ContactScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const [letters, setLetters] = useState(0);

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.formContainer}
                keyboardDismissMode='on-drag'
            >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Talk to Me</Text>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder='Name'
                    keyboardType='ascii-capable'
                    defaultValue={name}
                    maxLength={100}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='E-mail'
                    defaultValue={email}
                    keyboardType='email-address'
                    maxLength={150}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.largeTextInput}
                    placeholder='Message'
                    textAlignVertical='top'
                    keyboardType='ascii-capable'
                    defaultValue={msg}
                    multiline={true}
                    maxLength={500}
                    onChangeText={(text) => {
                            setMsg(text);
                            setLetters(text.length);
                        }
                    }
                />
                <Text style={styles.letterCounter}>{letters}/500</Text>
                <Pressable
                    onPress={() => {
                            if (valid(name, email, msg)) {
                                Alert.alert('Message sent successfully!');
                                setName('');
                                setEmail('');
                                setMsg('');
                                setLetters(0);                    
                            }
                        }
                    }
                >
                    <Text style={styles.buttonText}>Send</Text>
                </Pressable>
            </ScrollView>
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
    formContainer: {
        flex: 1,
        alignItems: 'center',
        padding: '5%',
        marginTop: '30%',
    },
    titleContainer: {
        marginBottom: '30%'
    },
    title: {
        fontFamily: 'serif',
        fontSize: 30,
        fontWeight: 'bold'
    },
    textInput: {
        width: .73 * Dimensions.get('window').width,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: '3%',
        marginVertical: '2%'
    },
    largeTextInput: {
        width: .73 * Dimensions.get('window').width,
        height: 300,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: '3%',
        marginVertical: '2%'
    },
    letterCounter: {
        alignSelf: 'flex-end',
        fontFamily: 'Roboto',
        fontSize: 13
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontSize: 20,
        textAlign: 'center'
    }
});

export { ContactScreen };
