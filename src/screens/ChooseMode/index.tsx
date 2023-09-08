import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import Bille from "../../assets/billie.png";
import Spotify from "../../assets/Vector.png";
import Sun from "../../assets/sun.png";
import Moon from "../../assets/Moon.png";
import InitialButton from "../../components/Buttons/InitialButton";

const ChooseMode: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent backgroundColor="" />
      <View style={styles.app}>
        <Image source={Spotify} style={styles.sptImage} />
        <Image source={Bille} style={styles.image} />
        <View style={styles.contentBtns}>
          <Text style={styles.textBtnsArea}>Choose Mode</Text>
          <View style={styles.areaBtns}>
            <TouchableOpacity style={styles.btn}>
              <Image source={Sun} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Image source={Moon} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <InitialButton text="Continue"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
  },
  app: {
    flex: 1,
  },
  sptImage: {
    position: "absolute",
    zIndex: 99,
    top: 38,
    left: 95,
  },
  contentBtns: {
    position: "absolute",
    top: 438,
    left: 95,
    width: 233,
    height: 177,
    justifyContent: "space-between",
    padding: 10,
  },
  textBtnsArea: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  areaBtns: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
  btn: {
    padding: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff1c",
  },
  icon: {
    // position: 'absolute'
  },
  btnContinue: {
    position: "absolute",
    top: 683,
    left: 31,
    width: 329,
    height: 92,
    backgroundColor: "#42C83C",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textBtnContinue: {
    color: "#F6F6F6",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "700",
    textTransform: "capitalize",
  },
  image: {
    width: 393,
    // height: 950
    // position: "absolute",
    // left: 0,
    // top: 0,
    // bottom: 0,
    // right: 0,
  },
});

export default ChooseMode;
