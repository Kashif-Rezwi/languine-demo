'use client'

import { Box, Flex, Text, Button } from '@radix-ui/themes'
import { useState } from 'react'

const PeopleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
)

const WorkflowsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 5h16v2H4zm0 6h16v2H4zm0 6h16v2H4z" />
    </svg>
)

const AppsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" />
    </svg>
)

const AIIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 11.18V9.72c0-.47-.16-.92-.46-1.28L16.6 3.72c-.38-.46-.94-.72-1.54-.72H8.94c-.6 0-1.15.26-1.54.72L3.46 8.44c-.3.36-.46.81-.46 1.28v6.56c0 .47.16.92.46 1.28l3.94 4.72c.38.46.94.72 1.54.72h6.12c.6 0 1.15-.26 1.54-.72l3.94-4.72c.3-.36.46-.81.46-1.28V11.18z" />
    </svg>
)

const CampaignsIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
    </svg>
)

export function Sidebar({ onSectionChange }: { onSectionChange: (section: string) => void }) {
    const [activeItem, setActiveItem] = useState('people')

    const menuItems = [
        { id: 'people', name: 'People', icon: <PeopleIcon /> },
        { id: 'workflows', name: 'Workflows', icon: <WorkflowsIcon /> },
        { id: 'apps', name: 'Apps', icon: <AppsIcon /> },
        { id: 'aiAgents', name: 'AI Agents', icon: <AIIcon /> },
        { id: 'campaigns', name: 'Campaigns', icon: <CampaignsIcon /> },
    ]

    const handleMenuClick = (itemId: string) => {
        setActiveItem(itemId)
        onSectionChange(itemId)
    }

    return (
        <Flex
            direction="column"
            style={{
                width: '240px',
                height: '100vh',
                backgroundColor: '#1f2937',
                color: 'white',
                flexShrink: 0,
            }}
        >
            {/* Header with Logo */}
            <Flex p="4" align="center" gap="2">
                <Box style={{
                    backgroundColor: '#d946ef',
                    width: '32px',
                    height: '32px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text size="3" weight="bold">D</Text>
                </Box>
                <Text size="3" weight="bold">Default Business</Text>
            </Flex>

            {/* Menu Items */}
            <Box py="2">
                {menuItems.map((item) => (
                    <Flex
                        key={item.id}
                        px="4"
                        py="3"
                        gap="3"
                        align="center"
                        onClick={() => handleMenuClick(item.id)}
                        style={{
                            backgroundColor: activeItem === item.id ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                            color: activeItem === item.id ? 'white' : 'rgba(255, 255, 255, 0.7)',
                            cursor: 'pointer',
                            borderLeft: activeItem === item.id ? '3px solid #3b82f6' : '3px solid transparent',
                        }}
                    >
                        {item.icon}
                        <Text size="2">{item.name}</Text>
                    </Flex>
                ))}
            </Box>

            {/* Trial Notice */}
            <Box mt="auto" p="4">
                <Flex direction="column" gap="2">
                    <Text size="1" color="gray">Trial ends today!</Text>
                    <Text size="1" color="gray">You are currently on Trial plan</Text>
                    <Box my="2" style={{ height: '4px', backgroundColor: '#3b82f6', borderRadius: '4px' }}></Box>
                    <Button variant="outline" size="1" style={{ borderColor: '#3b82f6', color: '#3b82f6' }}>
                        Upgrade plan
                    </Button>
                </Flex>
            </Box>
        </Flex>
    )
}
