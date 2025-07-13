import React from "react"

const MenuContext = React.createContext()

export default function Menu({children, ...rest}){
    const [open, setOpen] = React.useState(false)

    function toggleOpen(){
        setOpen(prev => !prev)
    }

    return (
        <MenuContext.Provider value={{open, toggleOpen}}>
            <div
                {...rest}
            >
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export { MenuContext }