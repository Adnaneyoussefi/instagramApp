import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, View, Text, Divider } from "react-native";

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/96/000000/home.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/000000/home.png'
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-search-interface-kiranshastry-solid-kiranshastry.png',
        inactive: 'https://img.icons8.com/ios-glyphs/60/000000/search--v2.png'
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/100/000000/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/100/000000/instagram-reel.png'
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/external-yogi-aprelliyanto-glyph-yogi-aprelliyanto/32/000000/external-shop-shopping-and-ecommerce-yogi-aprelliyanto-glyph-yogi-aprelliyanto.png',
        inactive: 'https://img.icons8.com/external-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto/64/000000/external-shop-shopping-and-ecommerce-yogi-aprelliyanto-basic-outline-yogi-aprelliyanto.png'
    },
    {
        name: 'Profile',
        active: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg',
        inactive: 'https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg'
    }
];

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = React.useState('Home');

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image 
                source={{ uri:  icon.name == activeTab ? icon.active : icon.inactive }} 
                style={[
                    styles.icon, 
                    icon.name == 'Profile' ? styles.profilePic() : null,
                    icon.name == activeTab && activeTab == 'Profile' ? styles.profilePic(activeTab) : null
                    ]} />
        </TouchableOpacity>
    )
    return ( 
        <View>
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10
    },
    icon: {
      width: 30,
      height: 30
    },
    profilePic: (activeTab = '') => ({
        borderRadius: 50,
        borderWidth: activeTab === 'Profile' ? 2 : 0,
        borderColor: 'black'
        })
  });

export default BottomTabs;