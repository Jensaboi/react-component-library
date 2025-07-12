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
                className="button-reset"
                >
                <IoMdSearch className="utility-icons" size="20px"/>
            </button>

            { open && (
                <div className="search-modal">
                    <div className="search-modal-content-container">
                        <button onClick={toggleOpen} className="button-reset">
                            <IoCloseOutline className="utility-icons"  size="26px" />
                        </button>
                        <form>
                            <label htmlFor="query">
                                <IoMdSearch className="utility-icons" size="20px"/>
                            </label>
                            <input name="query" id="query" type="text"/>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
