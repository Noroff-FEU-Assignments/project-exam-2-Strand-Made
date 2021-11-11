import styled from "styled-components";

const Message = () => {
  return <div></div>;
};

const Error = styled.div``;
const Success = styled.div``;
const Info = styled.div``;

Message.Error = Error;
Message.Success = Success;
Message.Info = Info;

export default Message;
