import React from 'react'

import {Text, View } from 'react-native'

import {
    AdditionalInfo,
    BarriersPage,
    ChildSchoolInfo,
    ContactInfo,
    DomesticViolence,
    FamilyDemographics,
    RaceEthnicityInfo,
    FamilyMembers,
    HomelessHistory,
    Insurance,
    IntakeStart,
    Pets,
    ValidateFormData,
} from './'

const IntakeForm = (props) => {

  return (
    <View style={{
        marginLeft: 100,
        marginTop: 10,
    }}>
      <RenderForm {...props} />
    </View>
  )
}

const RenderForm = ({step}) => {
    const props = {}

    switch (step) {
        case 0:
          return <IntakeStart {...props} />;
        case 1:
          return <ContactInfo {...props} />;
        case 2:
          return <FamilyMembers {...props} />;
        case 3:
          return <FamilyDemographics {...props} />;
        case 4:
          return <RaceEthnicityInfo {...props} />;
        case 5:
          return <BarriersPage {...props} />;
        case 6:
          return <ChildSchoolInfo {...props} />;
        case 7:
          return <DomesticViolence {...props} />;
        case 8:
          return <HomelessHistory {...props} />;
        case 9:
          return <Insurance {...props} />;
        case 10:
          return <AdditionalInfo {...props} />;
        case 11:
          return <Pets {...props} />;
        case 12:
          return <ValidateFormData {...props} />;
        default:
          return <Text>Invalid</Text>
      }
}

export default IntakeForm