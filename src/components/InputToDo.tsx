import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';

type Props = {
    onCreateNewToDo: any,
    onShowError: any
}

export const InputToDo = ({onCreateNewToDo, onShowError}:Props) => {
    const[input, setInput] = useState('')

    function handleCreateNewToDo(){
        try {
            if(input == '') throw 'Não é possível criar tarefa vazia'
            onCreateNewToDo(input)
        } catch (error) {
            onShowError(error)
        }
        
        setInput('')
    }
  return (
    <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                onChangeText={setInput}
                value={input}
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor={'#808080'}
            />
            <TouchableOpacity 
                onPress={handleCreateNewToDo}
                style={styles.button}
            >
                <Text>
                    <AntDesign name="pluscircleo" size={16} color="white" />
                </Text>
            </TouchableOpacity>
        </View>
  )
}

const styles = StyleSheet.create({
    input:{
        flex: 1,
        height: 56,
        backgroundColor: '#262626',
        borderRadius: 5,
        color: '#F2F2F2',
        padding: 16,
        fontSize: 16,
        marginRight: 12,
    },
    button:{
        height: 56,
        width: 56,
        backgroundColor: '#1E6F9F',
        borderRadius: 8,
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center'
    },
    inputContainer:{
        width:'80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -28,
    }
})