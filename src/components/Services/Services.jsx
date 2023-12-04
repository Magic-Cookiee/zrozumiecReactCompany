import { ServiceOffer } from "./ServiceOffer/ServiceOffer";
import styles from "./Services.module.css";
const hrefForIcon =
  "https://www.freepik.com/search?format=search&last_filter=query&last_value=tools+icons&query=tools+icons&type=icon";

export function Services() {
  const servicesObj = [
    {
      img: "./images/tools.png",
      desc: "Montaż i demontaż różnych urządzeń AGD i RTV.",
      icoHref: hrefForIcon,
      icoAut: "Icon by Yogi Aprelliyanto",
    },
    {
      img: "./images/car.png",
      desc: "Brawurowa jazda samochodem Cinquecento",
      icoHref: hrefForIcon,
      icoAut: "Icon by by Aprelliyanto",
    },
    {
      img: "./images/cctv.png",
      desc: "Kamery. Produkcja, dystrybucja, akrobacja.",
      icoHref: hrefForIcon,
      icoAut: "Icon Icon by Aprelliyanto",
    },
  ];
  return (
    <>
      <h2 className={styles.services_hedding}>Przejrzyj naszą ofertę</h2>

      {servicesObj.map((el) => (
        <div className={styles.services} key={el.img}>
          <ServiceOffer
            key={el.img}
            imgSrc={el.img}
            description={el.desc}
            icoAuthorHref={el.icoHref}
            icoAuthorText={el.icoAut}
          ></ServiceOffer>
        </div>
      ))}
    </>
  );
}
