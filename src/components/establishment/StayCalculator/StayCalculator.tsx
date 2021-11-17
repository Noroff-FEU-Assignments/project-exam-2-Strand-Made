import { start } from "repl";
import styled from "styled-components";
import { borderRadius, shadows } from "../../../globalStyle/_variables";
import { PrimaryButton } from "../../Button/Button";
import TextInput from "../../forms/Input/TextInput";
import Label from "../../forms/Label/Label";
import Box from "../../layout/Box/Box";
import Stack from "../../layout/Stack/Stack";
import StayDatePicker from "../../StayDatePicker/StayDatePicker";
import Emphasize from "../../Typography/Emphasize";
import Heading from "../../Typography/Heading";
import Paragraph from "../../Typography/Paragraph";

interface IStayCalculator {
  price: number;
  setToggle: any;
  handleDateSelect: any;
  guests: number;
  setGuests: any;
  days?: number;
  startDate: Date;
  endDate: Date;
}
const Calculator = styled.div`
  box-shadow: ${shadows.md};
  border-bottom-left-radius: ${borderRadius.md};
  border-bottom-right-radius: ${borderRadius.md};
`;

const StayCalculator = ({
  price,
  setToggle,
  startDate,
  endDate,
  guests,
  setGuests,
  handleDateSelect,
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
              <Label>Pick Date </Label>
              <StayDatePicker
                minDate={startDate}
                placeholderText="Select Dates"
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                onChange={handleDateSelect}
                selectsRange
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
