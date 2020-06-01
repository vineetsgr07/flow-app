import { toastr } from 'react-redux-toastr'

export const toastSuccess = (title: string, message: string) => {
    toastr.success(title, message)
}

export const toastInfo = (title: string, message: string) => {
    toastr.info(title, message)
}