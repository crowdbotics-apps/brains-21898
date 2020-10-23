import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile158710Navigator from '../features/UserProfile158710/navigator';
import Maps158691Navigator from '../features/Maps158691/navigator';
import Settings158669Navigator from '../features/Settings158669/navigator';
import Settings158654Navigator from '../features/Settings158654/navigator';
import NotificationList158653Navigator from '../features/NotificationList158653/navigator';
import Maps158652Navigator from '../features/Maps158652/navigator';
import UserProfile158651Navigator from '../features/UserProfile158651/navigator';
import Maps158632Navigator from '../features/Maps158632/navigator';
import Settings158610Navigator from '../features/Settings158610/navigator';
import Settings158595Navigator from '../features/Settings158595/navigator';
import NotificationList158594Navigator from '../features/NotificationList158594/navigator';
import Maps158593Navigator from '../features/Maps158593/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile158710: { screen: UserProfile158710Navigator },
Maps158691: { screen: Maps158691Navigator },
Settings158669: { screen: Settings158669Navigator },
Settings158654: { screen: Settings158654Navigator },
NotificationList158653: { screen: NotificationList158653Navigator },
Maps158652: { screen: Maps158652Navigator },
UserProfile158651: { screen: UserProfile158651Navigator },
Maps158632: { screen: Maps158632Navigator },
Settings158610: { screen: Settings158610Navigator },
Settings158595: { screen: Settings158595Navigator },
NotificationList158594: { screen: NotificationList158594Navigator },
Maps158593: { screen: Maps158593Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
