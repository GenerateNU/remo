import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home';
import BarcodeScanner from '../screens/barcodeScanner';
import GoogleSSO from '../screens/googleSSO';

const screens = {
    Home: {
        screen: Home
    },
    BarcodeScanner: {
        screen: BarcodeScanner
    },
    GoogleSSO: {
        screen: GoogleSSO
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);