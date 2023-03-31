import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native'
import {
    ImageSourcePropType,
    StyleProp,
    ViewStyle,
    ImageStyle,
    ImageResizeMode,
    TextStyle,
} from 'react-native/types'

import Utils from '../../utils'
import Config from '../../config'

const CustomButton = ({
    style = {},
    imageStyle = {},
    textStyle = {},
    title = '',
    source,
    resizeMode = 'contain',
    onPress,
}: CustomButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.75}
            style={[styles.container, style]}
            onPress={onPress}>
            {title && <Text style={[styles.title, textStyle]}>{title}</Text>}
            {source && <Image source={source} style={[styles.image, imageStyle]} resizeMode={resizeMode} />}
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Config.Theme.COLOR_F00A6A,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Utils.calcWidth(4),
        padding: Utils.calcWidth(3),
    },
    title: {
        fontFamily: Config.Theme.NOTO_SANS_MEDIUM,
        fontSize: Utils.calcWidth(3.6),
        color: Config.Theme.COLOR_WHITE,
    },
    image: {
        height: Utils.calcWidth(3),
        width: Utils.calcWidth(3),
    },
})

interface CustomButtonProps {
    style?: StyleProp<ViewStyle>,
    imageStyle?: StyleProp<ImageStyle>,
    textStyle?: StyleProp<TextStyle>
    onPress: () => void,
    title?: string | number,
    source?: ImageSourcePropType,
    resizeMode?: ImageResizeMode,
}
