import type {
  OnHomePageHandler,
  OnTransactionHandler,
} from '@metamask/snaps-sdk';
import { heading, panel, SeverityLevel, text } from '@metamask/snaps-sdk';

import { fetchTransactionRisk, RiskLevel } from './apis/risk';
import { FetchError, GuardError } from './components/error';
import { RiskResult } from './components/risk-result';

export const onHomePage: OnHomePageHandler = async () => {
  return {
    content: panel([
      heading('ZAN Snap'),
      text('Powered by ZAN.top'),
    ]),
  };
};

export const onTransaction: OnTransactionHandler = async ({
  transaction,
  chainId,
  transactionOrigin,
}) => {
  const locale = await snap.request({ method: 'snap_getLocale' });

  try {
    const risk = await fetchTransactionRisk({
      chainId,
      transaction,
      transactionOrigin,
      locale,
    });

    if (risk.success && risk.data) {
      return risk.data.level === RiskLevel.CRITICAL
        ? {
          severity: SeverityLevel.Critical,
          content: RiskResult(risk.data),
        }
        : { content: RiskResult(risk.data) };
    }

    return {
      content: GuardError(risk.error),
    };
  } catch (error: any) {
    return {
      content: FetchError(error),
    };
  }
};
