import React from 'react';
import {Box, HStack, View, VStack} from 'native-base';
import {colors} from '../common/colors';
import HeaderTitle from '../components/HeaderTitle';
import Logo from '../components/Logo';
import InputBox from '../components/Form/Inputs/InputBox';
import {Formik, Field, Form} from 'formik';
import {loginSchema} from '../validations/auth';
import Text from '../components/Text';
import Button from '../components/Form/Buttons/Button';

const initialValues = {
  password: '',
  phone: '',
};
export default function LoginScreen() {
  return (
    <Box p={4} bg={colors.bg_gray} h={'full'}>
      <VStack space={5}>
        <HeaderTitle heading="Login" />
        <Logo />
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
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
              <VStack space={4}>
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
                <Text value="Forgot password ?" color="dark_blue" size="xs" />
                <Button
                  isLoading={isSubmitting}
                  isLoadingText={'Login'}
                  onPress={handleSubmit}
                  style="primary"
                  text="Login"
                />
              </VStack>
            </View>
          )}
        </Formik>
      </VStack>
    </Box>
  );
}
