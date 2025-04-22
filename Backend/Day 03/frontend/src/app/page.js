import { getStudent } from '@/api/api-call'
import Table from '@/components/Table'
import React from 'react'

export default async function page() {
  const data = await getStudent();

  return (
    <Table data={data} />
  )
}
