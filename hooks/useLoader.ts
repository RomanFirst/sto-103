import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function useLoader() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleChangeStart = (url: string) => {
      url !== `${router.locale === 'en' ? '' : router.locale}${router.asPath}`
        ? setIsLoading(true)
        : setIsLoading(false)
    }

    const handleRouteChangeComplete = async () => {
      setIsLoading(false)
    }

    router.events.on('routeChangeStart', handleChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.on('routeChangeError', handleRouteChangeComplete)
    }
  }, [])

  return isLoading
}

export default useLoader
