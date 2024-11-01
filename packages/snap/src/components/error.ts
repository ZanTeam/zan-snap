import type { Panel } from '@metamask/snaps-sdk';
import { heading, panel, text } from '@metamask/snaps-sdk';

import type { RiskResultError } from '../apis/risk';

export const ServiceError = (riskError: RiskResultError): Panel => {
  return panel([heading('Service error'), text(riskError.message)]);
};

export const RiskError = (riskError: RiskResultError): Panel => {
  return panel([heading('Risk error'), text(riskError.message)]);
};

export const UnsupportedChainError = (riskError: RiskResultError): Panel => {
  return panel([heading('Unsupported chain'), text(riskError.message)]);
};

export const UnknownError = (): Panel => {
  return panel([
    heading('Unknown error'),
    text('An unknown error occurred while processing the transaction.'),
  ]);
};

export const GuardError = (riskError?: RiskResultError): Panel => {
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

export const FetchError = (error: any): Panel => {
  return panel([
    heading('Fetch error'),
    text(
      'An error occurred while fetching the transaction risk. Please contact ZAN.top support.',
    ),
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    text(`Error: ${error}`),
  ]);
};
