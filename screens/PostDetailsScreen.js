import React, { useState, useEffect } from 'react';
import {
    FlatList,
    View,
    StyleSheet,
    Text
} from 'react-native';
import { CommentCard } from '../components/CommentCard';
import { getComments } from '../service';

const PostDetailsScreen = ({ navigation, route }) => {
    const { id, title, body } = route.params;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments(id, comments => setComments(comments));
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.backgroundColorView}>
                <Text style={styles.title}>Post Details</Text>
                <View style={styles.innerContainer}>
                    <Text style={styles.subtitle}>Title</Text>
                    <Text>{title}</Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.subtitle}>Body</Text>
                    <Text>{body}</Text>
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.subtitle}>Comments</Text>
                    <FlatList
                        data={comments}
                        renderItem={({item}) => <CommentCard data={item}/>}
                        keyExtractor={item => item.id}
                        style={{height: '40%'}}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignitems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    title: {
        textAlign: 'center',
        fontFamily: 'serif',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: '5%'
    },
    subtitle: {
        fontFamily: 'serif',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: '5%'
    },
    innerContainer: {
        marginHorizontal: '5%'
    },
    backgroundColorView: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: '#d9d5d4'
    }
});

export { PostDetailsScreen };
