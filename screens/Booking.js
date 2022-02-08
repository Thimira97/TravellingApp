import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { COLORS, FONTS, icons, images, SIZES } from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const { width, height} = Dimensions.get('window');

const BooKing = ({navigation, route}) => {
    const [destination, setDestination] = React.useState(null);

    React.useEffect(() => {
        let item = route.params;
        setDestination(item);
    },[]);

    return ( 
        <View style = {styles.container}>
            <ImageBackground source={destination?.item.image} resizeMode="cover" style={styles.backgroundImage}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ margin:20, width: 60, backgroundColor: 'rgba(0,0,0,0.5)', padding:20, borderRadius: 100}}>
                    <Image source={icons.back} style={{height: 20, width: 20, tintColor: COLORS.white}} />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.detailsArea}>
                <View style={{margin:30, flex:1}}>
                    <View style={{flexDirection: 'row', alignItems:'center' ,justifyContent: 'space-between'}}>
                        <View>
                            <Text style={{...FONTS.h2, width: 200}}>{destination?.item.name}</Text>
                            <View style={{flexDirection:'row', alignItems:'center', paddingTop:10}}>
                                <Image source={icons.pin} style={{height: 18, width: 18, tintColor: COLORS.darkPink}} />
                                <Text style={{...FONTS.body3, paddingLeft: 10}}>{destination?.item.location}</Text>
                            </View>
                        </View>
                        <Text style={{...FONTS.body2, fontWeight: 'bold'}}>${destination?.item.price}</Text>
                    </View>
                    <View style={{ padding: 10 , flexDirection: 'row', marginTop: 30, borderColor: COLORS.gray, borderWidth: 1, borderRadius: SIZES.radius}}>
                        <View style={{ width: 112, padding: 5, borderRightWidth: 1, borderRightColor: COLORS.gray, justifyContent: 'center', alignItems:'center'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image source={icons.starFull} style={{height: 20, width: 20, tintColor: COLORS.lime}} />
                                <Text style={{...FONTS.h4, paddingLeft: 10}}>{destination?.item.rate}</Text>
                            </View>
                            <Text>{destination?.item.reviews} Reviews</Text>
                        </View>
                        <View style={{ width: 112, padding: 5, borderRightWidth: 1, borderRightColor: COLORS.gray, justifyContent: 'center', alignItems:'center'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image source={icons.clouds} style={{height: 20, width: 20, tintColor: COLORS.darkPink}} />
                                <Text style={{...FONTS.h4, paddingLeft: 10}}>{destination?.item.temp}°C</Text>
                            </View>
                            <Text>{destination?.item.env}</Text>
                        </View>
                        <View style={{ width: 112, padding: 5, justifyContent: 'center', alignItems:'center'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Image source={icons.airplane} style={{height: 20, width: 20, tintColor: COLORS.blue}} />
                                <Text style={{...FONTS.h4, paddingLeft: 5}}>{destination?.item.date}</Text>
                            </View>
                            <Text>Depature</Text>
                        </View>
                    </View>
                    <View style={{paddingTop: 25, marginBottom: 80}}>
                        <Text style={{...FONTS.h2, paddingBottom: 10}}>Description.</Text>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{marginBottom: 40}}>
                            <Text style={{...FONTS.body3, color: COLORS.gray}}>{destination?.item.description}</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={{flex:1, justifyContent:'flex-end'}}>
                        <View style={{height: 80, alignItems:"center", backgroundColor: COLORS.white}} >
                        <TouchableOpacity
                            style={[styles.shadow, styles.button]}
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
                                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                                    <Text style={{...FONTS.h2, color: COLORS.white}}>Book Now</Text>
                                    <Image source={icons.forward} style={{height: 18, marginLeft: 50, width: 18, tintColor: COLORS.white}} />
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                        </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    backgroundImage: {
        flex: 1, 
        width: width, 
        height: height/2.5,
    },
    detailsArea: {
        flex: 2, 
        backgroundColor: COLORS.white,
        borderTopRightRadius: SIZES.radius*3,
        borderTopLeftRadius: SIZES.radius*3,
    },
    button: {
        marginTop: SIZES.padding/2, 
        width: "70%", 
        height: 50, 
        alignItems: 'center', 
        justifyContent: 'center',
    },
})

export default BooKing;