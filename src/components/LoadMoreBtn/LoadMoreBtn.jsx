import styles from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ onClick }) => {
    const {loadMoreBtn} = styles;
    return (<button onClick={onClick} className={loadMoreBtn} type="button">Load more...</button> )
};
export default LoadMoreBtn;

  