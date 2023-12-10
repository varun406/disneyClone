import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../../../screens/Detail';
import BottomNavigator from '../../BottomTab';
import { HOME_STACK_ROUTES } from './routes';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name={HOME_STACK_ROUTES.TAB_NAVIGATOR} component={BottomNavigator} />
      <Stack.Screen name={HOME_STACK_ROUTES.DETAIL} component={Detail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
