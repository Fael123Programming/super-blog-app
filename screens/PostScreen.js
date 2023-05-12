import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet
} from 'react-native';
import { getPosts } from '../service';
import { PostCard } from '../components/PostCard';

const PostScreen = ({navigation}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(posts => setPosts(posts));
    }, []);

    
    const renderItem = ({item}) => {
        return <PostCard data={{...item, onPress: () => navigation.navigate('PostDetails', item)}}/>
    };

    return (
        <View
            style={styles.container}
        >
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Posts</Text>
            </View>
            <FlatList
                data={posts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.listContainer}
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
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'serif'
    },
    titleContainer: {
        marginTop: '10%',
        marginBottom: '5%'
    },
    listContainer: {
        width: '90%',
    }
});

export { PostScreen };
