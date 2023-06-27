'use client'

import { useReportWebVitals } from 'next/web-vitals'
import { reportWebVitals } from 'next-axiom'

export default function WebVitalsReporter() {
  useReportWebVitals(reportWebVitals)

  return null
}
