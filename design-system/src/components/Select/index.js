
import React from "react";
import styled from "styled-components";
import Icon, {icons} from "../Icon"
import { colors, typography } from "tokens";
import {
  Listbox,
  ListboxInput,
  ListboxButton,
  ListboxPopover,
  ListboxList,
  ListboxOption,
  ListboxArrow
} from "@reach/listbox";
import "@reach/listbox/styles.css";

/* Select
 *
 * TODO: add component description
 */
const Select = ({defaultValue, options,...props}) => {
  const renderOptions = (options) => {
    if(!options) {
      return null;
    }
    return <>
      {options.map((option, index) => {
        return <ListboxOption key={`option-${index}`} value={option.value}>{option.title}</ListboxOption>
      })}
    </>
  }
  if(!options) {
    return null;
  }
  return(
  <StyledSelect arrow={<Icon name="chevronDown" width={10} height={10} />} {...props}>
    {options && renderOptions(options)}
  </StyledSelect>);
};

export const StyledSelect = styled(Listbox)`
  > [data-reach-listbox-button] {
  font-family: ${typography.paragraph1FontFamily}
  line-height: 24px;
  border-color: ${colors.secondaryBlack20};
  border-radius: 1rem;
  color: ${colors.secondaryBlack100};
  padding: 0.125rem 2rem 0.125rem 1rem;
  position: relative;
  outline: none;
  > [data-reach-listbox-arrow] {
    top: calc(50% - 9px);
    position: absolute;
    right: 0.75rem;
    pointer-events: none;
    display: block;
  }
`;

export default Select;
