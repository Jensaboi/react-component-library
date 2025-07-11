import React from "react"

export default function useToggle(initialValue = false){
    const [open, setOpen] = React.useState(initialValue)

    function toggleOpen(){
        setOpen(prev => !prev)
    }
    return [open, toggleOpen]
}
