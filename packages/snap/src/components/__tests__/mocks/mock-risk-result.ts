import type { RiskLevel, RiskResult } from '../../../apis/risk';

export const unsupportedChainErrorResult: RiskResult = {
  success: false,
  error: {
    code: 'unsupported_chain',
    message: 'The chain is not supported',
  },
};

export const riskErrorResult: RiskResult = {
  success: false,
  error: {
    code: 'risk_error',
    message: 'Risk error',
  },
};

export const serviceErrorResult: RiskResult = {
  success: false,
  error: {
    code: 'service_error',
    message: 'Service error',
  },
};

export const unknownErrorResult: RiskResult = {
  success: false,
  error: {
    code: 'unknown_error',
    message: 'Unknown error',
  },
};

export const criticalRiskResult: RiskResult = {
  success: true,
  data: {
    score: 100,
    level: 'CRITICAL' as RiskLevel,
  },
};

export const criticalRiskResultWithDetail: RiskResult = {
  success: true,
  data: {
    score: 100,
    level: 'CRITICAL' as RiskLevel,
    detail: 'Critical risk detail balabala',
  },
};

export const criticalRiskResultWithDetailAndMoreLink: RiskResult = {
  success: true,
  data: {
    score: 100,
    level: 'CRITICAL' as RiskLevel,
    detail: 'Critical risk detail balabala',
    moreLink: 'https://example.com',
  },
};

export const criticalRiskResultWithoutMoreLink: RiskResult = {
  success: true,
  data: {
    score: 100,
    level: 'CRITICAL' as RiskLevel,
    detail: 'Critical risk detail balabala',
    moreLink: '',
  },
};

export const highRiskResult: RiskResult = {
  success: true,
  data: {
    score: 80,
    level: 'HIGH' as RiskLevel,
    detail: 'High risk detail balabala',
    moreLink: 'https://example.com',
  },
};
