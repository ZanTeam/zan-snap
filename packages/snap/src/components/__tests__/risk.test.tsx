import { expect } from '@jest/globals';
import { Box, Divider, Heading, Text } from '@metamask/snaps-sdk/jsx';

import { RiskLevel } from '../../apis/risk';
import { LEVEL_TEXT, RiskResult } from '../risk-result';
import {
  criticalRiskResult,
  criticalRiskResultWithDetail,
  criticalRiskResultWithDetailAndMoreLink,
  criticalRiskResultWithoutMoreLink,
  highRiskResult,
} from './mocks/mock-risk-result';

describe('Risk components', () => {
  it('should render Risk components', () => {
    const renderedCritical = RiskResult(criticalRiskResult.data!);

    expect(renderedCritical).toStrictEqual(
      <Box>
        <Heading key="heading">{LEVEL_TEXT[RiskLevel.CRITICAL]} risk</Heading>
        <Divider />
        <Text key="more">
          More information can be found at {'https://zan.top/kyt?chInfo=zsnap'}
        </Text>
      </Box>,
    );
  });

  it('should render Risk components with detail', () => {
    const renderedCritical = RiskResult(criticalRiskResultWithDetail.data!);

    expect(renderedCritical).toStrictEqual(
      <Box>
        <Heading key="heading">{LEVEL_TEXT[RiskLevel.CRITICAL]} risk</Heading>
        <Text key="detail">Critical risk detail balabala</Text>
        <Divider />
        <Text key="more">
          More information can be found at {'https://zan.top/kyt?chInfo=zsnap'}
        </Text>
      </Box>,
    );
  });

  it('should render Risk components with detail and more link', () => {
    const renderedCritical = RiskResult(
      criticalRiskResultWithDetailAndMoreLink.data!,
    );

    expect(renderedCritical).toStrictEqual(
      <Box>
        <Heading key="heading">{LEVEL_TEXT[RiskLevel.CRITICAL]} risk</Heading>
        <Text key="detail">Critical risk detail balabala</Text>
        <Divider />
        <Text key="more">
          More information can be found at {'https://example.com'}
        </Text>
      </Box>,
    );
  });

  it('should render Risk components without more link', () => {
    const renderedCritical = RiskResult(
      criticalRiskResultWithoutMoreLink.data!,
    );

    expect(renderedCritical).toStrictEqual(
      <Box>
        <Heading key="heading">{LEVEL_TEXT[RiskLevel.CRITICAL]} risk</Heading>
        <Text key="detail">Critical risk detail balabala</Text>
      </Box>,
    );
  });

  it('should render high risk ui', () => {
    const rendered = RiskResult(highRiskResult.data!);

    expect(rendered).toStrictEqual(
      <Box>
        <Heading key="heading">{LEVEL_TEXT[RiskLevel.HIGH]} risk</Heading>
        <Text key="detail">High risk detail balabala</Text>
        <Divider />
        <Text key="more">
          More information can be found at {'https://example.com'}
        </Text>
      </Box>,
    );
  });
});
