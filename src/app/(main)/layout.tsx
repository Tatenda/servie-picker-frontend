import HeaderComponent from "@/components/shared/header/header.component"

export default function MainLayout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <HeaderComponent />
            {children}
        </div>
    )
}
