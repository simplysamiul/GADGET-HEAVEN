import './Button.css';

const Button = ({ children, addClick }) => <button onClick={addClick}  className='text-[#9538E2] font-bold common-btn'>{children}</button>;
export default Button;