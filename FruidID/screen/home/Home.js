import { 
    View, 
    Text, 
    StatusBar, 
    TouchableOpacity,
    Image
} from 'react-native'
import React from 'react'
const buahbuahan = require('./../imageicons/buahbuahan.png');
const qrcodes = require('./../imageicons/qr-codes.png');
const videoImage = require('./../imageicons/video.png');
const information = require('./../imageicons/information.png');
const brand = require('./../imageicons/brand.png');

const Home = ({navigation}) => {
    return (
        <View className="flex-1 bg-slate-200">
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent />
           <View className="flex items-center justify-center h-1/2">
                <Image source={brand} className="w-[200px] h-[200px]" resizeMode='contain'/>
                <Text className="text-4xl font-bold text-green-600 ml-6 uppercase">FRUIT ID</Text>
           </View>
           <View className="flex items-center justify-center p-6  h-1/2">
                <TouchableOpacity
                    onPress={() => navigation.navigate("Fruit")}
                    className="flex flex-row items-center bg-emerald-700 w-full rounded-xl mb-6"
                >
                    <View className="flex items-center justify-center p-4">
                        <Image source={buahbuahan} className="w-[40px] h-[40px]"/>
                    </View>
                    <Text className="text-xl font-medium text-white ml-6 uppercase">Buah Buahan</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Fruitscan")}
                    className="flex flex-row items-center bg-emerald-700 w-full rounded-xl mb-6"
                >
                    <View className="flex items-center justify-center p-4">
                        <Image source={qrcodes} className="w-[40px] h-[40px]"/>
                    </View>
                    <Text className="text-xl font-medium text-white ml-6 uppercase">KAMERA SCANNER</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Vidio")}
                    className="flex flex-row items-center bg-emerald-700 w-full rounded-xl mb-6"
                >
                    <View className="flex items-center justify-center p-4">
                        <Image source={videoImage} className="w-[40px] h-[40px]"/>
                    </View>
                    <Text className="text-xl font-medium text-white ml-6 uppercase">VIDEO BUAH</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Tentang")}
                    className="flex flex-row items-center bg-emerald-700 w-full rounded-xl mb-6"
                >
                    <View className="flex items-center justify-center p-4">
                        <Image source={information} className="w-[40px] h-[40px]"/>
                    </View>
                    <Text className="text-xl font-medium text-white ml-6 uppercase">TENTANG APLIKASI</Text>
                </TouchableOpacity>
           </View>
        </View>
    )
}

export default Home