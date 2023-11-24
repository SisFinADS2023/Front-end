const Modal = ({ children, isOpen, changeOpen}) => {

    if (!isOpen) return (<></>)
    return (
        <div className="modal bg-secondary-100 w-[256px] h-[156px] rounded-md" >
            <main>
                {children}
                <button onClick={() => {changeOpen(false)}}>Fechar</button>
            </main>
        </div>
    )
}

export default Modal