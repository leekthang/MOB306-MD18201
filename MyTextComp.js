import { View, Text, StyleSheet  } from "react-native";


const MyTextComp = (props) => {
    return(<View>
        <Text style={StyleSheet.create({
            fontSize:50,
            color: '#de6870'
        })}>
            {props.noidungText}
        </Text>
    </View>);
}

export default MyTextComp