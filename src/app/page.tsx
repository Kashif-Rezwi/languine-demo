'use client'

import { useState } from 'react'
import { Flex } from '@radix-ui/themes'
import { Sidebar } from '@/components/sidebar'
import { DynamicContent } from '@/components/dynamicContent'

export default function Home() {
  const [activeSection, setActiveSection] = useState('people')

  return (
    <Flex style={{ height: '100vh', overflow: 'hidden' }}>
      <Sidebar onSectionChange={setActiveSection} />
      <DynamicContent selectedSection={activeSection} />
    </Flex>
  )
}
