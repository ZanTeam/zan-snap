import type { ChainId, Transaction } from '@metamask/snaps-sdk';

type FetchTransactionRiskParams = {
  chainId: ChainId;
  transaction: Transaction;
  transactionOrigin: string | undefined;
  locale?: string;
};

export enum RiskLevel {
  CRITICAL = 'CRITICAL',
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
  NO = 'NO',
}

export type RiskResultData = {
  score: number;
  level: RiskLevel;

  /**
   * A detailed description of the risk.
   */
  detail?: string;

  /**
   * A link to more information about the risk.
   */
  moreLink?: string;
};

export type RiskResultError = {
  code: string;
  message: string;
};

type RiskResult = {
  success: boolean;
  data?: RiskResultData;
  error?: RiskResultError;
};

/**
 * Fetches the risk for a given transaction.
 *
 * @param args - The fetch transaction risk params.
 * @returns The risk result object.
 */
export async function fetchTransactionRisk(
  args: FetchTransactionRiskParams,
): Promise<RiskResult> {
  const { chainId, transaction, transactionOrigin, locale } = args;

  const response = await fetch(`https://zan.top/bff/snap/risk`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // eslint-disable-next-line no-restricted-globals
      requestId: crypto.randomUUID(),
      chainId,
      from: transaction.from,
      to: transaction.to,
      origin: transactionOrigin,
      type: 'SNAP',
      locale,
    }),
  });

  const result: RiskResult = await response.json();
  return result;
}
