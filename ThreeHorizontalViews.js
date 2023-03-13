import React from "react";
import { FlatList, View, ImageBackground, Dimensions } from "react-native";

import styles from "./styles";

const data = [{ id: "1" }, { id: "2" }, { id: "3" }];

const ThreeViewsFlatList = () => {
  const renderItem = ({ item }) => (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.fullScreen}>
        <ImageBackground
          source={require("./assets/images/MontañaFlash.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <View style={styles.fullScreen}>
        <ImageBackground
          source={require("./assets/images/AstroFlash.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <View style={styles.fullScreen}>
        <ImageBackground
          source={require("./assets/images/MujerFlash.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      pagingEnabled={true}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      initialScrollIndex={1}
      getItemLayout={(data, index) => ({
        length: Dimensions.get("window").width,
        offset: Dimensions.get("window").width * index,
        index,
      })}
    />
  );
};
export default ThreeViewsFlatList;
