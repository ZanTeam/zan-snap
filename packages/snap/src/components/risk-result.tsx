import React from 'react';
import { Box, Divider, Heading, Text } from '@metamask/snaps-sdk/jsx';

import { RiskLevel, type RiskResultData } from '../apis/risk';

export const LEVEL_TEXT = {
  [RiskLevel.CRITICAL]: '🚨️ Critical',
  [RiskLevel.HIGH]: '🛑 High',
  [RiskLevel.MEDIUM]: '⚠️ Medium',
  [RiskLevel.LOW]: '🟡 Low',
  [RiskLevel.NO]: '🟢 No',
};

export const RiskResult = (riskData: RiskResultData) => {
  const moreLink = riskData.moreLink ?? 'https://zan.top/kyt?chInfo=zsnap';

  const children = [
    <Heading key="heading">{LEVEL_TEXT[riskData.level]} risk</Heading>,
  ];

  if (riskData.detail) {
    children.push(<Text key="detail">{riskData.detail}</Text>);
  }

  if (moreLink) {
    children.push(
      <Divider />,
      <Text key="more">More information can be found at {moreLink}</Text>,
    );
  }

  return <Box>{children}</Box>;
};
