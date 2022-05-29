import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "native-base";

import styled from "styled-components/native";

import Navigation from "../../Navigation";

export default function ClientRelease({ nextStep, prevStep }) {
  return (
    <View>
      <Text fontSize={"2xl"}>Spokane CMIS</Text>

      <Spacer />

      <Text>
        IMPORTANT: Do not enter personally identifying information into CMIS for
        clients who are: 1) in DV agencies, 2) currently fleeing or in danger
        from a domestic violence, dating violence, sexual assault or stalking
        situation; or 3) do not want to provide personally identifiable
        information . If this applies to you, STOP- Do not sign this form.
      </Text>

      <Spacer />

      <Text>
        This agency participates in the Homeless Management Information System
        (CMIS) by collecting information, over time, about the characteristics
        and service needs of men, women, and children experiencing homelessness.
      </Text>

      <Hr />

      <Text>
        To provide the most effective services in moving people from
        homelessness to permanent housing, we need an accurate count of all
        people experiencing homelessness in the region. In order to make sure
        that clients are not counted twice if services are received by more than
        one agency, we need to collect some personal information. We need: name,
        birth date, race, ethnicity, social security number, etc. You may be
        asked questions on topics like: income sources, veteran status,
        education, and disabilities. This information is used to improve the
        quality of service you, and others like you, receive. You have the right
        to refuse to provide this information. The information you provide for
        inclusion in the CMIS will not affect the quality or quantity of
        services you are eligible to receive from this agency, and will not be
        used to deny outreach, shelter or housing.
      </Text>

      <Spacer />

      <Text>
        In order to get an accurate count of all people experiencing
        homelessness in the region and improve homeless services that you and
        others like you receive, the information you provide may be shared with
        other service agencies and the WA State Dept. of Commerce. You may
        request a comprehensive list of agencies that have access to your
        information via written or verbal request to the agency that collected
        your information. A list of agencies is also posted at
        www.spokanehmis.org.
      </Text>

      <Spacer />

      <Navigation prevStep={prevStep} handleSubmit={() => nextStep()} />
    </View>
  );
}

const Spacer = styled.View`
  margin-top: 2%;

  margin-bottom: 2%;
`;

const Hr = styled.View`
  margin-top: 30;
  margin-bottom: 30;
  border-bottom-width: 1;
  margin-bottom: 30;

  border-color: #6960602d;
`;

const styles = StyleSheet.create({});
