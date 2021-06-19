import React from "react";
import PropTypes from "prop-types";
import { View, TextInput, Text } from "react-native";
import styles from "../styles";

export default function Input(props){
    return(
        <View>
            <Text>{props.label}</Text>
            <TextInput {...props} style={styles.textInput}/>
        </View>
    )
}
Input.propTypes = {
    label: PropTypes.string
};