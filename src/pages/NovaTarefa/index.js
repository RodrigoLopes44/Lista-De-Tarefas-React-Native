import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import database from "../../config/firebaseconfig";

import { FontAwesome } from '@expo/vector-icons';
import styles from "./styles";

export default function NovaTarefa({navigation}) {
    const[descricao, setDescricao]=useState(null);

    function addTarefa(){
        database.collection('TarefaAulaREACTNATIVE').add({
            Descricao: descricao,
            status: false
        });
        navigation.navigate("Tela de Tarefas");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}> Descrição </Text>
            <TextInput
                style={styles.textoInput}
                placeholder="Ex.: Estudar Matemática."
                onChangeText={setDescricao}
                value={descricao}
            />

            <TouchableOpacity
                style={styles.botaoSalvar}
                onPress={() => addTarefa()}
            >
                <FontAwesome
                    name="check"
                    size={23}
                    color='#fff'
                />                               
            </TouchableOpacity>
        </View>
    );
}