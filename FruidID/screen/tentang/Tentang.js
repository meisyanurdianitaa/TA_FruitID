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

const Tentang = ({navigation}) => {


    const katakata = `
    1. Scann, aplikasi cerdas yang membantu Anda menjelajahi dunia buah-buahan dengan detail yang luar biasa. Dapatkan informasi lengkap tentang klasifikasi, kualitas, dan manfaat setiap buah hanya dengan sekali pemindaian."

    2. Dengan Scann, Anda dapat menggali lebih dalam ke dalam dunia buah-buahan. Aplikasi ini memberikan kemampuan luar biasa untuk mengklasifikasikan buah-buahan berdasarkan warna, bentuk, kematangan, dan faktor lainnya dengan presisi tinggi."
    
    3. Jelajahi buah-buahan dengan mata baru menggunakan Scann. Pemindaian yang akurat dan detail memberikan informasi penting seperti tingkat kemanisan, keasaman, tekstur, dan nutrisi yang terkandung dalam setiap buah."
    
    4. Dengan Scann, Anda dapat mempelajari lebih lanjut tentang cara memilih buah-buahan yang sempurna. Temukan buah yang matang, segar, dan penuh nutrisi hanya dengan mengarahkan kamera ponsel Anda ke buah yang ingin diperiksa."
    
    5. Scann membawa klasifikasi buah-buahan ke level berikutnya. Lihat secara detail setiap aspek buah, seperti kerusakan, tanda-tanda kebusukan, dan kebersihan, untuk memastikan Anda mendapatkan buah yang terbaik."
    
    Cara Penggunaan Aplikasi FRUIT ID:
    
    Buka aplikasi Scann dan berikan izin akses kamera untuk memungkinkan pemindaian buah-buahan.
    Arahkan kamera ponsel Anda ke buah yang ingin Anda periksa.
    Biarkan aplikasi melakukan pemindaian dan tunggu beberapa detik hingga hasilnya muncul.
    Aplikasi akan menampilkan hasil pemindaian yang meliputi klasifikasi, kualitas, dan informasi detail buah yang dipilih.
    Jelajahi informasi tambahan tentang buah, seperti manfaat kesehatan, nutrisi, dan tips penyimpanan dengan mengklik pada hasil pemindaian.
    Anda juga dapat mencari buah-buahan spesifik di dalam aplikasi dengan menggunakan fitur pencarian.
    Scann menyimpan riwayat pemindaian Anda sehingga Anda dapat melihat kembali buah-buahan yang telah Anda periksa sebelumnya.
    Nikmati pengalaman belanja buah-buahan yang lebih cerdas dan sehat dengan bantuan aplikasi Scann.
    Catatan: Pastikan Anda memiliki koneksi internet yang stabil untuk menggunakan aplikasi Scann dengan optimal.
    
    `;

    return (
        <View>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={'transparent'}
                translucent
            />
            <View className={`${csStyle.appbar}`}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Icon name="chevron-left" size={24} color={'white'} />
                </TouchableOpacity>
                <Text className={`${csStyle.appbartext}`}>TENTANG APLIKASI</Text>
            </View>
            <ScrollView className={`${csStyle.appBody} `}>
                <View className="pb-[100px]">
                    <Text className="text-slate-500 mb-5 font-medium text-base">{katakata}</Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Tentang;
