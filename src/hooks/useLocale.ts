import { useEffect, useState } from "react"
import { useRouter } from 'next/router';

export const useLocale = () => {
    const router = useRouter();
    const [locale, setLocale] = useState<null | string>();

    useEffect(() => {
        setLocale(router.locale);
    }, [router.locale])

    return {locale}
}  