import locate from "../assets/img/locate.png";
export const ContactToMe = () => {
    return (
        <section className="ContactToME" id="connect">
            <div className="info">
                <h2>Contact to Me</h2>
                <h5>Bojnurd | Iran</h5>
                <img src={locate}></img>
            </div>
            <div className="info2">
                <h5>Tell: +98 903 377 8966</h5>
                <h5>Email: hosseinbidaki79@gmail.com</h5>
            </div>
        </section>
    )
}