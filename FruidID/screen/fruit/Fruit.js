import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { dataBuahIndonesia } from './../data/dummyIndonesia';


const csStyle = {
    appbar:
        'flex flex-row items-center pt-12 pb-2 bg-green-600',
    appbartext: 'font-bold text-2xl text-white',
    boxItemFlatlist: 'bg-slate-100 gap-3 overflow-hidden relative w-full h-[160px]',
    boxItemName: 'absolute rounded-md w-full h-[150px] flex items-center justify-center',
    boxItemNameText: 'font-bold text-base text-slate-white ',
    boxItemBackground: 'w-full h-full rounded-md relative bg-transparent',
    bottomBar: 'absolute bottom-3 right-6 left-6 rounded-full w-[calc(100%_-_46px)] bg-white flex flex-row items-center justify-between',
    bottomBarNavigation: 'w-[calc(100%_/_3)] h-[57px] items-center justify-center flex',
    bottomBarNavigationText: 'text-sm font-medium',
};



const Fruit = ({ navigation }) => {



    function renderItem({ item }) {

        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("Fruitdetail", {
                    item
                })}
                className={`${csStyle.boxItemFlatlist}`}

            >
                <ImageBackground
                    source={item.gambar}
                    resizeMode='cover'
                    className={`${csStyle.boxItemBackground}`}

                >
                    <View
                        className={`${csStyle.boxItemName}`}
                        style={{
                            backgroundColor: 'rgba(0,0,0,0.2)'
                        }}
                    >
                        <Text className={`${csStyle.boxItemNameText}`}>{item.namaIndonesia}</Text>
                    </View>
                </ImageBackground>

            </TouchableOpacity>
        );
    }

    return (
        <View className="bg-slate-200 flex-1 pb-1">
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={'transparent'}
                translucent
            />
            <View className={`${csStyle.appbar}`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Home")}
                    className="flex items-center justify-center p-4"
                >
                    <Icon name="chevron-left" size={24} color="white" />
                </TouchableOpacity>
                <Text className={`${csStyle.appbartext}`}>BUAH BUAHAN</Text>

            </View>
            <FlatList
                // keyExtractor={(item) => item.id.toString()}
                data={dataBuahIndonesia}
                // numColumns={2}
                renderItem={renderItem}
                contentContainerStyle={{
                    margin: 12,
                }}
            />

        </View>
    );
};

export default Fruit;
