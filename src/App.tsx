import React from "react";
import { Text, View, ActivityIndicator } from "react-native";

import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

const App: React.FC = () => {
    const [fontsLoaded] = useFonts([
        DMSans_400Regular,
        DMSerifDisplay_400Regular,
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
    ]);

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#000" />;
    }

    return (
        <View>
            <Text>Wallet App</Text>
        </View>
    );
};

export default App;
