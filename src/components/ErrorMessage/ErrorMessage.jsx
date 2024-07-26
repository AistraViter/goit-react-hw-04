import styles from "./ErrorMessage.module.css";

const ErrorMessage = () =>{
    const { errorMessage } = styles;

    return (<p className={errorMessage}>Oops! There was an error, please reload this page! </p>)
};
export default ErrorMessage;