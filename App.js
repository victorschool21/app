import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Input } from 'react-native-elements';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/logo.png')}
      />
      <Text style={styles.text}>Bem-vindo ao meu aplicativo!</Text>
      <Button
        title="Próxima Tela"
        onPress={() => navigation.navigate('Opcoes')}
      />
    </View>
  );
};

const OpcoesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/logo.png')}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
};

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" secureTextEntry />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('loginSusesso')}
      />
    </View>
  );
};

const CadastroScreen = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Nome" />
      <Input placeholder="Data de Nascimento" />
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" secureTextEntry />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('CadastroSusesso')}
      />
    </View>
  );
};

const loginSusesso = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="E-mail" />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
};

const CadastroSusesso = () => {
  return (
    <View style={styles.container}>
      <Input placeholder="Nome" />
      <Button
        title="Enviar"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Opcoes" component={OpcoesScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="loginSusesso" component={loginSusesso} />
        <Stack.Screen name="CadastroSusesso" component={CadastroSusesso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    marginVertical: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

});

export default App;
