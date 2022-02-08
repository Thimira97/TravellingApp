import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import { images, SIZES, FONTS, COLORS} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{height: SIZES.height>700 ? "65%" : "60%"}}>
            <ImageBackground source={images.bg1} resizeMode="cover" style={{flex:1, justifyContent: 'center'}} />
            </View>
            
            <View style={styles.textContainer}>
                <Text style={styles.title}>Enjoy Your Vaccation, Only Here</Text>
                <Text style={styles.description}>Vacation to all the destinations you like, only here</Text>
                <TouchableOpacity
                    style={[styles.shadow, styles.button]}
                    onPress={() => navigation.navigate("Home")}
                >
                    <LinearGradient style={{
                        height: '100%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 15,
                        }}
                        colors={['#01DFA5', '#04B486']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 1}}>
                        <Text style={{...FONTS.h2, color: COLORS.white}}>Start</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text style={styles.text2}>Do you have account?</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
      },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    textContainer: { 
        paddingLeft: SIZES.padding*2, 
        paddingRight: SIZES.padding*2,
        justifyContent: 'center', 
        alignItems:'center',
    },
    title: {
        ...FONTS.h1,
        color: COLORS.black,
        lineHeight: 45, 
        textAlign: 'center',
    },
    description: {
        ...FONTS.h2, 
        color: COLORS.gray, 
        textAlign: 'center',
    },
    button: {
        marginTop: SIZES.padding/2, 
        width: "70%", 
        height: 50, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    text2: {
        ...FONTS.h3, 
        color: COLORS.gray, 
        textAlign: 'center', 
        marginTop: SIZES.padding/2,
    },
  });

export default Login;