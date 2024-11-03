import { Box, Heading, Link, Text } from '@metamask/snaps-sdk/jsx';

import type { RiskResultError } from '../apis/risk';

const ServiceError = (riskError: RiskResultError) => {
  return (
    <Box>
      <Heading>Service error</Heading>
      <Text>{riskError.message}</Text>
    </Box>
  );
};

const RiskError = (riskError: RiskResultError) => {
  return (
    <Box>
      <Heading>Risk error</Heading>
      <Text>{riskError.message}</Text>
    </Box>
  );
};

const UnsupportedChainError = (riskError: RiskResultError) => {
  return (
    <Box>
      <Heading>Unsupported chain</Heading>
      <Text>{riskError.message}</Text>
    </Box>
  );
};

const UnknownError = () => {
  return (
    <Box>
      <Heading>Unknown error</Heading>
      <Text>An unknown error occurred while processing the transaction.</Text>
    </Box>
  );
};

export const GuardError = (riskError?: RiskResultError) => {
  switch (riskError?.code) {
    case 'service_error':
      return ServiceError(riskError);
    case 'risk_error':
      return RiskError(riskError);
    case 'unsupported_chain':
      return UnsupportedChainError(riskError);

    default:
      return UnknownError();
  }
};

export const FetchError = (error: any) => {
  return (
    <Box>
      <Heading>Fetch error</Heading>
      <Text>
        An error occurred while fetching the transaction risk. Please contact{' '}
        <Link href="https://zan.top/home/contact?chInfo=zsnap">ZAN.top</Link>{' '}
        support.
      </Text>
      <Text>Error: {error?.toString()}</Text>
    </Box>
  );
};
