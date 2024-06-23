import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import RNDateTimePicker from '@react-native-community/datetimepicker';
import Reanimated, { SharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { startOfWeek, addDays, isEqual, format } from 'date-fns';

import Config from '../../config'
import Utils from '../../utils'
import styles from './styles'
import CustomButton from '../custom-button';

const calcWorklet = (value: number): number => {
    'worklet'
    return (value * Utils.SCREEN_WIDTH) / 100
}
const countWeekDays = (date: Date) => {
    return [...Array(7).keys()].map((a) => addDays(date, a))
}

const WeeklyCalendar = ({
    selectedDate = startOfWeek(new Date(), { weekStartsOn: 1 }),
    selectedAnim,
    onCalendarDayPress,
    setSelectedDate,
}: MainScreenProps) => {

    const [week, setWeek] = useState<Date[]>(countWeekDays(startOfWeek(new Date(), { weekStartsOn: 1 })))
    const [show, setShow] = useState(false);

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: selectedAnim.value * (calcWorklet(90) / 7) }],
        };
    });

    useEffect(() => {
        const index = week.findIndex(a => isEqual(a.setHours(0, 0, 0, 0), selectedDate.setHours(0, 0, 0, 0)))
        selectedAnim.value = withTiming(index === -1 ? 0 : index)
    }, [selectedDate])

    const onChangeWeek = (isNext: boolean) => {
        const data = countWeekDays(addDays(week.at(isNext ? -1 : 0) || 0, isNext ? 7 : -7))
        setWeek(() => [...data])
        onCalendarDayPress(data[0])
        selectedAnim.value = withTiming(0)
    }

    const renderDay = (item: Date, index: number) => {
        const isSame = isEqual(selectedDate, item)
        return (
            <View key={item.toString()} style={styles.dayContainer}>
                <Text style={styles.dayText}>{weekDays[item.getDay()]}</Text>
                <CustomButton
                    style={styles.dateContainer}
                    textStyle={[
                        styles.date,
                        isSame && { color: Config.Theme.COLOR_WHITE },
                    ]}
                    onPress={() => {
                        selectedAnim.value = withTiming(index)
                        onCalendarDayPress(item)
                    }}
                    title={item.getDate()}
                />
            </View>)
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.headerContainer}>
                    <CustomButton
                        style={styles.arrowBtn}
                        imageStyle={[styles.arrow, styles.rotate]}
                        source={Config.Images.IC_ARROW}
                        onPress={() => onChangeWeek(false)} />
                    <TouchableOpacity onPress={() => setShow(true)}>
                        <RNDateTimePicker
                            display='calendar'
                            value={selectedDate}
                            mode={'date'}
                            onChange={(event, selectedDate) => {
                                setShow(false);
                                if (selectedDate)
                                    setSelectedDate(selectedDate);
                            }}
                        />
                        {/* <Text style={styles.header}>{format(week[0], 'MMMM yyyy')}</Text> */}
                    </TouchableOpacity>
                    <CustomButton
                        style={styles.arrowBtn}
                        imageStyle={styles.arrow}
                        source={Config.Images.IC_ARROW}
                        onPress={() => onChangeWeek(true)} />
                </View>
                <View style={styles.dateWrapper}>
                    {week.map(renderDay)}
                    <Reanimated.View style={[styles.colorContainer, rStyle]} />
                </View>
            </View>
        </View>
    );
}

export default WeeklyCalendar;

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface MainScreenProps {
    selectedDate: Date,
    selectedAnim: SharedValue<number>,
    onCalendarDayPress: (value: Date) => void,
    setSelectedDate: (value: Date) => void,
}
