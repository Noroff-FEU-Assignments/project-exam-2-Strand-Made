import styled from "styled-components";
import { mediaQueries } from "../../../utils/styleHelpers";
import { borderRadius } from "../../../globalStyle/_variables";
import Heading from "../../Typography/Heading";

const Box = styled.div`
  ${mediaQueries("md")`
width: 500px;
`}
`;
const EnquiriesContainer = styled.div`
  display: flex;
  justify-content: center;
  background: var(--cool-gray-2);
  border-radius: ${borderRadius.sm};
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: 1rem;
`;
const Panel = styled.div`
  border-bottom: 1px solid var(--cool-gray-3);
`;
const EnquiryData = styled.div`
  font-weight: 600;
`;

const Enquiries = () => {
  const date = Date();

  return (
    <Box>
      <Heading.H2>Enquiries</Heading.H2>
      <EnquiriesContainer>
        <GridContainer>
          <Panel>
            <Heading.H3 weight="400">From</Heading.H3>
            <EnquiryData>Tom</EnquiryData>
          </Panel>
          <Panel>
            <Heading.H3 weight="400">Recieved</Heading.H3>
            <EnquiryData>{date}</EnquiryData>
          </Panel>
          <Panel>
            <Heading.H3 weight="400">Establishment</Heading.H3>
            <EnquiryData>Royal Hotel</EnquiryData>
          </Panel>
        </GridContainer>
      </EnquiriesContainer>
    </Box>
  );
};

export default Enquiries;
