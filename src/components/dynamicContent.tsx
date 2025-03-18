'use client'

import { Box, Heading, Text, Flex } from '@radix-ui/themes'

interface DynamicContentProps {
    selectedSection: string;
}

export function DynamicContent({ selectedSection }: DynamicContentProps) {
    // Content mapping for each section
    const contentMap = {
        people: {
            title: "People",
            description: "Manage your contacts, add new people to your network, and organize them with tags. This section gives you a comprehensive view of all individuals connected to your business."
        },
        workflows: {
            title: "Workflows",
            description: "Create and manage automated workflows to streamline your business processes. Set up triggers, actions, and conditions to automate repetitive tasks and save time."
        },
        apps: {
            title: "Apps",
            description: "Browse and manage the applications integrated with your account. Connect with third-party services and extend functionality through our app marketplace."
        },
        aiAgents: {
            title: "AI Agents",
            description: "Deploy intelligent AI agents to handle specific tasks automatically. Train custom models and create agents that can engage with your customers or process data without human intervention."
        },
        campaigns: {
            title: "Campaigns",
            description: "Plan, create, and track marketing campaigns across multiple channels. Monitor performance metrics and optimize your outreach efforts to maximize ROI."
        }
    }

    const content = contentMap[selectedSection as keyof typeof contentMap] || {
        title: selectedSection,
        description: `Content for ${selectedSection} will be displayed here.`
    }

    return (
        <Box style={{ width: '100%', padding: '20px 40px' }}>
            <Heading size="8" mb="6">{content.title}</Heading>
            <Text size="3" style={{ lineHeight: 1.6, maxWidth: '80%' }}>
                {content.description}
            </Text>

            <Flex direction="column" gap="6" mt="8" style={{ maxWidth: '80%' }}>
                <Box>
                    <Heading size="5" mb="3">Key Features</Heading>
                    <Text size="2" style={{ lineHeight: 1.6 }}>
                        This section provides tools and features to help you manage your {content.title.toLowerCase()} effectively.
                        You can add, edit, delete, and organize items according to your business needs.
                    </Text>
                </Box>

                <Box>
                    <Heading size="5" mb="3">Getting Started</Heading>
                    <Text size="2" style={{ lineHeight: 1.6 }}>
                        To get started with {content.title}, explore the options available in this section.
                        You can use the buttons above to create new items or use the search and filter options to find specific entries.
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}
