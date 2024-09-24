import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';

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

const CalendarView = ({
    selectedDate,
    setShow,
    setSelectedDate,
}: CalendarViewProps) => {
    return <RNDateTimePicker
        {...(Platform.OS === 'ios' && { accentColor: Config.Theme.COLOR_F00A6A })}
        display='default'
        value={selectedDate}
        mode={'date'}
        style={{ backgroundColor: Config.Theme.COLOR_WHITE }}
        onChange={(event, selectedDate) => {
            setShow(false);
            if (selectedDate) {
                setSelectedDate(selectedDate);
            }
        }}
        onTouchCancel={() => {
            setShow(false)
        }}
    />
}

const WeeklyCalendar = forwardRef<{ week: Date[] }, MainScreenProps>(({
    selectedDate = startOfWeek(new Date(), { weekStartsOn: 1 }),
    selectedAnim,
    onCalendarDayPress,
    setSelectedDate,
}: MainScreenProps, ref) => {

    useImperativeHandle(ref, () => ({
        week,
        setWeek,
    }));

    const [week, setWeek] = useState<Date[]>(Utils.weekDateArrGenerator(startOfWeek(selectedDate, { weekStartsOn: 1 })))
    const [show, setShow] = useState(false);

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: selectedAnim.value * (calcWorklet(90) / 7) }],
        };
    });

    useEffect(() => {
        const week = Utils.weekDateArrGenerator(startOfWeek(selectedDate, { weekStartsOn: 1 }))
        const index = week.findIndex(a => isEqual(a.setHours(0, 0, 0, 0), selectedDate.setHours(0, 0, 0, 0)))
        selectedAnim.value = withTiming(index === -1 ? 0 : index)

        setWeek(week)
    }, [selectedDate])

    const onChangeWeek = (isNext: boolean) => {
        const data = Utils.weekDateArrGenerator(addDays(week.at(isNext ? -1 : 0) || 0, isNext ? 7 : -7))
        setWeek(data)
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
                        {Platform.OS === 'ios' && <CalendarView
                            selectedDate={selectedDate}
                            setShow={setShow}
                            setSelectedDate={setSelectedDate}
                        />}

                        {Platform.OS === 'android' && <>
                            {show && <CalendarView
                                selectedDate={selectedDate}
                                setShow={setShow}
                                setSelectedDate={setSelectedDate}
                            />}
                            <Text style={styles.header}>{format(week[0], 'MMMM yyyy')}</Text>
                        </>}
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
})

export default WeeklyCalendar;

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

interface CalendarViewProps extends CommonProps {
    setShow: (value: boolean) => void,
}

interface MainScreenProps extends CommonProps {
    selectedAnim: SharedValue<number>,
    onCalendarDayPress: (value: Date) => void,
}

interface CommonProps {
    selectedDate: Date,
    setSelectedDate: (value: Date) => void,
}
