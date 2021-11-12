import { ReactNode, useState } from "react";
import styled from "styled-components";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import { PrimaryButton } from "../../Button/Button";
import InputContainer from "../../forms/Input/InputContainer";
import TextInput from "../../forms/Input/TextInput";
import Label from "../../forms/Label/Label";
import Box from "../../layout/Box/Box";
import Stack from "../../layout/Stack/Stack";
import Emphasize from "../../Typography/Emphasize";
import Heading from "../../Typography/Heading";
import Paragraph from "../../Typography/Paragraph";

interface IStayCalculator {
  price: number;
  setToggle: any;
  guests: number;
  setGuests: any;
  days: number;
  setDays: any;
}

const Calculator = styled.div`
  box-shadow: ${shadows.md};
  border-bottom-left-radius: ${borderRadius.md};
  border-bottom-right-radius: ${borderRadius.md};
`;

const StayCalculator = ({
  price,
  setToggle,
  days,
  setDays,
  guests,
  setGuests,
}: IStayCalculator) => {
  return (
    <Calculator>
      <Stack>
        <Box
          borderRadiusT
          padding={"1rem"}
          color="var(--cool-gray-9)"
          background="var(--cool-gray-2)"
        >
          <Heading.H5 size="l">Enquire Stay</Heading.H5>
        </Box>
        <Box padding={"2rem"} borderRadiusB background="var(--cool-gray-1)">
          <span>
            <Emphasize>$ {price}</Emphasize> / night
          </span>
          <form>
            <Box padding={"0.5rem"}>
              <Label> Guests </Label>
              <TextInput
                onChange={(e) => setGuests(e.target.value)}
                placeholder="How many guests?"
                value={guests}
                type="number"
              />
            </Box>
            <Box padding={"0.5rem"}>
              <Label>Days</Label>
              <TextInput
                onChange={(e) => setDays(e.target.value)}
                value={days}
                placeholder="How long are you staying?"
                type="number"
              />
            </Box>
          </form>
          <PrimaryButton
            onClick={() => {
              setToggle();
            }}
            full
            size="md"
          >
            Enquire
          </PrimaryButton>
          <Paragraph></Paragraph>
        </Box>
      </Stack>
    </Calculator>
  );
};

export default StayCalculator;
