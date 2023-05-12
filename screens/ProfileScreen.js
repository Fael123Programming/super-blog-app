import React, { useState } from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Text,
    Image,
    Pressable,
    Linking
} from 'react-native';

const FAC_BTN_COLOR = '#0b098f';
const ON_FAC_BTN_COLOR = '#0b098fb3';
const TWI_BTN_COLOR = '#431ad9';
const ON_TWI_BTN_COLOR = '#431ad9b3';

const ProfileScreen = () => {
    const [facBtnColor, setFacBtnColor] = useState(FAC_BTN_COLOR);
    const [twiBtnColor, setTwiBtnColor] = useState(TWI_BTN_COLOR);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/profile.png')}
                    resizeMode='contain'
                    style={styles.image}       
                />
            </View>
            <View style={styles.biographyContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>Steve Jobs</Text>
                </View>
                <ScrollView contentContainerStyle={styles.textContainer}>
                    <Text style={styles.text}>
                        Steven Paul Jobs (February 24, 1955 - October 5, 2011) was an American business magnate, inventor, investor, and philanthropist. He was the co-founder, chairman, and CEO of Apple; the chairman and majority shareholder of Pixar; a member of The Walt Disney Company's board of directors following its acquisition of Pixar; and the founder, chairman, and CEO of NeXT. He was a pioneer of the personal computer revolution of the 1970s and 1980s, along with his early business partner and fellow Apple co-founder Steve Wozniak.
                        Jobs was born in San Francisco to a Syrian father and German-American mother. He was adopted shortly after his birth. Jobs attended Reed College in 1972 before withdrawing that same year. In 1974, he traveled through India seeking enlightenment before later studying Zen Buddhism. He and Wozniak co-founded Apple in 1976 to sell Wozniak's Apple I personal computer. Together the duo gained fame and wealth a year later with production and sale of the Apple II, one of the first highly successful mass-produced microcomputers. Jobs saw the commercial potential of the Xerox Alto in 1979, which was mouse-driven and had a graphical user interface (GUI). This led to the development of the unsuccessful Apple Lisa in 1983, followed by the breakthrough Macintosh in 1984, the first mass-produced computer with a GUI. The Macintosh introduced the desktop publishing industry in 1985 with the addition of the Apple LaserWriter, the first laser printer to feature vector graphics.
                        In 1985, Jobs was forced out of Apple after a long power struggle with the company's board and its then-CEO, John Sculley. That same year, Jobs took a few Apple employees with him to found NeXT, a computer platform development company that specialized in computers for higher-education and business markets. In addition, he helped to develop the visual effects industry when he funded the computer graphics division of George Lucas's Lucasfilm in 1986. The new company was Pixar, which produced the first 3D computer-animated feature film Toy Story (1995) and went on to become a major animation studio, producing over 25 films since.
                        In 1997, Jobs returned to Apple as CEO after the company's acquisition of NeXT. He was largely responsible for reviving Apple, which was on the verge of bankruptcy. He worked closely with English designer Jony Ive to develop a line of products that had larger cultural ramifications, beginning with the "Think different" advertising campaign and leading to the Apple Store, App Store (iOS), iMac, iPad, iPod, iPhone, iTunes, and iTunes Store. In 2001, the original Mac OS was replaced with the completely new Mac OS X (later known as macOS), based on NeXT's NeXTSTEP platform, giving the operating system a modern Unix-based foundation for the first time. In 2003, Jobs was diagnosed with a pancreatic neuroendocrine tumor. He died of respiratory arrest related to the tumor in 2011, at the age of 56, with Tim Cook succeeding him as CEO of Apple. In 2022, he was posthumously awarded the Presidential Medal of Freedom. 
                    </Text>
                </ScrollView>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable
                    onPress={() => Linking.openURL('https://www.facebook.com/apple')}
                    onPressIn={() => setFacBtnColor(ON_FAC_BTN_COLOR)}
                    onPressOut={() => setFacBtnColor(FAC_BTN_COLOR)}
                    style={[styles.buttonLeft, {backgroundColor: facBtnColor}]}
                >
                    <Text style={styles.buttonText}>Facebook</Text>
                </Pressable>
                <Pressable
                    onPress={() => Linking.openURL('https://twitter.com/apple')}
                    onPressIn={() => setTwiBtnColor(ON_TWI_BTN_COLOR)}
                    onPressOut={() => setTwiBtnColor(TWI_BTN_COLOR)}
                    style={[styles.buttonRight, {backgroundColor: twiBtnColor}]}
                >
                    <Text style={styles.buttonText}>Twitter</Text>
                </Pressable>
            </View>
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
        width: 150,
        height: 150,
        borderRadius: 500,
        borderColor: 'black',
        borderWidth: 1
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
        marginVertical: '10%'
    },
    biographyContainer: {
        flex: 3,
        backgroundColor: '#86cffc',
        paddingBottom: '10%'
    },
    name: {
        fontFamily: 'serif',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    nameContainer: {
        marginVertical: '5%'
    },
    text: {
        fontFamily: 'serif',
        fontSize: 20,
        textAlign: 'justify'
    },
    textContainer: {
        margin: '5%',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonLeft: {
        flex: 1,
        alignItems: 'center'        
    },
    buttonRight: {
        flex: 1,
        alignItems: 'center'
    },
    buttonText: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: 'white',
        flex: 1,
        verticalAlign: 'middle'
    }
});

export { ProfileScreen };
