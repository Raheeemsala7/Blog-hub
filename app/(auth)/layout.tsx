import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className='min-h-screen bg-gradient-to-br from-amber-900/40 via-red-900/30 to-orange-950/40 flex items-center justify-center p-4'>
            {children}
        </div>
    )
}

