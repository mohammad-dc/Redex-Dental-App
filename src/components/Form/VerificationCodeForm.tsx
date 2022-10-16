import {View, Text} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {verificationCodeSchema} from '../../validations/auth';
import {HStack, Spacer, VStack} from 'native-base';
import SmallInputBox from './Inputs/SmallInputBox';
import Button from './Buttons/Button';

const initialValues = {
  box1: '',
  box2: '',
  box3: '',
  box4: '',
  box5: '',
  box6: '',
};

export default function VerificationCodeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={verificationCodeSchema}
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
            <HStack
              space={2}
              alignItems={'center'}
              justifyContent={'space-between'}>
              {Array.from({length: 6}).map(() => (
                <SmallInputBox
                  name={`box1`}
                  isInvalid={(!errors.box1 && touched.box1) || false}
                  onBlur={handleBlur('box1')}
                  onChangeText={handleChange('box1')}
                  type="text"
                  value={values.box1}
                  error={errors.box1}
                  key={Math.random()}
                />
              ))}
            </HStack>
            <Spacer h={1} />
            <Button
              isLoading={isSubmitting}
              isLoadingText={'Verifying'}
              onPress={handleSubmit}
              style="primary"
              text="Verify"
            />
          </VStack>
        </View>
      )}
    </Formik>
  );
}
