import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import Ion from "react-native-vector-icons/Ionicons";

const App = () => {
  const openLink = async (url: any) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error("Failed to open URL:", error);
    }
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../mobile-app/assets/bg.jpg")}
    >
      <StatusBar />
      <View style={styles.container}>
        {/* Centered Profile Image */}
        <View style={styles.profileImageWrapper}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require("../mobile-app/assets/profile.jpg")}
              resizeMode="cover"
              style={styles.profileImage}
            />
          </View>
        </View>

        {/* Name */}
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>Paul Uwaifo. Mdev</Text>
        </View>
        {/* email */}
        <View>
          <Text style={styles.emailText}>uwaifopaul1@gmail.com</Text>
        </View>
        {/* location, dev */}
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text style={{ fontSize: 15, color: "#6c7a85" }}>
            <Icon name="code" size={15} color="#6c7a85" /> Mobile developer
          </Text>
          <Text style={{ fontSize: 15, color: "#6c7a85" }}>
            <Icon name="location-dot" size={15} color="#6c7a85" /> Lagos,
            Nigeria
          </Text>
        </View>

        {/* hire a developer */}
        <View
          style={{
            marginTop: 40,
            flex: 1,
            width: "100%",
            gap: 10,
          }}
        >
          {/* header */}
          <Text
            style={{
              fontSize: 15,
              color: "#6c7a85",
              backgroundColor: "#e6e8ee",
              paddingHorizontal: 15,
              paddingVertical: 5,
              fontWeight: "600",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Hire a developer
          </Text>

          {/* links */}
          <View style={{ width: "100%", gap: 10 }}>
            <TouchableOpacity
              onPress={() => openLink("https://hng.tech/hire/react-native")}
              style={{
                alignItems: "center",
                flexDirection: "row",
                gap: 10,
                paddingHorizontal: 5,
                paddingVertical: 5,
                borderRadius: 6,
              }}
            >
              {/* react icon */}

              <Icon name="react" size={20} color="black" />
              {/* text */}
              <Text
                style={{
                  fontSize: 14,
                  color: "black",
                }}
              >
                HNG React Native Developers
              </Text>
              {/* arrow icon */}
              <View
                style={{
                  justifyContent: "flex-end",
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <Icon name="angle-right" size={12} color="black" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => openLink("https://hng.tech/hire/mobile")}
              style={{
                alignItems: "center",
                flexDirection: "row",
                gap: 14,
                paddingHorizontal: 5,
                paddingVertical: 5,
                borderRadius: 6,
              }}
            >
              {/* react icon */}

              <Ion name="phone-portrait-outline" size={20} color="black" />
              {/* text */}
              <Text
                style={{
                  fontSize: 14,
                  color: "black",
                }}
              >
                HNG Mobile Developers
              </Text>
              {/* arrow icon */}
              <View
                style={{
                  justifyContent: "flex-end",
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <Icon name="angle-right" size={12} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Apps */}
        <View
          style={{
            flex: 1,
            width: "100%",
            gap: 10,
          }}
        >
          {/* header */}
          <Text 
            style={{
              fontSize: 15,
              color: "#6c7a85",
              backgroundColor: "#e6e8ee",
              paddingHorizontal: 15,
              paddingVertical: 5,
              fontWeight: "600",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            HNG Applications
          </Text>

          {/* links */}
          <View style={{ width: "100%", gap: 10 }}>
            <TouchableOpacity
              onPress={() => openLink("https://telex.ng")}
              style={{
                alignItems: "center",
                flexDirection: "row",
                gap: 10,
                paddingHorizontal: 5,
                paddingVertical: 5,
                borderRadius: 6,
              }}
            >
              {/* react icon */}

              <Ion name="shapes-outline" size={20} color="black" />
              {/* text */}
              <Text
                style={{
                  fontSize: 14,
                  color: "black",
                }}
              >
                Telex application
              </Text>
              {/* arrow icon */}
              <View
                style={{
                  justifyContent: "flex-end",
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <Icon name="angle-right" size={12} color="black" />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => openLink("https://delve.gg")}
              style={{
                alignItems: "center",
                flexDirection: "row",
                gap: 14,
                paddingHorizontal: 5,
                paddingVertical: 5,
                borderRadius: 6,
              }}
            >
              {/* react icon */}

              <Ion name="shapes-outline" size={20} color="black" />
              {/* text */}
              <Text
                style={{
                  fontSize: 14,
                  color: "black",
                }}
              >
                Delve application
              </Text>
              {/* arrow icon */}
              <View
                style={{
                  justifyContent: "flex-end",
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <Icon name="angle-right" size={12} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            width: "100%",
            gap: 10,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              openLink(
                "https://github.com/pauluwaifo/MOBILE-DESKTOP-STAGE-0-TASK"
              )
            }
            style={[
              styles.btn_base,
              {
                backgroundColor: "black",
              },
            ]}
          >
            <Text style={{ fontSize: 17, color: "white", fontWeight: "600" }}>
              Github
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    minHeight: 620,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    alignItems: "center",
    gap: 5,
  },
  profileImageWrapper: {
    position: "absolute",
    top: -60,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  profileImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: "white",
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  nameContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  nameText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  emailText: {
    fontSize: 16,
    fontWeight: "semibold",
    backgroundColor: "#e6e8ee",
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
    color: "#6c7a85",
  },
  btn_base: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default App;
