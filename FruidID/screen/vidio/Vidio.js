import React, {
    useEffect,
    useState,
    useCallback
} from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    FlatList
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
const Width = Dimensions.get('window').width;
import YouTubeIframe from 'react-native-youtube-iframe';
import { dataBuah } from './../data/dumy';
import { WebView } from 'react-native-webview';

const csStyle = {
    Appbar: 'flex flex-row items-center  pt-12 px-6 pb-3 bg-green-600',
    AppbarBrand: 'font-bold text-2xl text-white ml-5',
};

const Vidio = ({ navigation }) => {



    return (
        <>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={'transparent'}
                translucent
            />
            <WebView

                source={{ uri: 'http://192.168.1.17/MEISA/vidio.html' }}
                className="flex-1"
                onMessage={(event) => {
                    const data = event.nativeEvent.data;
                    sethasil(data);
                }}
            />
        </>
    );
};

export default Vidio;
