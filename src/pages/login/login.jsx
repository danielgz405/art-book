import { View, StyleSheet, Image, Alert, Vibration, ToastAndroid, Text } from 'react-native';
import { GeneralInput } from '../../utils/Inputs/Inputs';
import { useState } from 'react';
import Constants from 'expo-constants';
import { PrimaryButton } from '../../utils/Buttons/Buttons';
import { ArrowSmallLeftIcon } from 'react-native-heroicons/solid';
import { themes } from '../../assets/themes/themes';
import { Link, useNavigate } from 'react-router-native';
import { login } from '../../api/users/users';

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS, 1 * ONE_SECOND_IN_MS];

export default function Login({ auth, setAuth }) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    user: '',
    password: '',
  });

  const submitHandler = () => {
    login(data.user, data.password)
      .then((res) => {
        if (res.status === 200) {
          Vibration.vibrate();
          ToastAndroid.show('Bienvenido', ToastAndroid.SHORT);
          setAuth(res.data);
          navigate('/Home');
          console.log(auth);
        } else {
          Vibration.vibrate(PATTERN);
          Alert.alert('Ha ocurrido un error', 'Para mas informacion comuniquese con su administrador', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
          console.log(':v');
        }
      })
      .catch((error) => {
        Vibration.vibrate(PATTERN);
        if (error.response && error.response.status === 405) {
          Alert.alert('Ha ocurrido un error', 'Verifique su conexion a internet', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
          console.log('405');
        } else if (error.response && error.response.status === 401) {
          Alert.alert('Ha ocurrido un error', 'Correo o contraseña incorrectos', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
        } else {
          Alert.alert('Ha ocurrido un error', 'Comunuquese con su programador para mas informacion', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
          console.log('vga');
        }
      });
  };

  return (
    <View>
      <View style={style.navigation}>
        <Link to="/" style={style.icon}>
          <View>
            <ArrowSmallLeftIcon size={30} color={themes.colors.white} />
          </View>
        </Link>
      </View>
      <View style={style.container}>
        <View style={style.imageContainer}>
          <Image source={require('../../assets/images/LogoDarkOutCircle.png')} style={style.image} />
        </View>
        <View style={style.textContainer}>
          <Text className="mt-8 text-slate-300 text-center text-3xl font-bold" style={{ marginBottom: 15 }}>
            Art Book
          </Text>
          <Text className="text-center text-slate-300">El Arte es la expresion del alma que desea ser escuchada</Text>
        </View>
        <View style={style.formContainer}>
          <GeneralInput
            className="mb-3 mt-10 rounded-full p-2 bg-slate-200 placeholder:text-black text-black"
            placeholder="Ingrese el usuario"
            keyboardType="email-address"
            value={data.user}
            onChange={(e) => setData({ ...data, user: e })}
          />
          <GeneralInput
            className="rounded-full p-2 bg-slate-200 placeholder:text-black text-black"
            placeholder="Ingrese la contraseña"
            secureTextEntry={true}
            keyboardType="default"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e })}
          />
        </View>
        <PrimaryButton onPress={() => submitHandler()} className="mt-6 !rounded-full" text="Inicia sesion" />
        <Link to="/">
          <Text className="text-center text-white font-medium">Olvidaste tu contraseña?</Text>
        </Link>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignContent: 'center',
    height: '90%',
    justifyContent: 'center',
    width: '100%',
  },
  formContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  icon: {
    color: themes.colors.white,
    height: 30,
    width: 30,
  },
  image: {
    height: 90,
    marginLeft: 'auto',
    marginRight: 'auto',
    shadowColor: themes.colors.gray[800],
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10.84,
    width: 140,
  },
  'mb-10': {
    marginBottom: 10,
  },
  navigation: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: Constants.statusBarHeight,
  },
  textContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});
