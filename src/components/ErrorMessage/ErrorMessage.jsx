import styles from "./ErrorMessage.module.css";

const ErrorMessage = () =>{
    const { errorMessage } = styles;

    return (
    <p className={errorMessage}>Oops! An error occurred while fetching the images. Please try again!
</p>)
};
export default ErrorMessage;