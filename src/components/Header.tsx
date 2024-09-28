import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native"
import Logo from '../assets/Logo.png'

export const Header = () => {
  return (
    <View style={styles.container}>
        <Image  style={styles.image} source={Logo}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 170,
        width: '100%',
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
    },
    image:{
        height: 50,
        width: 180,
        marginTop: 40
    },
})
