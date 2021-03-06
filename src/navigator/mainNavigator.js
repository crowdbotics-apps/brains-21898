import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings158774Navigator from '../features/Settings158774/navigator';
import UserProfile158767Navigator from '../features/UserProfile158767/navigator';
import Settings158766Navigator from '../features/Settings158766/navigator';
import Settings158764Navigator from '../features/Settings158764/navigator';
import SignIn2158762Navigator from '../features/SignIn2158762/navigator';
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
Settings158774: { screen: Settings158774Navigator },
UserProfile158767: { screen: UserProfile158767Navigator },
Settings158766: { screen: Settings158766Navigator },
Settings158764: { screen: Settings158764Navigator },
SignIn2158762: { screen: SignIn2158762Navigator },
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
