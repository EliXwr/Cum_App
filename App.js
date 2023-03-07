import react from 'react';
import { ScrollView, View, ImageBackground } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <ScrollView pagingEnabled={true} horizontal={true} 
    showsHorizontalScrollIndicator={true} 
    showsVerticalScrollIndicator={false}   >
      <View style={styles.fullScreenImage}>
      <ImageBackground 
        source={require('./assets/fonts/ElmoFlash.jpg')}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}} 
      />
    </View>

    <View style={styles.fullScreenImage}>
    <ImageBackground 
        source={require('./assets/fonts/MujerFlash.jpg')}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}} 
      />
    </View>

    <View style={styles.fullScreenImage}>
    <ImageBackground 
        source={require('./assets/fonts/AstroFlash.jpg')}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}} 
      />
    </View>
    
    <View style={styles.fullScreenImage}>
    <ImageBackground 
        source={require('./assets/fonts/PolloFlash.jpg')}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}   
      />
    </View>
    </ScrollView>
  );
}


