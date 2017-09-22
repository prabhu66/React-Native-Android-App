import React from 'react';
import { Platform } from 'react-native';
import { StackNavigator,TabNavigator, DrawerNavigator } from 'react-navigation';

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import Icon from 'react-native-vector-icons/Ionicons';

import NewContact from '../screens/NewContact';
import Me from '../screens/Me';
import { capitalizeFirstLetter } from '../helpers/string';
import { DrawerButton } from '../components/Header';

const LeftDrawerButton =({ navigation }) =>{

  if(Platform.OS === 'android'){
    return <DrawerButton  onPress={() => navigation.navigate('DrawerOpen')} />;
  }
  return null;
}


export const ContactsStack = StackNavigator({
  Contacts: {
      screen: Contacts,
      navigationOptions: (props) => ({
        title: 'Contacts',
        headerLeft: <LeftDrawerButton {...props} />,
      }),
  },
  Details: {
    screen: Details,
    navigationOptions: ({navigation}) => ({
      title: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`,
    }),
  },
});

 export const NewContactStack = StackNavigator ({
   NewContact:{
     screen: NewContact,
     navigationOptions: (props) => ({
       title: 'New Contact',
       headerLeft: <LeftDrawerButton {...props} />,
     }),
   },
 });

 export const MeStack = StackNavigator ({
   Me:{
     screen: Me,
     navigationOptions: (props) => ({
       title: 'Me',
       headerLeft: <LeftDrawerButton {...props} />,
     }),

   },
 });



  export const Tabs =TabNavigator({
    Contact: {
      screen: ContactsStack,
      navigationOptions: {
        tabBarLabel: 'Contacts',
        tabBarIcon: ({tintColor}) => <Icon name="md-list" size={35} color={tintColor} />
      },
    },
    NewContact: {
      screen: NewContactStack,
      navigationOptions: {
        tabBarLabel: 'New Contact',
        tabBarIcon: ({tintColor}) => <Icon name="md-list" size={35} color={tintColor} />
    },
  },
    Me: {
      screen: Me,
      navigationOptions:{
        tabBarLabel: 'MeStack',
        tabBarIcon: ({tintColor}) => <Icon name="md-list" size={35} color={tintColor} />

     },
    },
  });


export const Drawer = DrawerNavigator ({
   Contacts:{
     screen: ContactsStack,
     navigationOptions: {
       drawerLabel: 'Contacts',

     },

   },
   NewContact:{
     screen: NewContactStack,
     navigationOptions: {
       drawerLabel: 'NewContact',

     },
   },
   Me:{
     screen: MeStack,
     navigationOptions: {
       drawerLabel: 'Me',

     },

   },

});
