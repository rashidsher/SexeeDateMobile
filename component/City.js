import React from 'react';
import styles from '../assets/styles';

import { Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';

const City = () => {
  return (
    <TouchableOpacity style={styles.city}>
      <Text style={styles.cityText}>
        <Icon name="marker" /> Pakistan
      </Text>
    </TouchableOpacity>
  );
};

export default City;
