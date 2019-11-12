import { remote } from "electron"

export const onMaximize = () => {
    if(remote.getCurrentWindow().isMaximized() == true) {
        remote.getCurrentWindow().restore()
    } else {
        remote.getCurrentWindow().maximize()
    }
}

export const onMinimize = () => {
    remote.getCurrentWindow().minimize()
}

export const onClose = () => {
    remote.getCurrentWindow().close()
}

export const isMaximized = () => {
    return remote.getCurrentWindow().isMaximized();
}