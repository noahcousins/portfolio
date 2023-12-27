import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text
} from '@react-email/components';
import * as React from 'react';

interface ContactMeEmailProps {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  content: string;
}

const ContactMeEmail = ({
  name,
  content,
  emailAddress,
  phoneNumber
}: ContactMeEmailProps) => {
  const previewText = `${name} has a message`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-[40px] w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Heading className="mx-0 my-[30px] p-0 text-center text-[24px] font-normal text-black">
              <strong>{name}</strong> would like to contact you about something!
            </Heading>

            <Text className="text-[14px] leading-[24px] text-black">
              Here is the message:
            </Text>

            <Text className="text-[14px] leading-[24px] text-black">
              {content}
            </Text>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              This message was sent by {name}. You can contact him through his
              email {emailAddress} or his phone number {phoneNumber}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactMeEmail;
