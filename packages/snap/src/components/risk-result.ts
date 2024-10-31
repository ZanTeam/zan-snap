import type { Component } from '@metamask/snaps-sdk';
import { divider, heading, panel, text, type Panel } from '@metamask/snaps-sdk';

import { RiskLevel, type RiskResultData } from '../apis/risk';

const emoji = {
  [RiskLevel.CRITICAL]: '🚨️ Critical',
  [RiskLevel.HIGH]: '🛑 High',
  [RiskLevel.MEDIUM]: '⚠️ Medium',
  [RiskLevel.LOW]: '🟡 Low',
  [RiskLevel.NO]: '🟢 No',
};

export const RiskResult = (riskData: RiskResultData): Panel => {
  const moreLink = riskData.moreLink ?? 'https://zan.top/kyt';

  const children: Component[] = [heading(`${emoji[riskData.level]} risk`)];

  if (riskData.detail) {
    children.push(text(riskData.detail));
  }

  if (moreLink) {
    children.push(
      divider(),
      text(`More information can be found at ${moreLink}`),
    );
  }

  return panel(children);
};
