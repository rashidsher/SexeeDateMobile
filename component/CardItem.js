import React from 'react';
import styles from '../assets/styles';

import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from './Icon';

const CardItem = ({
  actions,
  description,
  image,
  matches,
  name,
  onPressLeft,
  onPressRight,
  status,
  variant
}) => {
  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 8,
      width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: variant ? 100 : 300,
      margin: variant ? 0 : 20
    }
  ];

  const nameStyle = [
    {
      paddingTop: variant ? 25 : 55,
     
      color: '#363636',
      fontSize: variant ? 15 : 30
    }
  ];

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={image} style={imageStyle} />

      {/* MATCHES */}
      {matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            <Image source={require('../images/heart2.png')}
              style={{ width: 20, height: 20 }}></Image>  {matches}% Match!
          </Text>
        </View>
      )}

      {/* NAME */}
      <Text style={nameStyle}>{name}</Text>

      {/* DESCRIPTION */}
      {description && (
        <Text style={styles.descriptionCardItem}>{description}</Text>
      )}

      {/* STATUS */}
      {status && (
        <View style={styles.status}>
          <View style={status === 'Online' ? styles.online : styles.offline} />
          <Text style={styles.statusText}>{status}</Text>
        </View>
      )}

      {/* ACTIONS */}
      {actions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.miniButton}>
            <Image source={require('../images/star.png')}
              style={{ width: 20, height: 20 }}></Image>
            <Text style={styles.star}>
           
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
            <Image source={require('../images/heart2.png')}
              style={{ width: 20, height: 20 }}></Image>
            {/* <Text style={styles.like}>
              <Icon name="like" />
            </Text> */}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => onPressRight()}
          >
            <Image source={require('../images/dislike.png')}
              style={{ width: 20, height: 20 }}></Image>
            {/* <Text style={styles.dislike}>
              <Icon name="dislike" />
            </Text> */}
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniButton2}>
            <Image source={require('../images/boost.png')}
              style={{ width: 20, height: 20 }}></Image>
            {/* <Text style={styles.flash}>
              <Icon name="flash" />
            </Text> */}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardItem;
