import PageTitleWithImage from "../../../components/PageTitleWithImage/PageTitleWithImage"
import Details from "../Details/Details"
const About = () => {
    return (
        <div>
            <PageTitleWithImage
                pageName={"About Us"}
                bgImage={"/assets/about-bg.jpg"}
            />
            <Details />
        </div>
    )
}

export default About