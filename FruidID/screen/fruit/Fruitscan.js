import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/Feather';
import { dataBuah } from './../data/dumy';
import { dataBuahIndonesia } from './../data/dummyIndonesia';

const Fruitscan = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    async function requestCameraPermission() {
        try {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs access to your camera',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    },
                );

                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('Kamera diizinkan');
                } else {
                    console.log('Kamera tidak diizinkan');
                }
            }
        } catch (err) {
            console.warn(err);
        }
    }

    requestCameraPermission();


    const handleWebViewMessage = (event) => {
        const datas = event.nativeEvent.data;
        
        console.log(datas)
        const stringWithoutQuotes = datas.replace(/"/g, '');
        const item = dataBuahIndonesia.filter((buah) =>
            buah.namaInggris.toLowerCase().includes(stringWithoutQuotes.toLowerCase())

        );

        if (item.length === 0) {
            setModalVisible(true);
        } else {
            navigation.navigate("Fruitdetailhasilscan", { item})
        }
    };

    return (
        <>
            <WebView
                source={{ uri: 'http://192.168.1.17/MEISA/' }}
                className="flex-1"
                onMessage={handleWebViewMessage}
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View className="flex-1 items-end justify-end" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <View className=" bg-white p-6 w-full h-[300px] rounded-lg items-center justify-center" >
                        <Icon name="alert-circle" size={50} color="#ef4444" />
                        <Text className="font-medium text-red-500 text-center text-xl mt-6">
                            Mohon maaf data buah yang anda cari belum tersedia di aplikasi ini!
                        </Text>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            className="flex items-center justify-center bg-green-600 px-6 py-4 rounded-md w-full mt-6"
                        >
                            <Text className="font-medium text-base text-white">Deteksi Lagi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            {/* Render the filtered data here or use it as needed */}

        </>
    );
};

export default Fruitscan;
