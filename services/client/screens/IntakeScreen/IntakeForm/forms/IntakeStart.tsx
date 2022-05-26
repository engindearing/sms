import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "native-base";

export default function IntakeStart({ nextStep }) {
  return (
    <View>
      <Text>
        Be sure to complete as much information as possible when filling the
        form. Don’t leave any required sections blank. Please note in order to
        have 100% complete all values must be filled in. You should type “N/A”
        where applicable. If you don't complete the form now or would like to
        change a field at a later date, you may log back into your profile at
        any time to complete or edit the form.
      </Text>
      <Button style={{ marginTop: "5%" }} onPress={nextStep}>
        Start
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});
