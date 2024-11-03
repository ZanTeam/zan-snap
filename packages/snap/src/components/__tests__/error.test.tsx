import { expect } from '@jest/globals';
import { Box, Heading, Link, Text } from '@metamask/snaps-sdk/jsx';

import { FetchError, GuardError } from '../error';
import {
  riskErrorResult,
  serviceErrorResult,
  unknownErrorResult,
  unsupportedChainErrorResult,
} from './mocks/mock-risk-result';

describe('Error components', () => {
  it('should render FetchError component', async () => {
    try {
      await fetch('https://fake.invalid');
      expect(true).toBe(false);
    } catch (error: any) {
      const rendered = FetchError(error);

      // eslint-disable-next-line jest/no-conditional-expect
      expect(rendered).toStrictEqual(
        <Box>
          <Heading>Fetch error</Heading>
          <Text>
            An error occurred while fetching the transaction risk. Please
            contact{' '}
            <Link href="https://zan.top/home/contact?chInfo=zsnap">
              ZAN.top
            </Link>{' '}
            support.
          </Text>
          <Text>Error: {error?.toString()}</Text>
        </Box>,
      );
    }
  });

  it('should render GuardError component', () => {
    const rendered = GuardError(unsupportedChainErrorResult.error);

    expect(rendered).toStrictEqual(
      <Box>
        <Heading>Unsupported chain</Heading>
        <Text>{unsupportedChainErrorResult.error!.message}</Text>
      </Box>,
    );
  });

  it('should render RiskError component', () => {
    const rendered = GuardError(riskErrorResult.error);

    expect(rendered).toStrictEqual(
      <Box>
        <Heading>Risk error</Heading>
        <Text>{riskErrorResult.error!.message}</Text>
      </Box>,
    );
  });

  it('should render ServiceError component', () => {
    const rendered = GuardError(serviceErrorResult.error);

    expect(rendered).toStrictEqual(
      <Box>
        <Heading>Service error</Heading>
        <Text>{serviceErrorResult.error!.message}</Text>
      </Box>,
    );
  });

  it('should render UnsupportedChainError component', () => {
    const rendered = GuardError(unsupportedChainErrorResult.error);

    expect(rendered).toStrictEqual(
      <Box>
        <Heading>Unsupported chain</Heading>
        <Text>{unsupportedChainErrorResult.error!.message}</Text>
      </Box>,
    );
  });

  it('should render UnknownError component', () => {
    const rendered = GuardError(unknownErrorResult.error);

    expect(rendered).toStrictEqual(
      <Box>
        <Heading>Unknown error</Heading>
        <Text>An unknown error occurred while processing the transaction.</Text>
      </Box>,
    );
  });
});
