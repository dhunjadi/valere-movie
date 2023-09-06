const Button = ({onClick, children, className = 'c-button', type = 'button', disabled}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={`c-button ${className} ${disabled && 'is-disabled'}`} onClick={onClick} type={type} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
