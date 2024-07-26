import styles from "./Loader.module.css";
import { ThreeDots } from "react-loader-spinner";
const { loader } = styles;

const Loader = () => {
  return (
    <div className={loader}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="blueviolet"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        margin="auto"
      />
    </div>
  );
};
export default Loader;

// import styles from "./Loader.module.css";
// const { loader, loaderItem } = styles;

// const Loader = () => {
//   return (
//     <ul className={loader}>
//       <li>
//         <div className={loaderItem}> </div>
//       </li>
//       <li>
//       <div className={loaderItem}> </div>
//       </li>
//       <li>
//       <div className={loaderItem}> </div>
//       </li>
//     </ul>
//   );
// };
// export default Loader;
