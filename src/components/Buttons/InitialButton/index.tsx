import React from "react";
import { TouchableOpacity, Text, StyleSheet, TextStyle, StyleProp } from "react-native";

// import { Container } from './styles';

type ButtonProps = {
  text: string;
  style?: StyleProp<TextStyle>;
};

const InitialButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <TouchableOpacity style={styles.btnContinue} activeOpacity={0.5}>
      <Text style={styles.textBtnContinue}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    fontWeight: "500",
    textTransform: "capitalize",
  },
});

export default InitialButton;
