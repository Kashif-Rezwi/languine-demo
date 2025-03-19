'use client'

import { Box, Heading, Text, Flex } from '@radix-ui/themes'
import { useTranslations } from 'next-intl';

interface DynamicContentProps {
    selectedSection: string;
}

export function DynamicContent({ selectedSection }: DynamicContentProps) {
    const t = useTranslations('dynamicContent');
    const tCommon = useTranslations('dynamicContent.common');

    // Check if we have translations for this section
    const hasTranslation = ['people', 'workflows', 'apps', 'aiAgents', 'campaigns'].includes(selectedSection);
    
    // Get the title and description from translations
    const title = hasTranslation 
        ? t(`${selectedSection}.title`)
        : t('fallback.title', { selectedSection });

    const description = hasTranslation
        ? t(`${selectedSection}.description`)
        : t('fallback.description', { selectedSection });

    return (
        <Box style={{ width: '100%', padding: '20px 40px' }}>
            <Heading size="8" mb="6">{title}</Heading>
            <Text size="3" style={{ lineHeight: 1.6, maxWidth: '80%' }}>
                {description}
            </Text>

            <Flex direction="column" gap="6" mt="8" style={{ maxWidth: '80%' }}>
                <Box>
                    <Heading size="5" mb="3">{tCommon('keyFeatures')}</Heading>
                    <Text size="2" style={{ lineHeight: 1.6 }}>
                        {tCommon('keyFeaturesText', { contentTitle: title.toLowerCase() })}
                    </Text>
                </Box>

                <Box>
                    <Heading size="5" mb="3">{tCommon('gettingStarted')}</Heading>
                    <Text size="2" style={{ lineHeight: 1.6 }}>
                        {tCommon('gettingStartedText', { contentTitle: title })}
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}
