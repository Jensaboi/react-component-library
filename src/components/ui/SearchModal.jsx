import React from "react"
import { IoMdSearch } from "react-icons/io";
import useToggle from "../../hooks/useToggle";
import { IoCloseOutline } from "react-icons/io5";

export default function SearchModal(){

    const [open, toggleOpen ] = useToggle(false)

    return(
        <div>
            <button
                onClick={toggleOpen}
                >
                <IoMdSearch className="utility-icons" size="20px"/>
            </button>

            { open && (
                <div className="fixed w-full bg-white text-black dark:bg-slate-900 dark:text-white top-0 left-0 h-screen flex flex-col justify-start items-center">
                    <div className="flex flex-row justify-start items-start">
                        <form className="flex flex-row justify-center items-center">
                            <label htmlFor="query">
                                <IoMdSearch className="utility-icons" size="20px"/>
                            </label>
                            <input name="query" id="query" type="text"/>
                        </form>
                        
                        <button onClick={toggleOpen}>
                            <IoCloseOutline className="utility-icons"  size="26px" />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
