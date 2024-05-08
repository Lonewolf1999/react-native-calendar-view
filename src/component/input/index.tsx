import React, { forwardRef } from 'react'
import { StyleSheet, Text, View, TextInput, StyleProp, TextStyle, TextInputProps } from 'react-native'

import Utils from '../../utils'
import Config from '../../config'

const Input = forwardRef<TextInput, InputProps>(({
    label,
    error,
    labelStyle,
    errorStyle,
    inputStyle,
    onChangeText,
    value,
}, ref) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.label, labelStyle]}>{label}</Text>
            <TextInput
                ref={ref}
                cursorColor={Config.Theme.COLOR_F00A6A}
                style={[styles.input, inputStyle, !!error && { borderColor: Config.Theme.COLOR_ERROR }]}
                value={value}
                onChangeText={onChangeText} />
            <Text style={[styles.error, errorStyle]}>{error}</Text>
        </View>
    )
})

export default Input

interface InputProps extends TextInputProps {
    label: string,
    error?: string,
    labelStyle?: StyleProp<TextStyle>,
    errorStyle?: StyleProp<TextStyle>,
    inputStyle?: StyleProp<TextStyle>,
}

const styles = StyleSheet.create({
    container: {
        marginVertical: Utils.calcWidth(2),
    },
    label: {
        marginVertical: Utils.calcWidth(0.5),
        fontFamily: Config.Theme.NOTO_SANS_REGULAR,
        fontSize: Utils.calcWidth(4),
        color: Config.Theme.COLOR_BLACK,
    },
    error: {
        fontFamily: Config.Theme.NOTO_SANS_REGULAR,
        fontSize: Utils.calcWidth(3.5),
        color: Config.Theme.COLOR_ERROR,
    },
    input: {
        color: Config.Theme.COLOR_BLACK,
        borderColor: Config.Theme.COLOR_F00A6A,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: Utils.calcWidth(3),
        fontSize: Utils.calcWidth(4),
        paddingVertical: Utils.calcWidth(1),
    },
})
