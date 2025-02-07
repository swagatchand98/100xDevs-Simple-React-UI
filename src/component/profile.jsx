import Card from "./card"

const Profile = () => {

    return <div className="p-10">
        <Card>
            <Content/>
        </Card>
    </div>
}

const Content = () => {

    return <div className="p-8 ">
            <img className="w-30" src="/src/assets/pic.webp" alt="" />
            <div className="block text-gray-500 mt-5 text-center">
                <p>Prabhleen Kaur</p>
                <p>9899999882</p>
                <p>Delhi,India</p>
            </div>
        </div>
}

export default Profile