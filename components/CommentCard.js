import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const CommentCard = props => {
    const { name, email, body } = props.data;

    return (
        <View style={styles.container}>
            <View style={styles.commentMaker}>
                <Text style={styles.textStressed}>{name}</Text>
                <Text style={styles.textStressed}>{'<' + email + '>'}</Text>
            </View>
            <Text style={styles.text}>{body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: '5%',
        marginBottom: '5%'
    },
    commentMaker: {
        flexDirection: 'row',
        alignContent: 'center',
        marginBottom: '5%',
    },
    text: {
        textAlign: 'justify',
        fontWeight: 500,
        fontFamily: 'serif',
        fontSize: 8,
    },
    textStressed: {
        fontSize: 10,
        flex: 1,
        fontStyle: 'italic',
        fontFamily: 'serif'
    }
});

export { CommentCard };
