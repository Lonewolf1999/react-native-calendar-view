import { StyleSheet } from 'react-native'

import Config from '../../config'
import Utils from '../../utils'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Config.Theme.COLOR_WHITE,
    },
    belt: {
        width: Utils.SCREEN_WIDTH * 100,
        height: Utils.calcHeight(17),
        backgroundColor: Config.Theme.COLOR_0000A0,
        position: 'absolute',
        alignSelf: 'center',
        transform: [{ rotate: '20deg' }],
        zIndex: 0,
        bottom: '10%',
    },
    secondBelt: {
        bottom: '50%',
    },
    logListContainer: {
        backgroundColor: Config.Theme.COLOR_WHITE,
        marginVertical: Utils.calcWidth(3),
        paddingHorizontal: Utils.calcWidth(4),
        paddingVertical: Utils.calcWidth(3),
        borderRadius: Utils.calcWidth(4),
    },
    logHeader: {
        fontFamily: Config.Theme.NOTO_SANS_SEMIBOLD,
        fontSize: Utils.calcWidth(4),
        color: Config.Theme.COLOR_BLACK,
    },
    labelText: {
        color: Config.Theme.COLOR_BLACK,
        fontFamily: Config.Theme.NOTO_SANS_MEDIUM,
        fontSize: Utils.calcWidth(3.8),
    },
    descText: {
        color: Config.Theme.COLOR_999999,
        fontFamily: Config.Theme.NOTO_SANS_REGULAR,
        fontSize: Utils.calcWidth(3.5),
    },
    logContainer: {
        marginVertical: Utils.calcWidth(3),
        marginHorizontal: Utils.calcWidth(2),
    },
    noData: {
        fontFamily: Config.Theme.NOTO_SANS_MEDIUM,
        fontSize: Utils.calcWidth(3.8),
        color: Config.Theme.COLOR_999999,
        textAlign: 'center',
    },
    calendarContainer: {
        zIndex: 2,
        paddingHorizontal: Utils.calcWidth(5),
        backgroundColor: Config.Theme.COLOR_WHITE,
        paddingBottom: Utils.calcWidth(5),
        paddingTop: Utils.statusBarHeight,
    },
    plusIcon: {
        tintColor: Config.Theme.COLOR_WHITE,
        height: Utils.calcWidth(6),
        width: Utils.calcWidth(6),
    },
    floatingBtn: {
        shadowColor: Config.Theme.COLOR_F00A6A,
        position: 'absolute',
        bottom: 40,
        right: 40,
        zIndex: 1,
    },
    list: {
        zIndex: 1,
    },
    shadow: {
        shadowColor: Config.Theme.COLOR_BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
    },
})

export default styles
