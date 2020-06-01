import React from 'react'
import ReduxToastr, { toastr } from 'react-redux-toastr'

export const Toastr = () => {
    return <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="bottom-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        closeOnToastrClick />
}

export const toastSuccess = (message: string) => {
    toastr.success("success", message)
}

export const toastInfo = (message: string) => {
    toastr.info("Info", message)
}