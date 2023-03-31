import { Dimensions } from 'react-native';
import { addDays, startOfWeek } from 'date-fns';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen')

const calcWidth = (value: number) => (value * SCREEN_WIDTH) / 100
const calcHeight = (value: number) => (value * SCREEN_HEIGHT) / 100

const statusBarHeight = getStatusBarHeight()

const countWeekDays = (date: Date) => {
    const startWeekDate = startOfWeek(date, { weekStartsOn: 1 })
    return [...Array(7).keys()].map((a) => addDays(startWeekDate, a))
}

export default {
    calcWidth,
    calcHeight,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    statusBarHeight,
    countWeekDays,
}
