import React from 'react';
import {TAB_ROUTES} from './routes';
import Home from '../../screens/Home';
import Search from '../../screens/Search';
import NewAndHot from '../../screens/NewAndHot';
import Downloads from '../../screens/Downloads';
import MySpace from '../../screens/MySpace';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../utils/constants';
import HomeIcon from '../../assets/images/svg/bottom-tab/tab-home.svg';
import SearchIcon from '../../assets/images/svg/bottom-tab/tab-search.svg';
import NewAndHotIcon from '../../assets/images/svg/bottom-tab/tab-new-hot.svg';
import DownloadsIcon from '../../assets/images/svg/bottom-tab/tab-downloads.svg';
import MySpaceIcon from '../../assets/images/svg/bottom-tab/tab-my-space.svg';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.WHITE,
        tabBarInactiveTintColor: COLORS.HIGHLIGHT_COLOR,
        tabBarLabelStyle: {fontWeight: 'bold', marginBottom: 5},
        tabBarStyle: {backgroundColor: COLORS.SLIGHT_BLACK},
      }}>
      <Tab.Screen
        name={TAB_ROUTES.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <HomeIcon
              width={30}
              height={22}
              stroke={focused ? COLORS.WHITE : COLORS.HIGHLIGHT_COLOR}
              strokeWidth={0}
fill={focused ? COLORS.WHITE : COLORS.HIGHLIGHT_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_ROUTES.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <SearchIcon
              width={30}
              height={22}
              stroke={focused ? COLORS.WHITE : COLORS.HIGHLIGHT_COLOR}
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_ROUTES.NEW}
        component={NewAndHot}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <NewAndHotIcon
              width={30}
              height={22}
              stroke={focused ? COLORS.WHITE : COLORS.HIGHLIGHT_COLOR}
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_ROUTES.DOWNLOADS}
        component={Downloads}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <DownloadsIcon
              width={30}
              height={22}
              stroke={focused ? COLORS.WHITE : COLORS.HIGHLIGHT_COLOR}
              strokeWidth={focused ? 1.5 : 1}
            />
          ),
        }}
      />
      <Tab.Screen
        name={TAB_ROUTES.MY_SPACE}
        component={MySpace}
        options={{
          title:"My Space",
          tabBarIcon: ({focused, size, color}) => (
            <View  style={styles.mySpaceWrap}>
            <MySpaceIcon
            style={styles.mySpaceIcon}
              width={22}
              height={20}
              rotation={-10}
              fill={COLORS.THEME_BLUE}
            />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  mySpaceWrap:{
    position:'relative',
    width:20,
    height:20,
    borderRadius:100,
    backgroundColor:COLORS.THEME_DARK_BLUE,
    overflow:'hidden',
  },
  mySpaceIcon:{
    position:'absolute',
    bottom:-3,
    right:-3,
  }
})
