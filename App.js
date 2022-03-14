import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tarefa from './src/pages/Tarefa';
import NovaTarefa from './src/pages/NovaTarefa';
import Detalhes from './src/pages/detalhes';

export default function App() {
  
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tarefa'>
        
        <Stack.Screen 
          name = "Tela de Tarefas"
          component={Tarefa}
          options={{
            headerTintColor: '#f92e6a',
          }}
        />

        <Stack.Screen 
          name = "Tela de Novas Tarefas"
          component={NovaTarefa}
          options={{
            headerTintColor: '#f92e6a',
          }}
        />

          <Stack.Screen 
          name = "Tela de Detalhes"
          component={Detalhes}
          options={{
            headerTintColor: '#f92e6a',
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
}
