import { addDays, format, isWithinInterval } from 'date-fns';
import { Dimensions } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen')

const calcWidth = (value: number) => (value * SCREEN_WIDTH) / 100
const calcHeight = (value: number) => (value * SCREEN_HEIGHT) / 100

const statusBarHeight = getStatusBarHeight()

const weekDateArrGenerator = (date: Date) => {
    return [...Array(7).keys()].map((a) => addDays(date, a))
}

export default {
    calcWidth,
    calcHeight,
    weekDateArrGenerator,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    statusBarHeight,
}
