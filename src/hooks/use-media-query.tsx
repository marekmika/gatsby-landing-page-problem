import { useState, useEffect } from 'react'

const useMediaQuery = (query: string) => {
  const [match, setMatch] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(query)

    const updateMatch = () => setMatch(mql.matches)
    updateMatch()

    // HACK safari does not support newer addEventListener, so addListener must be used
    mql.addEventListener ? mql.addEventListener('change', updateMatch) : mql.addListener(updateMatch)

    return () => {
      mql.removeEventListener ? mql.removeEventListener('change', updateMatch) : mql.removeListener(updateMatch)
    }
  }, [query])

  return match
}

export default useMediaQuery
