import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import Feather from '@expo/vector-icons/Feather';

type Props = {
    value: string,
    onDeleteToDo: any,
    onCountCheckedtask: any
}

export const ToDo = ({value, onDeleteToDo, onCountCheckedtask}:Props) => {
    const [check, setCheck] = useState(false)

  return (
    <View style={styles.containerToDo}>
        <TouchableOpacity 
            onPress={() => {
                onCountCheckedtask(!check)
                setCheck(!check)
            }}
            style={check ? styles.checkBoxChecked : styles.checkBox }
        >
            <AntDesign name="check" size={12} color={check? "#F2F2F2" : "transparent"} />
        </TouchableOpacity>
        <Text style={[styles.text, check? {textDecorationLine: 'line-through', color: '#808080'} :  {textDecorationLine:'none'}]}>{value}</Text>
        <TouchableOpacity 
            style={styles.trash}
            onPress={() => {
                onDeleteToDo(value)
                if(check) onCountCheckedtask(!check)
            }}
        >
            <Feather name="trash-2" size={20} color="#808080" />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    containerToDo:{
        width: '100%',
        height: 70,
        backgroundColor: '#262626',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        padding: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333333',
        marginBottom: 10,
    },
    checkBox:{
        maxWidth: 25,
        height: 25,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#4EA8DE',
        flex:1,
    },
    checkBoxChecked:{
        flex:1,
        maxWidth: 25,
        height: 25,
        borderRadius: 50,
        backgroundColor: '#5E60CE',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        flex:1,
        color:  '#F2F2F2',
    },
    trash:{
        flex:1,
        maxWidth: 20,
    }
})
