import { View, Image, StyleSheet, Text } from 'react-native';
import { PrimaryLink } from '../../utils/Buttons/Buttons';
import { themes } from '../../assets/themes/themes';

export default function Welcome() {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image source={require('../../assets/images/LogoDarkOutCircle.png')} style={style.image} />
      </View>
      <View style={style.textContainer}>
        <Text className="text-center text-3xl font-bold" style={{ marginBottom: 15 }}>
          Art Book
        </Text>
        <Text className="text-center">El Arte es la expresion del alma que desea ser escuchada</Text>
      </View>
      <PrimaryLink className="p-2 mb-3 mr-3 ml-3 !text-white" to="/Login" text="Entrar" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignContent: 'center',
    backgroundColor: themes.colors.white,
    height: '100%',
    justifyContent: 'space-between',
    width: '100%',
  },
  image: {
    height: 90,
    marginLeft: 'auto',
    marginRight: 'auto',
    transform: [{ translateY: -20 }, { translateX: 10 }],
    width: 140,
  },
  imageContainer: {
    alignContent: 'center',
    backgroundColor: themes.colors.secondary,
    borderBottomLeftRadius: themes.rounded['rounded-full'],
    borderBottomRightRadius: themes.rounded['rounded-full'],
    height: '70%',
    justifyContent: 'flex-end',
    paddingBottom: 30,
    width: '100%',
  },
  textContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },
});
