import React, { createContext, FC, ReactNode, useContext, useRef, RefObject } from 'react'

import AddTodoModal, { AddTodoModalRef } from '../../component/add-todo-modal'


export type WithChildren = {
    children?: ReactNode
}

export interface ModalContextType {
    addToModalRef?: RefObject<AddTodoModalRef | null>,
}

const ModalContext = createContext<ModalContextType>({})

const ModalContextProvider: FC<WithChildren> = ({ children }) => {

    const addToModalRef = useRef<AddTodoModalRef>(null)

    const value: ModalContextType = {
        addToModalRef,
    }

    return <ModalContext.Provider value={value}>
        {children}
        <AddTodoModal ref={addToModalRef} />
    </ModalContext.Provider>
}

const useModalRefs = () => {
    return useContext(ModalContext);
}

export { ModalContextProvider, useModalRefs }


