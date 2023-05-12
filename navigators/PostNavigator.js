import { PostScreen } from '../screens/PostScreen';
import { PostDetailsScreen } from '../screens/PostDetailsScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const PostNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Posts'
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name='Posts' component={PostScreen}/>
            <Stack.Screen name='PostDetails' component={PostDetailsScreen} options={{headerShown: true, headerTitle: ''}}/>
        </Stack.Navigator>
    );
}

export { PostNavigator };
