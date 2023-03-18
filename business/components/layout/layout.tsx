import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Form from "../../share/form/form";
import Whatsapp from "../../share/whatsapp/whatsapp";

export default function Layout({children}: any) {

    return (
        <>
            <Navbar/>
            {children}
            <Form/>
            <Whatsapp/>
            <Footer/>
        </>
    )
}
