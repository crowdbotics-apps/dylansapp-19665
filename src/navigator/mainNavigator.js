import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList92006Navigator from '../features/ArticleList92006/navigator';
import ArticleList92005Navigator from '../features/ArticleList92005/navigator';
import ArticleList92004Navigator from '../features/ArticleList92004/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList92006: { screen: ArticleList92006Navigator },
ArticleList92005: { screen: ArticleList92005Navigator },
ArticleList92004: { screen: ArticleList92004Navigator },

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
