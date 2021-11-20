import styled from "styled-components";
import { mediaQueries } from "../../../utils/styleHelpers";
import { borderRadius } from "../../../globalStyle/_variables";
import Heading from "../../Typography/Heading";

type TEnquiry = {
  enquiry: {
    Message: string;
    Name: string;
    Recieved: string;
    email: string;
    establishment_name: string;
    from_date: Date;
    to_date: Date;
    created_at: string;
  };
};
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

const Enquiries = ({ enquiry }: TEnquiry) => {
  let sentDate = new Date(enquiry.created_at).toDateString();
  console.log(enquiry);
  return (
    <Box>
      <EnquiriesContainer>
        <GridContainer>
          <Panel>
            <Heading.H3 weight="400">From</Heading.H3>
            <EnquiryData>{enquiry.Name}</EnquiryData>
          </Panel>
          <Panel>
            <Heading.H3 weight="400">Recieved</Heading.H3>
            <EnquiryData>{sentDate}</EnquiryData>
          </Panel>
          <Panel>
            <Heading.H3 weight="400">Establishment</Heading.H3>
            <EnquiryData>{enquiry.establishment_name}</EnquiryData>
          </Panel>
        </GridContainer>
      </EnquiriesContainer>
    </Box>
  );
};

export default Enquiries;
