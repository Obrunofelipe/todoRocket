import { Image, StyleSheet, Text, View } from 'react-native'
import Logo from '../assets/Clipboard.png'

export const EmpytList = () => {
  return (
    <View style={styles.imageContainer}>
        <Image source={Logo} />
        <Text style={styles.TextBold}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.TextLight}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    imageContainer:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        borderTopWidth: 1,
        borderColor: '#333333'
    },
    TextBold:{
        fontWeight: 'bold',
        color: '#808080',
        marginTop: 20
    },
    TextLight:{
        color: '#808080'
    }
})