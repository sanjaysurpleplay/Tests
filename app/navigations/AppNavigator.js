import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SongsScreen from '../screens/songs/Songs.Container';
import SplashScreen from '../screens/splash/Splash';
import SongsDetailsScreen from '../screens/songsdetails/SongsDetailsScreen';
const Auth = createStackNavigator({
    SongsScreen: {
      screen: SongsScreen,
      navigationOptions: {
        headerShown: true,
        title: 'SONGS',
        headerTintColor: '#FFFFFF',
        headerStyle: {
            backgroundColor: '#427FC4'
          }
      },
    },
    SongsDetailsScreen: {
        screen: SongsDetailsScreen,
        navigationOptions: {
          headerShown: true,
          title: 'SONGS DETAILS',
          headerTintColor: '#FFFFFF',
          headerStyle: {
              backgroundColor: '#427FC4'
            }
        },
      },
    
  });
  const AppNavigators = createSwitchNavigator({ 
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Auth: {
      screen: Auth,
    },
    
  });
  const AppNavigator = createAppContainer(AppNavigators);
  export default AppNavigator;
 