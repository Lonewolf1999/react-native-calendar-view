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
                label: 'Conf. Meeting',
                desc: 'To dicuss deployment issues',
            },
            {
                id: 2,
                label: 'Web Design',
                desc: 'Confirm Designs for web application',
            },
            {
                id: 3,
                label: 'Mobile Design',
                desc: 'Confirm Designs for mobile application',
            },
            {
                id: 4,
                label: 'Scrum Meeting',
                desc: 'Discuss the progress of development',
            },
        ],
        [collection[1]]: [],
        [collection[2]]: [
            {
                id: 1,
                label: 'Conf. Meeting',
                desc: 'To dicuss deployment issues',
            },
            {
                id: 2,
                label: 'Scrum Meeting',
                desc: 'Discuss the progress of development',
            },
        ],
        [collection[3]]: [
            {
                id: 1,
                label: 'Web Design',
                desc: 'Confirm Designs for web application',
            },
            {
                id: 2,
                label: 'Mobile Design',
                desc: 'Confirm Designs for mobile application',
            },
            {
                id: 3,
                label: 'Scrum Meeting',
                desc: 'Discuss the progress of development',
            },
        ],
        [collection[4]]: [],
        [collection[5]]: [],
        [collection[6]]: [],
    }
}

export default generateData
