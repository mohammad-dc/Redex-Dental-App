import {View, Text} from 'react-native';
import React from 'react';
import {Field, Formik} from 'formik';
import {newPasswordSchema} from '../../validations/auth';
import InputBox from './Inputs/InputBox';
import {Spacer, VStack} from 'native-base';
import Button from './Buttons/Button';

const initialValues = {
  new_password: '',
  confirm_password: '',
};

export default function NewPasswordForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={newPasswordSchema}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        console.log({values});
        actions.setSubmitting(false);
      }}>
      {({
        isSubmitting,
        handleChange,
        handleBlur,
        values,
        handleSubmit,
        errors,
        touched,
      }) => (
        <View>
          <VStack space={5}>
            <Field
              as={InputBox}
              isInvalid={!errors.new_password && touched.new_password}
              label="New Password"
              hint="New password"
              secure={true}
              type="password"
              error={errors.new_password}
              name="new_password"
              value={values.new_password}
              onChangeText={handleChange('new_password')}
              onBlur={handleBlur('new_password')}
            />
            <Field
              as={InputBox}
              isInvalid={!errors.confirm_password && touched.confirm_password}
              label="Confirm Password"
              hint="Confirm password"
              secure={true}
              type="password"
              error={errors.confirm_password}
              name="confirm_password"
              value={values.confirm_password}
              onChangeText={handleChange('confirm_password')}
              onBlur={handleBlur('confirm_password')}
            />
            <Spacer h={3} />
            <Button
              isLoading={isSubmitting}
              isLoadingText={'Saving'}
              onPress={handleSubmit}
              style="primary"
              text="Save"
            />
          </VStack>
        </View>
      )}
    </Formik>
  );
}
