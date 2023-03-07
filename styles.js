import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const componentWidth = width * 1; // El ancho de la componente será el 80% del ancho de la pantalla
const componentHeight = height * 1; // El alto de la componente será el 60% del alto de la pantalla

const styles = StyleSheet.create({
  fullScreenImage: {
    width: componentWidth,
    height: componentHeight,
  },
  image: {
    aspectRatio: 1,
    maxWidth: '100%',
    maxHeight: '100%',
  }
});

export default styles;