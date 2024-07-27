import { Formik, Form, Field } from "formik";
import toast, { Toaster } from 'react-hot-toast';
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const { searchBar } = styles;
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
      <Form className={searchBar}>
        <Field
          type="text"
          name="topic"
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
    <Toaster />
    </>
    
  );
};

export default SearchBar;
