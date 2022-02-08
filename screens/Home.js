import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    TextInput,
    FlatList,
} from 'react-native';
import { COLORS, dummyData, FONTS, icons, images, SIZES } from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({ navigation}) => {

    const [destinations, setDestinations] = React.useState(dummyData.trendingDestinations);
  
    function onSelectCategory(category) {
      let destinationList = dummyData.trendingDestinations.filter(a =>
        a.category.includes(category.id),
      );
      setDestinations(destinationList);
    }

    function renderHeaderTop() {
        return (
            <View style={styles.headerContainer}>
                <TouchableOpacity style={{justifyContent: 'center', flexDirection: 'row', alignItems:'center',}}>
                    <Image source={images.user2} style={styles.userImage} resizeMode="contain" />
                    <Text style={styles.name}>Hay Jessica...!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{justifyContent:'center', alignItems:'flex-end',}}>
                    <Image source={icons.bell} style={styles.bell} resizeMode="contain" />
                </TouchableOpacity>
            </View>
        )
    };
    function renderHeader() {
        return (
            <View>
                <View style={{paddingLeft: SIZES.padding, paddingRight: SIZES.padding}}>
                    <View style={{width: 300}}>
                        <Text style={{...FONTS.h1, color: COLORS.black, lineHeight: 45,}}>Find Your Favorite Place !</Text>
                    </View>
                </View>
                <View style={{padding: SIZES.padding}}>
                    <View style={styles.searchContainer}>
                        <TextInput placeholder="Search Your Place...." style={{...FONTS.body3}} placeholderTextColor={COLORS.gray} />
                        <Image source={icons.search} resizeMode="contain" style={styles.search} />
                    </View>
                </View>
            </View>
        )
    };

    function renderCategories() {
        return (
            <View style={{paddingLeft: SIZES.padding, paddingRight: SIZES.padding}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{...FONTS.body2, color: COLORS.darkGreen1}}>Categories</Text>
                    <TouchableOpacity>
                        <Text style={{ ...FONTS.h3, color: COLORS.darkGreen}}>See all</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <FlatList 
                        data={dummyData.categories}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsVerticalScrollIndicator={false}
                        renderItem={({item,index}) => {
                            return (
                                <TouchableOpacity onPress={() => onSelectCategory(item)} style={{paddingRight: 5}} key={item.id}>
                                    <Image source={item.image} resizeMode="contain" style={{height:115, width:116, borderTopLeftRadius: SIZES.radius*3, borderTopRightRadius: SIZES.radius*3}} />
                                    <View style={{backgroundColor: item.color, height: 35, width: 116, marginTop: -19, borderBottomLeftRadius: SIZES.radius, borderBottomRightRadius: SIZES.radius, alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style={{...FONTS.h3, color: COLORS.white}}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
        )
    }

    function renderResturentDetails() {
        return (
            <View style={{paddingLeft: SIZES.padding, paddingRight: SIZES.padding, paddingTop: SIZES.padding}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{...FONTS.body2, color: COLORS.darkGreen1}}>Popular</Text>
                    <TouchableOpacity>
                        <Text style={{ ...FONTS.h3, color: COLORS.darkGreen}}>See all</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', marginTop: SIZES.padding/2}}>
                    <FlatList 
                        data={destinations}
                        keyExtractor={item => `${item.id}`}
                        horizontal
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item,index}) => {
                            return (
                                <TouchableOpacity style={{paddingRight: 10}} onPress={() => navigation.navigate('Recipe',{item})}>
                                    <Image source={item.image} resizeMode="cover" style={{height: 205, width: 205, borderRadius: SIZES.radius}} />  
                                    <View
                                        style={{
                                        position: 'absolute',
                                        height: 205,
                                        width: 205,
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-end',
                                        backgroundColor: 'rgba(0,0,0,0.4)',
                                        borderRadius: SIZES.radius,
                                        paddingLeft: 15,
                                        paddingBottom: 10,
                                        }}>
                                        <Text style={{...FONTS.h2, color: COLORS.white}}>{item.name}</Text>
                                        <View style={{flexDirection:'row',alignItems: 'center',
                                        justifyContent: 'center'}}>
                                            <Image source={icons.pin} resizeMode="contain" style={{height: 12, width:12, tintColor: COLORS.white}} />
                                            <Text style={{...FONTS.body4, color: COLORS.white}}>{item.location}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.contsiner}>
            {renderHeaderTop()}
            <ScrollView>
                {renderHeader()}
                {renderCategories()}
                {renderResturentDetails()}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contsiner: {
        flex: 1,
        backgroundColor: COLORS.white2,
        marginBottom: 100,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: SIZES.padding,
    },
    userImage: {
        height: 50,
        width: 50,
        borderRadius: SIZES.radius*6,
    },
    name: {
        ...FONTS.h3,
        color: COLORS.black,
        marginLeft: SIZES.padding/2,
    },
    bell: {
        height: 30,
        width: 30,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        height: 50, 
        alignItems: 'center', 
        marginHorizontal: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray,
    },
    search: {
        height: 20, 
        width: 20, 
        tintColor: COLORS.gray,
    },
});
export default Home;