import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

import Modal from 'react-native-modalbox'
import { Formik } from 'formik'

import Utils from '../../utils'
import Config from '../../config'
import CustomButton from '../custom-button'
import Input from '../input'
import validations from './validations'

const AddTodoModal = forwardRef<AddTodoModalRef, {}>(({ }, ref) => {

    const modalRef = useRef<Modal>(null)
    const titleRef = useRef<TextInput>(null)

    const [data, setData] = useState<ShowFunctionProps>(defaultState)

    useImperativeHandle(ref, () => ({
        show: (args) => {
            setData(args)
            modalRef.current?.open()
        },
    }))

    const resetModal = () => {
        setData(defaultState)
        modalRef.current?.close()
    }

    return (
        <Modal
            ref={modalRef}
            onOpened={() => titleRef.current?.focus()}
            onClosed={resetModal}
            position={'top'}
            backButtonClose={true}
            style={styles.container}>
            <Formik
                validationSchema={validations}
                initialValues={data}
                validateOnChange={false}
                enableReinitialize={true}
                onReset={resetModal}
                onSubmit={(value) => {
                    data.callback(value)
                    modalRef.current?.close()
                }}>
                {({ handleSubmit, values, errors, handleChange, resetForm }) => (
                    <>
                        <Input
                            ref={titleRef}
                            label={'Title'}
                            error={errors.title}
                            value={values.title}
                            onChangeText={handleChange('title')} />
                        <Input
                            label={'Description'}
                            value={values.desc}
                            error={errors.desc}
                            onChangeText={handleChange('desc')} />
                        <View style={styles.buttons}>
                            <CustomButton
                                title={'Save'}
                                style={styles.button}
                                onPress={handleSubmit} />
                            <CustomButton
                                title={'Cancel'}
                                style={[styles.button, { backgroundColor: Config.Theme.COLOR_FAFAFA }]}
                                textStyle={{ color: Config.Theme.COLOR_F00A6A }}
                                onPress={resetForm} />
                        </View>
                    </>
                )}
            </Formik>
        </Modal>
    )
})

export default AddTodoModal

export interface AddTodoModalRef {
    show: (args: ShowFunctionProps) => void,
}

interface ShowFunctionProps extends FormData {
    callback: (args: FormData) => void,
}

interface FormData {
    title: string,
    desc: string,
}

const defaultState = {
    title: 'abcd',
    desc: 'aaa',
    callback: () => { },
}

const styles = StyleSheet.create({
    container: {
        width: Utils.calcWidth(95),
        height: 'auto',
        borderRadius: 10,
        paddingHorizontal: Utils.calcWidth(3),
        marginTop: Utils.statusBarHeight,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        width: Utils.calcWidth(20),
        marginHorizontal: Utils.calcWidth(2),
        paddingVertical: Utils.calcWidth(1),
        marginVertical: Utils.calcWidth(3),
    },
})
