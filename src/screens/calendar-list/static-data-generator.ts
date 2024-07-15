// Static data to represent the feature change date to the current week dates to see the result
// To make this work properly for the changingweeks need to integrate api

import { format, startOfWeek } from 'date-fns'
import Utils from '../../utils'

const generateData = (date = new Date()) => {
    const collection = Utils.weekDateArrGenerator(startOfWeek(date, { weekStartsOn: 1 }))
        .map(a => format(a, 'dd MMMM yyyy'))
    return {
        [collection[0]]: [
            {
                id: 1,
                label: 'Title One',
                desc: 'Discription One',
            },
            {
                id: 2,
                label: 'Title One',
                desc: 'Discription One',
            },
            {
                id: 3,
                label: 'Title One',
                desc: 'Discription One',
            },
            {
                id: 4,
                label: 'Title One',
                desc: 'Discription One',
            },
        ],
        [collection[1]]: [],
        [collection[2]]: [
            {
                id: 5,
                label: 'Title Five',
                desc: 'Discription Five',
            },
            {
                id: 6,
                label: 'Title Six',
                desc: 'Discription Six',
            },
        ],
        [collection[3]]: [
            {
                id: 7,
                label: 'Title Seven',
                desc: 'Discription Seven',
            },
            {
                id: 8,
                label: 'Title Eight',
                desc: 'Discription Eight',
            },
            {
                id: 9,
                label: 'Title Nine',
                desc: 'Discription Nine',
            },
        ],
        [collection[4]]: [],
        [collection[5]]: [],
        [collection[6]]: [],
    }
}

export default generateData
