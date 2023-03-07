import react from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <ScrollView pagingEnabled={true} horizontal={true}>
      <View style={styles.fullScreenImage}>
      <Image 
        source={require('./assets/fonts/ElmoFlash.jpg')}
        resizeMode="contain"
        style={styles.image}
      />
    </View>

    <View style={styles.fullScreenImage}>
    <Image 
        source={require('./assets/fonts/MujerFlash.jpg')}
        resizeMode="contain"
        style={styles.image}     
      />
    </View>

    <View style={styles.fullScreenImage}>
    <Image 
        source={require('./assets/fonts/AstroFlash.jpg')}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
    
    <View style={styles.fullScreenImage}>
    <Image 
        source={require('./assets/fonts/PolloFlash.jpg')}
        resizeMode="cover"
        style={styles.image}   
      />
    </View>
    </ScrollView>
  );
}


