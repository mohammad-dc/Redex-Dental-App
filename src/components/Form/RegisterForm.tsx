import {View} from 'react-native';
import React from 'react';
import {Field, Formik} from 'formik';
import {Spacer, VStack} from 'native-base';
import InputBox from './Inputs/InputBox';
import Button from './Buttons/Button';
import {registerSchema} from '../../validations/auth';
import SelectBox from './Inputs/SelectBox';

const initialValues = {
  name: '',
  password: '',
  phone: '',
  city: '',
  address: '',
};

const cities = [
  {id: 1, label: 'Jenin', value: 1},
  {id: 1, label: 'Ramallah', value: 2},
  {id: 1, label: 'Nablus', value: 3},
  {id: 1, label: 'Tullkarm', value: 4},
];

export default function RegisterForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
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
          <VStack space={4} py={3}>
            <Field
              as={InputBox}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              isInvalid={!errors.name && touched.name}
              label="Name"
              hint="Enter your name"
              secure={false}
              type="name"
              error={errors.name}
              name="name"
              value={values.name}
            />
            <Field
              as={InputBox}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              isInvalid={!errors.phone && touched.phone}
              label="Mobile"
              hint="Enter your mobile"
              secure={false}
              type="phone"
              error={errors.phone}
              name="phone"
              value={values.phone}
            />
            <Field
              as={InputBox}
              isInvalid={!errors.password && touched.password}
              label="Password"
              hint="Enter your password"
              secure={true}
              type="password"
              error={errors.password}
              name="password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            <SelectBox
              isInvalid={(!errors.city && touched.city) || false}
              label="City"
              name="city"
              value={'jenin'}
              error={errors.city}
              hint={'Select your city'}
              options={cities}
            />
            <Field
              as={InputBox}
              onChangeText={handleChange('address')}
              onBlur={handleBlur('address')}
              isInvalid={!errors.address && touched.address}
              label="address"
              hint="Enter your address"
              secure={false}
              type="address"
              error={errors.address}
              name="address"
              value={values.address}
            />
            <Spacer h={3} />
            <Button
              isLoading={isSubmitting}
              isLoadingText={'Creating'}
              onPress={handleSubmit}
              style="primary"
              text="Create New"
            />
          </VStack>
        </View>
      )}
    </Formik>
  );
}
