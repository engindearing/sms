import { Linking, View } from "react-native";

import React from "react";

import { Formik, FieldArray } from "formik";

import TextInput from "../../../../../../../components/TextInput";

import * as Yup from "yup";

import { Link, Pressable, Text } from "native-base";

import getAge from "../../../../../../../utils/getAge";

import styled from "styled-components/native";

import Unorderedlist from "react-native-unordered-list";

import { useSelector } from "react-redux";

export default function Outside() {
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <Text fontSize={"3xl"} fontWeight={"bold"}>
        Important Resources and Phone Numbers
      </Text>

      <Spacer />

      <Text fontSize={"2xl"} fontWeight="bold" marginBottom={3}>
        This is NOT an exhaustive list however it should help you get started.
        Ask your Case Manager for more resource suggestions if you need help.
      </Text>

      <Spacer />

      <View>
        <Text fontSize={"xl"}>
          HFCA ASSESSMENT: All homeless families in Spokane should go to the
          HFCA and do an assessment
        </Text>

        <Spacer />
        <Unorderedlist>
          <Text fontSize={"lg"} fontWeight="bold">
            HFCA
          </Text>

          <Unorderedlist>
            <Text fontSize={"lg"}>19 W. Pacific Ave</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text fontSize={"lg"}>
              Hours: Monday & Wednesday from 12:30pm to 4:30pm
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text fontSize={"lg"}>
              Tuesday & Thursday from 8:30am to 12:30pm
            </Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text fontSize={"lg"}>(Closed on Fridays)</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text fontSize={"lg"}>Phone: (509) 325-5005</Text>
          </Unorderedlist>
        </Unorderedlist>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"xl"}>
          Register with WorkSource for assistance with finding employment
        </Text>
        <Spacer />

        <Unorderedlist>
          <Text fontSize={"lg"} fontWeight="bold">
            WorkSource
          </Text>

          <Unorderedlist>
            <Text fontSize={"lg"}>130 S. Arthur</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text fontSize={"lg"}>Hours: M-F 9-5</Text>
          </Unorderedlist>
        </Unorderedlist>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"xl"}>
          If you have a disability and are unable to work you will need to
          contact SSI to apply for benefits
        </Text>
        <Spacer />

        <Unorderedlist>
          <Text fontSize={"lg"} fontWeight="bold">
            Social Security Administration:
          </Text>

          <Unorderedlist>
            <Text fontSize={"lg"}>714 N. Iron Bridge Way Ste 100</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text fontSize={"lg"}>Phone: 800-772-1213</Text>
          </Unorderedlist>

          <Unorderedlist>
            <Text fontSize={"lg"}>
              Walk in hours are: M,T,Th,F 9-4 and Wed 9-12
            </Text>
          </Unorderedlist>
        </Unorderedlist>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"xl"}>
          If you qualify for TANF benefits you will need to contact DSHS to
          apply
        </Text>
        <Spacer />

        <Unorderedlist>
          <Text fontSize={"lg"}>Phone: 877-501-223</Text>
        </Unorderedlist>

        <Unorderedlist>
          <Link fontSize={20} isExternal href="https://www.dshs.wa.gov/">
            <Text underline fontSize={"lg"}>
              dshs.wa.gov
            </Text>
          </Link>
        </Unorderedlist>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"xl"}>
          CHILDCARE: Do you need childcare for your children? If so, call DSHS
          to see if you qualify for daycare through the state or any free
          preschool programs.
        </Text>
        <Spacer />

        <Unorderedlist>
          <Text fontSize={"lg"}>Phone: 877-501-223</Text>
        </Unorderedlist>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"xl"}>
          SCHOOL: All school-aged children must be enrolled in school. Contact
          the HEART program to help your child(ren) with transportation to and
          from school and other school related needs. Ask a staff member when a
          HEART representative may be visiting Open Doors.
        </Text>
        <Spacer />

        <Unorderedlist>
          <Text fontSize={"lg"}>Heart program</Text>
        </Unorderedlist>

        <Unorderedlist>
          <Text fontSize={"lg"}>Phone: 509-354-7302</Text>
        </Unorderedlist>
      </View>

      <Spacer />

      <View>
        <Text fontSize={"xl"}>
          HEALTH INSURANCE: Do you need health insurance for your family?
        </Text>
        <Spacer />

        <Unorderedlist>
          <Text fontSize={"lg"}> Apply Online:</Text>
          <Unorderedlist>
            <Link
              fontSize={20}
              isExternal
              href="https://www.wahealthplanfinder.org/"
            >
              <Text underline fontSize={"lg"}>
                https://www.wahealthplanfinder.org
              </Text>
            </Link>
          </Unorderedlist>
        </Unorderedlist>
      </View>
    </View>
  );
}

const Spacer = styled.View`
  margin-top: 5;

  margin-bottom: 10;
`;

const Hr = styled.View`
  margin-top: 15;
  margin-bottom: 30;
  border-bottom-width: 1;
  margin-bottom: 15;

  border-color: #6960602d;
`;
