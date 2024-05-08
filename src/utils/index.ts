import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen')

const calcWidth = (value: number) => (value * SCREEN_WIDTH) / 100
const calcHeight = (value: number) => (value * SCREEN_HEIGHT) / 100

const statusBarHeight = getStatusBarHeight()

export default {
    calcWidth,
    calcHeight,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    statusBarHeight,
}
