import {Slot} from "expo-router";
import {View, Text} from "react-native";

export default function Layout() {
    return (
        <View style={{flex: 1}}>
            <View style={{padding: 16, backgroundColor: 'blue'}}>
                <Text style={{color: 'white', fontSize: 18}}>Header</Text>
            </View>

            <Slot/>

            <View style={{padding: 16, backgroundColor: 'gray'}}>
                <Text style={{color: 'white', textAlign: 'center'}}>Footer</Text>
            </View>
        </View>
    );
}
