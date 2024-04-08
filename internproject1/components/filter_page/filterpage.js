import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  ScrollViewComponent,
} from 'react-native';

export const FilterPage = () => {
  const [pressed_vegetarian, setpressed_vegetarian] = useState(false);
  const [pressed_nonvegetarian, setpressed_nonvegetarian] = useState(false);
  const [pressed_vegan, setpressed_vegan] = useState(false);
  const [pressed_indian, setpressed_indian] = useState(false);
  const [pressed_meditarranean, setpressed_mediterranean] = useState(false);
  const [pressed_chicken, setpressed_chicken] = useState(false);
  const [pressed_beef, setpressed_beef] = useState(false);
  const handlePress1 = () => {
    setpressed_vegetarian(!pressed_vegetarian);
  };
  const handlePress2 = () => {
    setpressed_nonvegetarian(!pressed_nonvegetarian);
  };
  const handlePress3 = () => {
    setpressed_vegan(!pressed_vegan);
  };
  const handlePress4 = () => {
    setpressed_indian(!pressed_indian);
  };
  const handlePress5 = () => {
    setpressed_mediterranean(!pressed_meditarranean);
  };
  const handlePress6 = () => {
    setpressed_chicken(!pressed_chicken);
  };
  const handlePress7 = () => {
    setpressed_beef(!pressed_beef);
  };
  const handleApplyFilter = () => {
    console.log('Filters applied!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.headings}> Diet</Text>
        <View style={styles.container2}>
          <TouchableOpacity
            style={[styles.button, pressed_vegetarian && styles.buttonPressed]}
            onPress={handlePress1}>
            <Text style={styles.buttonText}>Vegetarian</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              pressed_nonvegetarian && styles.buttonPressed,
            ]}
            onPress={handlePress2}>
            <Text style={styles.buttonText}>Non-Vegetarian</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, pressed_vegan && styles.buttonPressed]}
            onPress={handlePress3}>
            <Text style={styles.buttonText}>Vegan</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headings}> Cuisines</Text>
        <View style={styles.container2}>
          <TouchableOpacity
            style={[styles.button, pressed_indian && styles.buttonPressed]}
            onPress={handlePress4}>
            <Text style={styles.buttonText}>Indian</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              pressed_meditarranean && styles.buttonPressed,
            ]}
            onPress={handlePress5}>
            <Text style={styles.buttonText}>Mediterranean</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headings}> Proteins</Text>
        <View style={styles.container2}>
          <TouchableOpacity
            style={[styles.button, pressed_chicken && styles.buttonPressed]}
            onPress={handlePress6}>
            <Text style={styles.buttonText}>Chicken</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, pressed_beef && styles.buttonPressed]}
            onPress={handlePress7}>
            <Text style={styles.buttonText}>Beef</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.applyButtonContainer}>
        <TouchableOpacity
        style={styles.cancelbutton}>
            <Text style={styles.canceltext}>Cancel</Text>
          </TouchableOpacity>
        
          <TouchableOpacity
            style={styles.applyButton}
            onPress={handleApplyFilter}>
            <Text style={styles.applyButtonText}>Apply Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
  },
  container2: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  headings: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 20,
    color: 'black',
    marginTop: 30,
    marginLeft: 30,
    marginBottom: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 120,
    marginLeft: 10,
  },
  buttonPressed: {
    backgroundColor: '#6495ed',
    borderColor: 'Black',
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Urbanist-Light',
  },
  applyButtonContainer: {
    flex: 1,
    position: 'absolute',
    bottom:0,
    borderTopWidth:1,
    borderTopColor:'black',
    height: 100, 
    left: 0,
    right: 0,
  },

  cancelbutton:{
    position: 'absolute',
    left:40,
    top:35,

  },
  canceltext:{
    fontSize:20,
    fontFamily:'Urbanist-Bold',
    color:'black',

  },
  applyButton: {
    backgroundColor: '#122C3E',
    borderRadius: 10,
    position: 'absolute',
    width: 250,
    height: 61,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left:140,
    top:20,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Urbanist-Bold',
  },
});
