import { createStackNavigator } from 'react-navigation-stack';
import CalculatorScreen from './screens/CalculatorScreen'

const AppNavigator = createStackNavigator({
    Calculator: CalculatorScreen
})

export default AppNavigator