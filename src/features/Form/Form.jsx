import React from 'react'
import styles from './FormComponent.module.css'
import {
  FormControl,
  Input,
  FormErrorMessage,
  Box,
  Button,
} from "@chakra-ui/react";
import { fetchPlayers, searchPlayers } from '../../slices/playersSlice';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';


export default function FormComponent() {

  const dispatch = useDispatch();

  const onFormikSubmit = ({ query }, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    dispatch(searchPlayers(query));
    resetForm();
  }

  const clearHistory = () => {
    dispatch(fetchPlayers());
  }

  return (
    <div>
      <Box bg="whitesmoke" w={{ base: "", md: "50%" }} m={{ base: "50px 10px", md: "10px auto" }} py={4} px={2} color="black" borderRadius=".5em">
        <Formik initialValues={{ query: '' }} onSubmit={onFormikSubmit}>
          <Form className={styles.formikForm}>
            <Field id="query" name="query" placeholder="Pasta">
              {(item) => (
                <FormControl isInvalid={item.form.errors.name && item.form.touched.name} d="flex" alignItems="center">
                  <Input {...item.field} id="query-input" placeholder="First name or last name" m={15} />
                  <FormErrorMessage>{item.form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Box ml={15} d="flex" alignItems="center" justifyContent="flex-end">
              <Button type="submit" colorScheme="teal" variant="solid">
                Search
              </Button>
              <Button ml={2} onClick={clearHistory} type="submit" colorScheme="teal" variant="outline">
                Reset
              </Button>
            </Box>
          </Form>
        </Formik>
      </Box>
    </div>
  )
}
