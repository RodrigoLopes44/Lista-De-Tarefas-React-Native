import React, {useState, useEffect} from "react";
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles.js';

import database from "../../config/firebaseconfig";

export default function Tarefa({navigation}) {
    const[tarefa, setTarefa] = useState([]);

    function deletarTarefa(id){
        database.collection("TarefaAulaREACTNATIVE").doc(id).delete();
    }

    useEffect(() => {
        database.collection("TarefaAulaREACTNATIVE").onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setTarefa(list);
            });
        }, []);

    return (
        <View style={styles.container}>
            <FlatList 
                showsVerticalScrollIndicator= {false}
                data={tarefa}

                renderItem={({item}) => {
                    return (
                        <View style={styles.styleTarefa}>
                            <TouchableOpacity
                                style={styles.deleteTarefa}
                                onPress={() => deletarTarefa(item.id)}
                            >
                                <FontAwesome
                                    name="star"
                                    size={23}
                                    color='#f92e6a'
                                />
                            </TouchableOpacity>

                            <Text 
                                style={styles.descricaoTarefa}
                                onPress={() => {
                                    navigation.navigate("Tela de Detalhes", {
                                        id:item.id,
                                        descricao: item.descricao,
                                    })
                                }}
                            >
                            
                                {item.Descricao}
                            
                            </Text>

                        </View>    
                    );
                }
                }
                
            />


            <TouchableOpacity 
                style={styles.btnNovaTarefa}
                onPress={() => navigation.navigate('Tela de Novas Tarefas')}
            >
                <Text style={styles.iconeBotao}>+</Text>    
            </TouchableOpacity>
        </View>
    );    
}