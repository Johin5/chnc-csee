'use client'

import { useEffect, useLayoutEffect } from 'react'

// useLayoutEffect warns during SSR of client components; on the server the
// measurement effects can safely wait for the client anyway.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default useIsomorphicLayoutEffect
