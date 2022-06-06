import React from "react";

import { View } from "react-native";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../../../../components/TextInput";

import * as Yup from "yup";

import { Text } from "native-base";

import getAge from "../../../../../../../utils/getAge";

import Navigation from "../../Navigation";
import { useSelector } from "react-redux";

export default function RaceEthnicityInfo({ nextStep, formValues, prevStep }) {
  const { members } = useSelector((state: any) => state.household);

  let copyOfMembers = members.map((mem) => ({
    ...mem,
    signature: "",
    date: "",
  }));

  const initialValues = {
    consent: "",
    anonymous: "",
    date: "",
    members: [...copyOfMembers],
  };

  // const validationSchema = Yup.object().shape({
  //   consent: Yup.string(),
  //   anonymous: Yup.string(),
  //   date: Yup.string()
  //     .required("Required")
  //     .test(
  //       "is-valid-date",
  //       "Invalid date. Make sure the format is correct (MM/DD/YYYY)",
  //       function (value) {
  //         return isValidDate(value);
  //       }
  //     ),

  //   members: Yup.array().of(
  //     Yup.object().shape({
  //       signature: Yup.string().required("Required").nullable(),
  //     })
  //   ),
  // });

  async function onSubmit(fields) {
    nextStep();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({
        errors,
        values,
        touched,
        handleBlur,
        setFieldValue,
        handleSubmit,
        handleChange,
      }) => (
        <View
          style={{
            width: "100%",
          }}
        >
          <Text fontSize="3xl" marginBottom={5}>
            Client Release Signature
          </Text>

          <TextInput
            width="100%"
            placeholder="Initials"
            name="dateLastIncident"
            onBlur={handleBlur("dateLastIncident")}
            error={errors.consent}
            onChangeText={handleChange("consent")}
            touched={touched.consent}
            value={values.consent}
            label="I consent to
  the inclusion of personal information in CMIS about me and any
  dependents listed below and authorize information collected to be
  shared with other local service agencies. I understand that my
  personal information will not be made public and will only be used
  with strict confidentiality. I also understand that I may withdraw
  my consent at any time."
            marginBottom={"20px"}
          />

          <TextInput
            width="100%"
            placeholder="Initials"
            name="dateLastIncident"
            onBlur={handleBlur("dateLastIncident")}
            onChangeText={handleChange("anonymous")}
            error={errors.anonymous}
            touched={touched.anonymous}
            value={values.anonymous}
            label="I do not
  consent to the inclusion of personal information about me or any of
  my dependents."
            marginBottom={"20px"}
          />

          <Text fontSize={"xl"} marginBottom={5}>
            Dependent children under 18 in household, add first and last name
          </Text>

          <FieldArray name="members">
            {() =>
              values.members.map((ticket, i) => {
                const ticketErrors =
                  (errors.members?.length &&
                    errors.members[i] &&
                    errors.members[i]) ||
                  {};

                const ticketTouched =
                  (touched.members &&
                    touched.members[i] &&
                    touched.members[i]) ||
                  {};

                const ticketValues =
                  (values.members[i] && values.members[i]) || {};

                if (getAge(ticket.demographics.dob) >= 18) return <></>;

                return (
                  <View
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      width: "100%",
                      marginBottom: "3%",
                    }}
                  >
                    <TextInput
                      width="100%"
                      placeholder={`Signature`}
                      onBlur={handleBlur("members")}
                      error={ticketErrors.signature}
                      label={`${values.members[i].demographics.firstName} ${values.members[i].demographics.lastName}`}
                      touched={ticketTouched.signature}
                      value={ticketValues.signature}
                      marginBottom={"20px"}
                      onChangeText={(value) => {
                        handleSigChange(
                          "signature",
                          value,
                          values,
                          setFieldValue,
                          i
                        );
                      }}
                    />
                  </View>
                );
              })
            }
          </FieldArray>

          <Text fontSize={"xl"} marginBottom={5}>
            Signature of all adults in household
          </Text>

          <FieldArray name="members">
            {() =>
              values.members.map((ticket, i) => {
                const ticketErrors =
                  (errors.members?.length &&
                    errors.members[i] &&
                    errors.members[i]) ||
                  {};

                const ticketTouched =
                  (touched.members &&
                    touched.members[i] &&
                    touched.members[i]) ||
                  {};

                const ticketValues =
                  (values.members[i] && values.members[i]) || {};

                if (getAge(ticket.demographics.dob) <= 18) return <></>;

                return (
                  <View
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      width: "100%",
                      marginBottom: "3%",
                    }}
                  >
                    <TextInput
                      width="100%"
                      placeholder={`Signature`}
                      onBlur={handleBlur("members")}
                      error={ticketErrors.signature}
                      touched={ticketTouched.signature}
                      value={ticketValues.signature}
                      label={`${values.members[i].demographics.firstName} ${values.members[i].demographics.lastName}`}
                      marginBottom={"20px"}
                      onChangeText={(value) => {
                        handleSigChange(
                          "signature",
                          value,
                          values,
                          setFieldValue,
                          i
                        );
                      }}
                    />
                  </View>
                );
              })
            }
          </FieldArray>

          <Text fontSize={"xl"}>Date</Text>
          <TextInput
            width="100%"
            placeholder="MM/DD/YYYY"
            onBlur={handleBlur("members")}
            error={errors.date}
            touched={touched.date}
            value={values.date}
            marginBottom={"20px"}
            onChangeText={handleChange("date")}
          />

          <Text fontSize={"xl"}>
            *** Please return device to staff member. ***
          </Text>

          <Navigation prevStep={prevStep} handleSubmit={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}

const handleSigChange = (field, value, values, setFieldValue, position) => {
  return setFieldValue("members", [
    ...values.members.map((member, i) => {
      if (i == position) {
        member[field] = value;
      }

      return member;
    }),
  ]);
};
