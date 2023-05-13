import * as React from  'react';
import {View, Text, TextInput, StyleSheet, Button} from "react-native";
import styled from "styled-components/native";

const Account_container=styled.View`
  background-color: white;
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;
`;
const Email_container=styled.View`
  //background-color: rosybrown;
`;
const Password_container=styled.View`
  //background-color: aquamarine;
  padding-top: 15px;
`;
const Password_again_container=styled.View`
  //background-color: violet;
  padding-top: 15px;
`;
const Surname_container=styled.View`
  //background-color: seagreen;
  padding-top: 15px;
`;
const Name_container=styled.View`
  //background-color: darkseagreen;
  padding-top: 15px;
`;
const TxtInput=styled.TextInput`
  height: 40px;
  border-color: lightgray;
  border-width: 1px;
  border-radius: 5px;
`;
const Reg_button=styled.TouchableOpacity`
  height: 40px;
  background: cornflowerblue;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 15px;
`;
export default  function AccountScreen({navigation}){
    return(
        <Account_container>
            <Text style={{fontSize:30, textAlign:"center", paddingTop:20,paddingBottom:20}}>Реєстрація</Text>
            <Email_container>
                <Text>Електронна пошта</Text>
                <TxtInput/>
            </Email_container>
            <Password_container>
                <Text>Пароль</Text>
                <TxtInput/>
            </Password_container>
            <Password_again_container>
                <Text>Пароль (ще раз)</Text>
                <TxtInput/>
            </Password_again_container>
            <Surname_container>
                <Text>Прізвище</Text>
                <TxtInput/>
            </Surname_container>
            <Name_container>
                <Text>Ім'я</Text>
                <TxtInput/>
            </Name_container>
            <Reg_button><Text style={{color:"white"}}>Зареєструватися</Text></Reg_button>
        </Account_container>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"column",
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop:20
    },
});