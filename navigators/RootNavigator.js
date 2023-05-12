import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { PostNavigator } from './PostNavigator';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ContactScreen } from '../screens/ContactScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) =>({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name == 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name == 'PostNavigator') {
                            iconName = focused ? 'list' : 'list-outline';
                        } else if (route.name == 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                        } else {
                            iconName = focused ? 'send' : 'send-outline';
                        }
                        return <Ionicons name={iconName} size={size} color='black'/>;
                    },
                    tabBarActiveBackgroundColor: 'white',
                    tabBarInactiveBackgroundColor: 'white',
                    headerShown: false,
                    tabBarShowLabel: true
            })}
            >
                <Tab.Screen name='Home' component={HomeScreen}/>
                <Tab.Screen 
                    name='PostNavigator' 
                    component={PostNavigator}
                    options={{tabBarLabel: 'Posts'}}
                />
                <Tab.Screen name='Profile' component={ProfileScreen}/>
                <Tab.Screen name='Contact' component={ContactScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export { RootNavigator };
