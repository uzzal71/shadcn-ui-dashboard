type Props = {
    children?: React.ReactNode
}

export default function LoggedOutlayout({ children }: Props) {
    return (
        <div className="flex flex-col gap-6 min-h-screen items-center justify-center p-24">
            {children}
        </div>
    )
}