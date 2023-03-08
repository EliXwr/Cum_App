import react from "react";
import { ScrollView, View, ImageBackground, Dimensions } from "react-native";
import styles from "./styles";
import VerticalConstraint from "./VerticalConstraint";
const { width, height } = Dimensions.get("window");


export default function App() {
  return (
    <ScrollView
      pagingEnabled={true}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      snapToInterval={height}
      contentOffset={{ x: 0, y: height }}
    >
      <View style={styles.fullScreenImage}>
        <ImageBackground
          source={require("./assets/fonts/ElmoFlash.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.fullScreenImage}>
        <ScrollView
          pagingEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          snapToInterval={width}
          contentOffset={{ x: width, y: 0 }}
        >
          <View style={styles.fullScreenImage}>
            <ImageBackground
              source={require("./assets/fonts/MontañaFlash.jpg")}
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </View>

          <View style={styles.fullScreenImage}>
            <ImageBackground
              source={require("./assets/fonts/MujerFlash.jpg")}
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </View>

          <View style={styles.fullScreenImage}>
            <ImageBackground
              source={require("./assets/fonts/AstroFlash.jpg")}
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
            />
          </View>
        </ScrollView>
      </View>
      <View style={styles.fullScreenImage}>
        <ImageBackground
          source={require("./assets/fonts/PolloFlash.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </ScrollView>
  );
}
