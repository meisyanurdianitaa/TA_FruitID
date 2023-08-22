import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const Width = Dimensions.get('window').width;
import Sound from 'react-native-sound'; // Import the Sound module


const csStyle = {
    appbar:
        'flex flex-row items-center  pt-12 px-6 pb-3 bg-green-600',
    appbartext: 'font-bold text-2xl text-white ml-5',
    boxItemFlatlist: 'bg-slate-100 gap-3 rounded-md overflow-hidden relative w-[190px] h-[150px]',
    boxItemName: 'absolute rounded-md w-full h-full flex items-center justify-center p-4',
    boxItemNameText: 'font-bold text-base text-slate-white ',
    boxItemBackground: 'w-full h-[150px] rounded-md',
    appBody: 'p-6 bg-white ',
    imageDetail: 'w-full h-[250px] rounded-md',
};

const Fruitdetail = ({ route, navigation }) => {




 

    const [dataBuah, setDataBuah] = useState(route.params.item);

    const [isPlaying, setIsPlaying] = useState(false);
    const [suaraInstance, setSuaraInstance] = useState(null);
    const soundPath = `${dataBuah.namaSuara.toLowerCase()}.mp3`;
   
    
    const playSound = () => {

        var Suara = new Sound(soundPath, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log(error.message);
                return;
            }

            // Play the sound with an onEnd callback
            Suara.play((success) => {
                if (success) {
                    console.log('successfully finished playing');
                } else {
                    console.log('playback failed due to audio decoding errors');
                }
                // Set state untuk menandakan bahwa suara sudah berhenti
                setIsPlaying(false);
            });
        });

        // Set state untuk menandakan bahwa suara sedang diputar
        setIsPlaying(true);
        Suara.release();
    };

    const pauseSound = () => {
        var Suara = new Sound(soundPath, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log(error.message);
                return;
            }

            // Play the sound with an onEnd callback
            Suara.pause((success) => {
                if (success) {
                    console.log('successfully finished playing');
                } else {
                    console.log('playback failed due to audio decoding errors');
                }
                // Set state untuk menandakan bahwa suara sudah berhenti
                setIsPlaying(false);
            });
        });
    };


    return (

        <View>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={'transparent'}
                translucent
            />
            <View className={`${csStyle.appbar}`}>
                <TouchableOpacity onPress={() => navigation.navigate("Fruit")}>
                    <Icon name="chevron-left" size={24} color={'white'} />
                </TouchableOpacity>
                <Text className={`${csStyle.appbartext}`}>{dataBuah.namaIndonesia}</Text>
            </View>
            <ScrollView className={`${csStyle.appBody} `}>
                <View>
                    <Image source={dataBuah.gambar} className={`${csStyle.imageDetail}`} />
                </View>
                <View className="flex flex-row items-center justify-between pb-3 pt-6">
                    <Text className="text-slate text-base font-medium text-slate-600">Nama Buah</Text>
                    <Text className="text-slate text-base font-medium text-slate-600">{dataBuah.namaIndonesia}</Text>
                </View>
                <View className="flex flex-row items-center justify-between pb-3">
                    <Text className="text-slate text-base font-medium text-slate-600">Warna</Text>
                    <Text className="text-slate text-base font-medium text-slate-600">{dataBuah.warna}</Text>
                </View>
                <View className="flex flex-row items-center justify-between pb-3">
                    <Text className="text-slate text-base font-medium text-slate-600">Rasa</Text>
                    <Text className="text-slate text-base font-medium text-slate-600">{dataBuah.rasa}</Text>
                </View>
                <View className="flex flex-row items-center justify-between pb-3">
                    <Text className="text-slate text-base font-medium text-slate-600">Bentuk</Text>
                    <Text className="text-slate text-base font-medium text-slate-600">{dataBuah.bentuk}</Text>
                </View>
                <View className="py-4 mb-[200px]">
                    <Text className="text-slate text-base font-medium text-slate-500">{dataBuah.caratumbuh}</Text>
                    <View className="mt-6">
                        <TouchableOpacity
                            onPress={isPlaying ? pauseSound : playSound}
                            className="flex flex-row items-center justify-center bg-green-600 p-5 rounded-md w-full"
                        >
                            <Icon name={isPlaying ? "pause" : "library-music"} size={24} color={'white'} />
                            <Text className="font-medium text-base mx-3 text-white">{isPlaying ? "Pause Suara" : "Putar Suara"}</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </View>
    );
};

export default Fruitdetail;
