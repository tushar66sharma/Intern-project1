import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  ScrollViewComponent,
} from 'react-native';
import { RestaurantsCard } from '../cards/restaurants_card';
export const cardsData = [
  {
    content1: "Chicken Chettina \n Haber Field ",
    content2:"Non Vegetarian | Indian | Meat",
    imageSource: require('../../components/other/card_image1.jpg'),
  },
  {
    content1: 'Chicken Saagwala \n Haber Field',
    content2:"Non Vegetarian | Indian | Meat",
    imageSource: require('../../components/other/card_image2.jpg'),
  },
  {
    content1: 'Chicken Chettina \n Haber Field',
    content2:"Non Vegetarian | Indian | Meat",
    imageSource: require('../../components/other/card_image1.jpg'),
  },
  {
    content1: 'Chicken Saagwala \n Haber Field',
    content2:"Non Vegetarian | Indian | Meat",
    imageSource: require('../../components/other/card_image2.jpg'),
  },
];

export const Restaurants = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.conatiner2}>
        <View style={styles.container3}>
          <Text style={styles.heading}>Satify your cravings</Text>
          <Text style={styles.heading1}>
            Restaurants that suits to your palate
          </Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          >
          <Text style={styles.buttontext} onPress={()=>navigation.navigate('RestaurantsViewAll')} >View All</Text>
        </TouchableOpacity>
      </View>
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollView}>
        {cardsData.map((card, index) => (
              <RestaurantsCard
                key={index}
                content1={card.content1}
                content2={card.content2}
                imageSource={card.imageSource}
              />
            ))}
        </ScrollView>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 320,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
  },
  heading: {
    color: '#000000',
    fontFamily: 'Urbanist-Bold',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 0,
  },
  heading1: {
    color: '#000000',
    fontFamily: 'Urbanist-Bold',
    fontSize: 12,
    marginLeft: 20,
  },
  conatiner2: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
  },
  container3: {
    flexDirection: 'column',
    height: 50,
    width: 215,
  },
  button: {
    marginTop: 10,
    width: 70,
    height: 50,
    backgroundColor: 'white',
    marginRight: 20,
    marginTop: 25,
  },
  buttontext: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Urbanist-Bold',
  },
  scrollView: {
    flexDirection: 'row',
    padding: 10,
  },
});
