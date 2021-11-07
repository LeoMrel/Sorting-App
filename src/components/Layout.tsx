const Layout: React.FC = ({children}) => {
    return (
        <div className="min-w-screen min-h-screen flex place-content-center relative">
            <div className="container min-w-full bg-pink-300 flex place-content-center relative">
                <div className="w-full max-w-7xl">
                {children}
                </div>
            </div>
        </div>
    )
}

export default Layout