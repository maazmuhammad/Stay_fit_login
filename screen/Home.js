import React, { useRef, useEffect, } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Keyboard, Pressable, Touchable, ActivityIndicator } from 'react-native';
import { TextInput, Button, } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useState } from 'react';
import {
    ProgressChart,
    BarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import 'react-native-gesture-handler';

import { connect } from "react-redux";
import { GetUserFitnessData } from "../Redux/User/UserAction"







const Home = (props) => {
    // const [user, setState] = useState('');

    const [UserData, setUserData] = useState({});
    const screenWidth = Dimensions.get("window").width;

   

    const data = {
        labels: ["Run"], // optional
        data: [0.4]
    };
    const data1 = {
        labels: ["12:00 am", "6:00 am", "12:00 pm", "6:00 pm"],
        datasets: [
            {
                data: [0.7, 0.1, 0.9, 0.3, 0.5]
            }
        ]
    };



    const navigation = useNavigation();

    const OnViewMore = async () => {
        navigation.navigate('More');


    }
    // const OnLogoutPressed = async () => {

    //     try {
    //         // await GoogleSignin.hasPlayServices();
    //         // const userInfo = await GoogleSignin.signIn();
    //         // this.setState({ userInfo });

    //         GoogleSignin.signOut();
    //         auth().signOut();
    //         console.log("Sign out successfull")

    //         this.setState({ user: null }); // Remember to remove the user from your app's state as well
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     navigation.navigate('Login');



    // }
    // const onCalendar = async () => {

    // }
    // const onDrawer = async () => {



    // }

    // const getSteps = async () => {
    //     console.log('running get steps...')
    //     try {
    //         // fetch({
    //         //     method: 'GET',
    //         //     url: 'https://www.googleapis.com/fitness/v1/users/me/dataSources',
    //         //     headers: {
    //         //         'Authorization': `Bearer ya29.a0AeTM1ifOcSywXIDf_y0tFiaIrTmhnyYcBw2pkL3NLuaJfUXTU_aDI_Dfi7tfhMj7n70atVgUypdzFmn9-LdRJlkg4AYjMhVDOxZpb8nY6jEmdF1AB0ZF_xjoyl3ie0ceLw6SNtNJaQbi5HHEArmVTNBNHQkfyAaCgYKAY8SARMSFQHWtWOmMMUVyg_gQVjdSBPqOh4F2g0165`

    //         //     }
    //         // })
    //         const _data = await fetch("https://api.publicapis.org/entries")
    //         console.log("AAAAAAAAAAa: ", _data)
    //     } catch (error) {
    //         console.log(error,'error in get steps')
    //     }
    // }

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(248, 18, 80,${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    const graphStyle = {
        //marginVertical: 80,
        ...chartConfig.style
    };


    useEffect(() => {
        props.GetFitnessData("ya29.a0AeTM1ifF4MXp_bBESDP1RsVn6mSSKVt8Z7fxlsCMIHHuSQtRco8hUWmhEwyiKYP_rxWpfMvq4AbMB7IJv8vbSAUQhFjOCcXEgMTxtPN59rijRI6iyx3Hw3MYLdfz8D3rRUeP_GE-RybH6lwN7-ZgkAvlidcn8AaCgYKAYUSARMSFQHWtWOm1wU-_SP1FKWbn83Y7nyOHQ0165")

    }, []);



    return (

        <View style={styles.container}>
            <View>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                    <View style={{ backgroundColor: '#F81250', height: 50, width: '90%', marginTop: 10, borderRadius: 10, marginHorizontal: 20, }}>
                        <View style={{ flexDirection: 'row' }}>

                            <Pressable style={{ right: 20 }}
                                onPress={() => navigation.openDrawer()}
                            >
                                <Image
                                    style={styles.button1}
                                    source={require('../assests/image/menu.png')}
                                />

                            </Pressable>
                            <Text style={{ fontSize: 28, fontWeight: 'bold', paddingLeft: 10, color: 'white', right: 25, }}>Activity Summary</Text>
                        </View>
                    </View>
                </View>

            </View>
            <View style={{ marginTop: 10 }}>
                <View style={{ height: 300 }}>


                    <ProgressChart
                        data={data}
                        width={screenWidth}
                        height={250}
                        strokeWidth={50}
                        radius={100}
                        chartConfig={chartConfig}
                        hideLegend={false}
                    />

                </View>
                <View style={{ top: -30 }} >


                    <BarChart
                        style={graphStyle}
                        data={data1}
                        width={screenWidth}
                        height={160}
                        chartConfig={chartConfig}

                    />

                </View>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 30 }}>
                <View style={{ backgroundColor: '#F81250', height: 60, width: 150, borderRadius: 8, marginHorizontal: 10, }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 10, color: 'white' }}>
                        Steps:

                        {props.steps}
                        
                
                        
                    </Text>
                </View>

                <View style={{ backgroundColor: 'red', height: 60, width: 150, borderRadius: 8, }}>
                    <Image
                        style={{
                            width: 40,
                            height: 40,
                            marginTop: 10,
                            marginHorizontal: 10,
                        }}
                        source={require('../assests/image/heart.png')}
                    />
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, marginHorizontal: 30 }}>
                <View style={{ backgroundColor: '#F81250', height: 60, width: 150, marginTop: 10, borderRadius: 8, marginHorizontal: 10, }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 10, color: 'white' }}>Calories</Text>
                </View>

                <View style={{ backgroundColor: '#F81250', height: 60, width: 150, marginTop: 10, borderRadius: 8, }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 10, color: 'white' }}>Distance:</Text>

                </View>
            </View>


            <Button title="View More" onPress={() => OnViewMore()} style={{ width: "80%", backgroundColor: '#F81250', marginLeft: 40, }} />
        </View>



    );
}

const styles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        flex: 1,
        backgroundColor: 'black',



    },
    button: {
        width: 30,
        height: 30,
        //marginTop: 10,
        //marginBottom: 10,
        marginHorizontal: 30,
        left: 300,
        // backgroundColor: 'orange'

    },
    button1: {
        width: 30,
        height: 30,
        marginTop: 10,

        marginHorizontal: 30,



        //  backgroundColor: 'orange'
    },
})
const mapStateToProps = (store) => (
    {
    loading: store.user.loading,
    steps: store.user.steps,
}
);


const mapDispatchToProps = (dispatch) => ({
    GetFitnessData: (token) => dispatch(GetUserFitnessData(token))
   

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
//export default Home;

