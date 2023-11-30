const Modal = ({ children, isOpen, changeOpen}) => {

    if (!isOpen) return (<></>)
    return (
        <div id="modal" className="modal bg-white w-[256px] h-[156px] rounded-md right-2 mt-1 fixed" >
            <main>
                {children}
            </main>
        </div>
    )
}

export default Modal