import * as Yup from 'yup'

const validations = Yup.object().shape({
    title: Yup.string().required('This field is required.').min(4, 'Minimum 4 characters are required.'),
    desc: Yup.string(),
})

export default validations
