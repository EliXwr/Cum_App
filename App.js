import { ScrollView, View, ImageBackground, Dimensions } from "react-native";
import ThreeHorizontalViews from "./ThreeHorizontalViews";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.fullScreen}>
      <ThreeHorizontalViews />
    </View>
  );
}
