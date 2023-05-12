import {
    View,
    Text,
    StyleSheet,
    Pressable
} from 'react-native';

const PostCard = props => {
    const { title, body, onPress } = props.data;

    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.body}>{body}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d9d5d4',
        borderColor: 'black',
        borderWidth: 1,
        margin: '2%',
        borderRadius: 20
    },
    titleContainer: {
        margin: '2%',
        padding: '2%'
    },
    title: {
        fontSize: 30,
        fontFamily: 'serif',
        fontWeight: 500,
        textAlign: 'center'
    },
    bodyContainer: {
        margin: '2%',
        padding: '2%'
    },
    body: {
        fontSize: 20,
        fontFamily: 'serif',
        textAlign: 'justify'
    }
});

export { PostCard };
