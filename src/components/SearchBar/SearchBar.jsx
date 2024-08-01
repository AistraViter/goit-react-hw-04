import { Formik, Form, Field } from "formik";
import { PiMagnifyingGlass } from "react-icons/pi";
import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const { searchBar, searchBarIcon, searchBarInputContainer } = styles;
  const initialValues = {
    topic: "",
  };

  const handleSubmit = (values, actions) => {
    if (values.topic.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }

    onSearch(values.topic);
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <Form className={searchBar} onSubmit={handleSubmit}>
            <div className={searchBarInputContainer}>
              <PiMagnifyingGlass className={searchBarIcon} onClick={handleSubmit} />
              <Field
                type="text"
                name="topic"
                placeholder="Search images and photos"
              />
            </div>
          </Form>
        )}
      </Formik>
      <Toaster />
    </>
  );
};

export default SearchBar;
