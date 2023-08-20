import { View, Image, Text, StyleSheet } from "react-native";
import { PrimaryLink } from "../../utils/Buttons/Buttons";
import { themes } from "../../assets/themes/themes";
import { PrimaryText, Title } from "../../utils/Texts/Texts";

export default function Welcome(){
    return (
        <View style={style.container}>
            <View style={style.imageContainer}>
                <Image source={require('../../assets/images/LogoDarkOutCircle.png')} style={style.image} />
            </View>
            <View style={style.textContainer}>
                <Title className={['text-black', 'text-center', 'extra-bold', 'text-4xl']} style={{ marginBottom: 15 }}>Art Book</Title>
                <PrimaryText className={['text-black', 'text-center']}>
El Arte es la expresion del alma que desea ser escuchada</PrimaryText>
            </View>
            <PrimaryLink to='/Login' className={['text-center', 'p-10', 'm-15']} text="Entrar" />
        </View>
    )
} 

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignContent: 'center',
        backgroundColor: themes.colors.white,
    },
    imageContainer: {
        width: '100%',
        height: '70%',
        backgroundColor: themes.colors.secondary,
        borderBottomLeftRadius: themes.rounded["rounded-full"],
        borderBottomRightRadius: themes.rounded["rounded-full"],
        justifyContent: 'flex-end',
        paddingBottom: 30,
        alignContent: 'center'
    },
    image: {
        width: 140, 
        height: 90, 
        marginLeft: 'auto', 
        marginRight: 'auto',
        transform: [{translateY: -20}, {translateX: 10}],
    },
    textContainer: {
        paddingLeft: 15,
        paddingRight: 15,
    }
})