import { ServiceOffer } from "./ServiceOffer";
export function Services() {
  return (
    <>
      <h2>Przejrzyj naszą ofertę</h2>
      <ServiceOffer
        imgSrc={"./images/tools.png"}
        description={"Montaż i demontaż różnych urządzeń AGD i RTV."}
        icoAuthorHref={
          "https://www.freepik.com/search?format=search&last_filter=query&last_value=tools+icons&query=tools+icons&type=icon"
        }
        icoAuthorText="Icon by Yogi Aprelliyanto"
      />
      <ServiceOffer
        imgSrc={"./images/car.png"}
        description={"Brawurowa jazda samochodem Cinquecento"}
        icoAuthorHref={
          "https://www.freepik.com/search?format=search&last_filter=query&last_value=steering+wheel&query=steering+wheel&type=icon"
        }
        icoAuthorText={"Icon by mynamepong"}
      />
      <ServiceOffer
        imgSrc={"./images/cctv.png"}
        description={
          "Sąsiad wyrzuca śmieci na Twoje podwórko, ale nie masz na to dowodów? Zajmiemy się tym. Profesjonalny montaż kamer CCTV. "
        }
        icoAuthorHref={
          "https://www.freepik.com/search?format=search&last_filter=page&last_value=3&page=3&query=camera&type=icon"
        }
        icoAuthorText={"Icon by Freepik"}
      />
    </>
  );
}
