import { StyleSheet } from 'react-native'

import Config from '../../config'
import Utils from '../../utils'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingHorizontal: Utils.calcWidth(5),
        marginTop: Utils.calcWidth(2),
        marginBottom: Utils.calcWidth(2),
    },
    header: {
        fontFamily: Config.Theme.NOTO_SANS_SEMIBOLD,
        fontSize: Utils.calcWidth(5),
        textAlign: 'center',
        color: Config.Theme.COLOR_BLACK,
    },
    date: {
        fontFamily: Config.Theme.NOTO_SANS_MEDIUM,
        fontSize: Utils.calcWidth(4),
        textAlign: 'center',
        color: Config.Theme.COLOR_BLACK,
    },
    dateContainer: {
        backgroundColor: Config.Theme.COLOR_TRANSPARENT,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Utils.calcWidth(2),
        width: (Utils.calcWidth(90) / 7),
        height: (Utils.calcWidth(90) / 7),
    },
    dateWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    dayText: {
        marginVertical: Utils.calcWidth(2),
        fontFamily: Config.Theme.NOTO_SANS_REGULAR,
        fontSize: Utils.calcWidth(3.5),
        textAlign: 'center',
        color: Config.Theme.COLOR_BLACK,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: Utils.calcWidth(3),
    },
    arrow: {
        height: Utils.calcWidth(3.5),
        width: Utils.calcWidth(3.5),
    },
    rotate: {
        transform: [{ rotate: '180deg' }],
    },
    arrowBtn: {
        backgroundColor: Config.Theme.COLOR_WHITE,
        paddingVertical: Utils.calcWidth(2),
    },
    colorContainer: {
        position: 'absolute',
        borderRadius: Utils.calcWidth(4),
        width: (Utils.calcWidth(90) / 7),
        height: (Utils.calcWidth(90) / 7),
        backgroundColor: Config.Theme.COLOR_F00A6A,
        zIndex: 0,
        bottom: 0,
    },
    dayContainer: {
        zIndex: 1,
    },
});

export default styles
