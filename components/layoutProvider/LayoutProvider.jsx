"use client"
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { usePathname } from "next/navigation"

const LayoutProvider = ({
    children
}) => {
    const pathname = usePathname();
    return (
        <>
        {pathname !== '/login' && pathname !== "/signup" && <Navbar/>}
        {children}
        {pathname !== '/login' && pathname !== "/signup" && <Footer/>}
        </>
    )
}

export default LayoutProvider