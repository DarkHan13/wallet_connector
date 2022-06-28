import classes from './WalletPopup.module.css'

const WalletPopup = ({active, setActive, children}) => {


    return (
        <div className={active ? classes['active'] : classes['modal__back']} onClick={() => setActive(false)}>
            <div className={active ? classes.modal__content : ''} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default WalletPopup;