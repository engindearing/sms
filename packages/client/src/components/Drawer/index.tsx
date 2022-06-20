import { View, Text, Dimensions } from "react-native";
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";

export function Drawer({ onChange, children }) {

  //Selecting the first item by default
  const [selected, setSelected] = useState(children[0].props.id);

  const windowHeight = Dimensions.get('window').height;

  return (
    <DrawerContainer windowHeight={windowHeight}>
      <DrawerItems>
        {children.map((child) =>

          // Need to clone element to pass down extra props
          React.cloneElement(child, { onChange, selected, setSelected })
        )}
      </DrawerItems>
    </DrawerContainer>
  );
}

export const DrawerItem = ({
  icon,
  disabled = false,
  onChange = null,
  selected = "",
  setSelected = null,
  id,
}) => {
  const isSelected = id === selected

  const iconColor = () => {
      if(disabled) return 'grey'
      if(isSelected) return '#fec357'
      else return 'white'
  }

  return (
    <DrawerItemContainer
      onPress={() => {
        setSelected(id);
        onChange(id);
      }}
      disabled={disabled}
      isSelected={isSelected}
    >
      <MaterialCommunityIcons
        name={icon}
        size={35}
        color={iconColor()}
      />
    </DrawerItemContainer>
  );
};

const DrawerContainer = styled.View`
  width: 80px;
  height: ${props => props.windowHeight};
  position: absolute;

  z-index: 10;

  background-color: #0063be;

  margin-right: 100px;
`;

const DrawerItems = styled.View`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const DrawerItemContainer = styled.TouchableOpacity`
    margin-top: 5%;
    margin-bottom: 5%;
    padding: 8%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    /* ${props => props.isSelected && 
      'background-color: ;'
    
    } */

    
`;
