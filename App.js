import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import styled from 'styled-components/native';
import * as url from "url";
import MainScreen from "./navigation/screens/MainScreen";
import ButtonsContainer from "./navigation/ButtonsContainer";

const Header=styled.View`
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: center;
`;
const Main=styled.View`
  background-color: green;
  flex: 1;
`;
const Footer=styled.View`
  background: lightgray;
  height: 20px;
  width: 100%;
  font-size: 15px;
  align-items: center;
`;
const Name=styled.Text`
  flex: 2;
  font-weight: bold;
  text-align: center;
  align-items: center;
  font-size: 20px;
`;
export default function App() {

  return (
    <View style={styles.container}>
      <Header>
          <Image style={{width:"100%", height:35, flex:1, padding:2}} source={{uri:'https://pdp.nacs.gov.ua/system/providers/logos/000/000/057/original/%D0%B7%D0%B0%D0%B2%D0%B0%D0%BD%D1%82%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F_%282%29.png?1651503202'}}/>
          <Name>FirstMobileApp</Name>
      </Header>
      <Main>
          <ButtonsContainer/>
      </Main>
      <Footer>
        <Text style={styles.footer}>Воронюк І.О. ЗІПЗ-19-1</Text>
      </Footer>
    </View>
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
    footer:{
      fontSize: 15
    }
});
