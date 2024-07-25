import styles from "./Loader.module.css";
const { loader, loaderItem } = styles;

const Loader = () => {
  return (
    <ul className={loader}>
      <li>
        <div className={loaderItem}> </div>
      </li>
      <li>
      <div className={loaderItem}> </div>
      </li>
      <li>
      <div className={loaderItem}> </div>
      </li>
    </ul>
  );
};
export default Loader;
