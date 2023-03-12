    <ScrollView
      pagingEnabled={true}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      snapToInterval={height}
      contentOffset={{ x: 0, y: height }}
    >
      <View style={styles.fullScreen}>
        <ImageBackground
          source={require("./assets/images/ElmoFlash.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.fullScreen}>
        <ScrollView
          pagingEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          snapToInterval={width}
          contentOffset={{ x: width, y: 0 }}
        >
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
        </ScrollView>
      </View>
      <View style={styles.fullScreen}>
        <ImageBackground
          source={require("./assets/images/PolloFlash.jpg")}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </ScrollView>