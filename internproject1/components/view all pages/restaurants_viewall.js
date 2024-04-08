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
import {RestaurantsCard} from '../cards/restaurants_card';
export const cardsData = [
  {
    content1: 'Chicken Chettina \n Haber Field ',
    content2: 'Non Vegetarian | Indian | Meat',
    imageSource: require('../../components/other/card_image1.jpg'),
  },
  {
    content1: 'Chicken Saagwala \n Haber Field',
    content2: 'Non Vegetarian | Indian | Meat',
    imageSource: require('../../components/other/card_image2.jpg'),
  },
  {
    content1: 'Chicken Chettina \n Haber Field',
    content2: 'Non Vegetarian | Indian | Meat',
    imageSource: require('../../components/other/card_image1.jpg'),
  },
  {
    content1: 'Chicken Saagwala \n Haber Field',
    content2: 'Non Vegetarian | Indian | Meat',
    imageSource: require('../../components/other/card_image2.jpg'),
  },
  {
    content1: 'Chicken Chettina \n Haber Field ',
    content2: 'Non Vegetarian | Indian | Meat',
    imageSource: require('../../components/other/card_image1.jpg'),
  },
  {
    content1: 'Chicken Saagwala \n Haber Field',
    content2: 'Non Vegetarian | Indian | Meat',
    imageSource: require('../../components/other/card_image2.jpg'),
  },
  {
    content1: 'Chicken Chettina \n Haber Field',
    content2: 'Non Vegetarian | Indian | Meat',
    imageSource: require('../../components/other/card_image1.jpg'),
  },
  {
    content1: 'Chicken Saagwala \n Haber Field',
    content2: 'Non Vegetarian | Indian | Meat',
    imageSource: require('../../components/other/card_image2.jpg'),
  },
];

export const RestaurantsViewAll = () => {
  return (
    <View style={styles.row}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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

const styles=StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        // flexWrap:'wrap',
        // width: '100%',
        //padding: 6,
      },
    scrollContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
      },
});
