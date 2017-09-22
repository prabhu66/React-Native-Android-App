import React from 'react';
import { View } from 'react-native';
 import moment from 'moment';

 import Row from './Row';
 import styles from './styles';
 import {capitalizeFirstLetter} from '../../helpers/string';

const Info = ({ login, dob, location, registered }) => {
  return(
  <View style={styles.infoContainer}>
     <Row
       label="city"
       body={capitalizeFirstLetter(location.city)}
     />
     <Row
        label="birthday"
        body={moment(dob).format('MMMM Do, YYYY')}
     />
     <Row
        label="registered"
        body={moment(registered).format('MMMM Do, YYYY')}
     />
     <Row
        label="username"
        body={login.username}
     />

  </View>
  );
};

export default Info;
