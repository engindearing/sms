import { View } from "react-native";

import React from "react";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../../components/TextInput";

import * as Yup from "yup";

import Unorderedlist from "react-native-unordered-list";

import { Text } from "native-base";

import getAge from "../../../../../utils/getAge";

import styled from "styled-components/native";

import Navigation from "../../Navigation";

export default function RaceEthnicityInfo({
  nextStep,
  formValues,
  prevStep,
}) {
  //Options for relationship drop down
  const { members } = formValues;

  let copyOfMembers = members.map((mem) => ({
    ...mem,
    signature: "",
    date: "",
  }));

  const initialValues = {
    consent: "",
    date: "",
    members: [...copyOfMembers],
  };

  // const validationSchema = Yup.object().shape({
  //   consent: Yup.string().required("Required"),

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

  function onSubmit(fields) {

    nextStep();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
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
            Third Party Consent Form (continued)
          </Text>

          <Text fontSize={"2xl"}>EACH SECTION BELOW MUST BE COMPLETED</Text>

          <Spacer />
          <Spacer />

          <TextInput
            width="100%"
            placeholder="First & last name"
            name="dateLastIncident"
            onBlur={handleBlur("dateLastIncident")}
            error={errors.consent}
            onChangeText={handleChange("consent")}
            touched={touched.consent}
            value={values.consent}
            label=" I, hearby knowingly and voluntarily consent to and authorize the
            release of information from my records as specified below."
            marginBottom={"20px"}
          />

          <Text fontSize={"2xl"}>
            The information may be exchanged between the following
            persons/organizations:
          </Text>

          <Spacer />

          <Text fontSize={"lg"}>Name of Facility:</Text>

          <Unorderedlist>
            <Text> Family Promise/Open Doors of Spokane</Text>
            <Text> Address: 2002 E Mission Ave, Spokane, WA 99202</Text>
          </Unorderedlist>

          <Spacer />

          <Text fontSize={"lg"}> Name of Individual, Agency, or Facility:</Text>

          <Unorderedlist>
            <Text> Salvation Army of Spokane</Text>
          </Unorderedlist>

          <Spacer />

          <Text fontSize={"lg"}> Name of Individual, Agency, or Facility:</Text>

          <Unorderedlist>
            <Text> DSHS</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text> CPS</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text> DCYF</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text> Passages</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text> SHA</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text> SVA</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text> Vanessa Behan Crisis Nursery</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text> Catholic Charities</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text>HFCA</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text>Spokane Public Schools</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text> Frontier Behavioral Health</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text> St. Margarets</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text> Any agency deemed appropriate by FPS</Text>
          </Unorderedlist>

          <Spacer />

          <Text>
            These persons/organizations may communicate regarding and disclose
            to each other information related to me and my household
          </Text>

          <Spacer />

          <Text>
            **The information to be released may be communicated to a 3rd party:
            In writing, verbally or electronically
          </Text>

          <Spacer />

          <Text>
            I understand that I may revoke this authorization at any time,
            except to the extent that action has already been taken in reliance
            upon it. This authorization must be revoked in writing for data
            protected under HIPAA but may be revoked orally for data protected
            under 42 C.F.R. part 2. One of the persons/organizations to which
            information is being released can provide you with a form for
            revoking your consent, if applicable. If this authorization is not
            specifically revoked earlier, it will terminate after:{" "}
            <Text fontWeight={"bold"}>
              One year from date of signature below
            </Text>
          </Text>

          <Spacer />

          <Text>
            {" "}
            I understand that I might be denied services if I refuse to consent
            to a disclosure for purposes of treatment, payment, or healthcare
            operations, if permitted by law. I will not be denied services if I
            refuse to consent to a disclosure for other purposes.
          </Text>

          <Spacer />

          <Text>
            **Above mentioned consent will include information about any minor
            children in my care
          </Text>

          <Spacer />

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

const Spacer = styled.View`
  margin-top: 10;

  margin-bottom: 10;
`;

const Hr = styled.View`
  margin-top: 30;
  margin-bottom: 30;
  border-bottom-width: 1;
  margin-bottom: 30;

  border-color: #6960602d;
`;

