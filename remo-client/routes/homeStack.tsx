import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home';
import BarcodeScanner from '../screens/barcodeScanner';

const screens = {
    Home: {
        screen: Home
    },
    BarcodeScanner: {
        screen: BarcodeScanner
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);