import React from 'react'
import styles from './FormComponent.module.css'
import {
  FormControl,
  Input,
  FormErrorMessage,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import { fetchPlayers, searchPlayers } from '../../slices/playersSlice';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import Value from '../../interfaces/valie.interface';
import { useAppDispatch } from '../../app/hooks';


export default function FormComponent() {

  const dispatch = useAppDispatch();

  const onFormikSubmit = async (value: Value, { setSubmitting, resetForm }: FormikHelpers<Value>) => {
    setSubmitting(false);
    dispatch(searchPlayers(value));
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
            <Flex flexDirection={{ base: 'column', md: 'row' }} w={{ base: '100%', md: '100%' }}>
              <Field id="query" name="query" placeholder="Pasta">
                {(item: any) => (
                  <FormControl isInvalid={item.form.errors.name && item.form.touched.name} d="flex" alignItems="center">
                    <Input {...item.field} id="query-input" placeholder="First name or last name" m={15} />
                    <FormErrorMessage>{item.form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Box ml={15} d="flex" alignItems="center" justifyContent={{ base: 'center', md: 'flex-end' }}>
                <Button flexBasis={{ base: '50%', md: 'unset' }} type="submit" colorScheme="teal" variant="solid">
                  Search
                </Button>
                <Button flexBasis={{ base: '50%', md: 'unset' }} ml={2} onClick={clearHistory} type="submit" colorScheme="teal" variant="outline">
                  Reset
                </Button>
              </Box>
            </Flex>
          </Form>
        </Formik>
      </Box>
    </div>
  )
}
