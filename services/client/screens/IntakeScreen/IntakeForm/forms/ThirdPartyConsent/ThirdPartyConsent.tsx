import {  View } from "react-native";
import React from "react";
import {  Text } from "native-base";

import styled from "styled-components/native";
import Navigation from "../../Navigation";

export default function ClientRelease({ nextStep, prevStep }) {
  return (
    <View>
      <Text fontSize={"2xl"}>
        Consent To Release Information to a Third Party from Family Promise/Open
        Doors Spokane Confidentiality Statement
      </Text>

      <Spacer />

      <Text>
        As a client or former client of a Family Promise program, you must give
        Family Promise/Open Doors written permission before it will discuss or
        otherwise exchange your information with a third party (e.g., a
        probation/parole officer, lawyer, relative, agency, etc.), including the
        mere confirmation of whether you participated in a Family Promise
        program. You may request a review of your counseling or other records
        with a staff person at a reasonable time. However, the confidential
        information of other individuals may not be reviewed absent their
        written consent on a form like this one. In order to provide you the
        best service, Family Promise/Open Doors may internally exchange
        information between its different components on a need-to-know basis.
        Under all circumstances, your confidentiality will be respected and
        guarded.
      </Text>

      <Spacer />

      <Text>
        This notice and consent-to-release form describes how mental-health,
        substance abuse-related, and other information about you may be used and
        disclosed and how you can obtain access to such information. Please
        review it carefully.
      </Text>

      <Hr />

      <Text fontSize={"xl"}>
        NOTICE TO AGENCY OR INDIVIDUAL RECEIVING CONFIDENTIAL INFORMATION:
      </Text>

      <Text>
        This information has been disclosed to you from records that may be
        protected by federal and state confidentiality rules (e.g., those
        codified at 42 C.F.R. part 2, those of the Health Insurance Portability
        and Accountability Act (“HIPAA”), or other applicable laws and
        regulations). Generally, the federal and state rules prohibit you from
        further disclosing this information unless expressly permitted by the
        written consent of the person to whom it pertains or as otherwise
        permitted by applicable laws and regulations. A general authorization
        for the release of medical or other information is NOT sufficient for
        that purpose. The federal rules restrict any use of the information to
        criminally investigate or prosecute any patient being treated for
        alcohol or substance abuse.
      </Text>

      <Spacer />

      <Text fontSize={"xl"}>Client’s Release of Confidential Information:</Text>

      <Text>
        Your records are considered confidential and may be protected by federal
        law and regulations. They will not be released to other individuals or
        agencies without your written consent, which you are providing through
        this form. However, certain information protected by 42 C.F.R. part 2
        may be released without your authorization under the following
        circumstances:
      </Text>

      <Spacer />
      <Text> Upon Family Promises’ receipt of a legitimate court order;</Text>
      <Text> to medical personnel in a medical emergency;</Text>
      <Text>
        {" "}
        to qualified personnel for research, audit, or program evaluation;
      </Text>
      <Text>
        {" "}
        if you threaten or commit a crime on the program premises or against
        Family Promise personnel;
      </Text>
      <Text>
        {" "}
        if there is evidence to suggest child abuse or neglect, or risk of harm
        to a child;
      </Text>
      <Text> if you pose a threat of serious harm to self or to others;</Text>
      <Text>
        {" "}
        if necessary to provide a counseling-related service, Family Promise
        staff may internally share your information with other Family Promise
        staff, strictly on a need-to-know basis; and
      </Text>
      <Text>
        {" "}
        if there is a Qualified Service Organization Agreement (“QSOA”) in
        effect for a specific service, e.g., laboratory or medical services.
        Violation of certain confidentiality rules is a crime and may be
        reported to Family Promise.
      </Text>

      <Spacer />

      <Text fontSize={"2xl"}>
        {" "}
        Please ask Family Promise staff for help if you are concerned or need
        assistance understanding any part of this form.
      </Text>

      <Navigation prevStep={prevStep} handleSubmit={nextStep} />
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

