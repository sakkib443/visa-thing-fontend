import { useSelector } from "react-redux"

const UserProfile = () => {
    const user = useSelector(state => state.auth)
    console.log(user)
    return (
        <div className="h-[80vh] flex flex-col items-center justify-center gap-5 overflow-hidden">
            <h1 className="sm:text-2xl md:text-4xl lg:text-5xl uppercase text-blue-500">Welcome</h1>
            <h1 className="sm:text-3xl md:text-5xl lg:text-6xl uppercase font-bold">{user.user.name}</h1>
        </div>
    )
}

export default UserProfile