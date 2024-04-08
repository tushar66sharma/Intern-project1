import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

interface ReastaurantCardProps {
  content1: string;
  content2:string;
  imageSource?: ImageSourcePropType;
}
export const RestaurantsCard: React.FC<ReastaurantCardProps> = ({
  content1,
  content2,
  imageSource,
}) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.backgroundImage} />
      <TouchableOpacity style={styles.saveIcon}>
        <Image source={require('../../components/other/save_icon.jpg') } style={{borderRadius:15,height:30,width:30}} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.likeIcon}>
        <Image source={require('../../components/other/like_icon.jpg')}  style={{borderRadius:15,height:30,width:30}}/>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text
          style={{fontFamily: 'Urbanist-Bold', color: 'white', fontSize: 15}}>
          {content1}
        </Text>
        <Text
          style={{fontFamily: 'Urbanist-Bold', color: 'white', fontSize: 10}}>
          {content2}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    height: 220,
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
    margin: 5,
    marginTop: 20,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  saveIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 30,
    height: 30,
  },
  likeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    padding: 10,
  },
});
