import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, StyleSheet, Text, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from './src/components/Header';
import { InputToDo } from './src/components/InputToDo';
import { EmpytList } from './src/components/EmpytList';
import { ToDo } from './src/components/ToDo';
import { useState } from 'react';


export default function App() {
  const [taskConcluded, setTaskConcluded] = useState(0)
  const [toDo, setToDo] = useState<string[]>([])
  
  function createNewToDo(content:string){
    toDo.map(text => {
      if (text === content) throw 'Não é possível adicionar a mesma tarefa'
    })
    setToDo([...toDo, content])
    
  }

  function deleteToDo(content:string){
    const toDoWithOutDeleted = toDo.filter(task => {
      return task != content
    })
    setToDo(toDoWithOutDeleted)
  }

  function countCheckedTasks(checked:boolean){
    if (checked) setTaskConcluded(taskConcluded+1)
    else if (!checked) setTaskConcluded(taskConcluded-1)
  }

  function showError(error:any){
    Alert.alert(error)
  }

  return (
      <SafeAreaView style={styles.container}>
        <Header/>
        <InputToDo  onCreateNewToDo={createNewToDo} onShowError={showError}/>
        <View style={styles.toDoContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.headerContainerTextContainer}>
              <Text style={[styles.headerContainerText, {color: '#4EA8DE'}]}>Criadas</Text>
              <Text style={styles.headerContainerCounter}>{toDo.length}</Text>
            </View>
            <View style={styles.headerContainerTextContainer}>
              <Text style={[styles.headerContainerText, {color: '#8284FA'}]}>Concluídas</Text>
              <Text style={styles.headerContainerCounter}>{taskConcluded}</Text>
            </View>
          </View>

          <FlatList
            data={toDo}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <ToDo value={item} onDeleteToDo={deleteToDo} onCountCheckedtask={countCheckedTasks}/>
            )}
            ListEmptyComponent={() => <EmpytList/>}
            scrollEnabled
            contentContainerStyle={{paddingBottom:100}}
          />
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems:'center'
  },
  toDoContainer: {
    width: '80%',
    height: '80%',
  },
  headerContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  headerContainerTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  headerContainerText:{
    color: '#fff',
    fontWeight: 'bold'
  },
  headerContainerCounter:{
    color: '#fff',
    backgroundColor: '#333333',
    width: 30,
    height: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 8,
  }
});
