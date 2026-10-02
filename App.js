import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("./images/avatar.png")}
          style={styles.avatar}
        />

        <Text style={styles.name}>Nguyễn Hoàng Mỹ Dung</Text>

        <Text style={styles.job}>
          23IT035 _ VKU
        </Text>
      </View>

      {/* Thông tin liên hệ */}
      <View style={styles.card}>

        <View style={styles.info}>
          <Text style={styles.icon}>📱</Text>
          <Text style={styles.text}>0123 456 789</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.icon}>✉️</Text>
          <Text style={styles.text}>
            mydung@example.com
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.icon}>📍</Text>
          <Text style={styles.text}>
            Việt Nam
          </Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAF6",
  },

  header: {
    backgroundColor: "#3949AB",
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 30,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },

  job: {
    color: "#C5CAE9",
    fontSize: 16,
    marginTop: 5,
  },

  card: {
    backgroundColor: "#FFFFFF",
    margin: 20,
    padding: 10,
    borderRadius: 12,
    elevation: 4,
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },

  icon: {
    fontSize: 24,
    width: 45,
  },

  text: {
    fontSize: 16,
    color: "#333333",
  },
});