
import Header from "@/components/Header";
import InicioSeccion from "@/components/inicio/inicioSeccion";
import ContenidoInicio from "@/components/inicio/ContenidoInicio";
import ValoresSeccion from "@/components/inicio/ValoresSeccion";
import ObjetivosSeccion from "@/components/inicio/ObjetivosSeccion";
import PoliticasSeccion from "@/components/inicio/PoliticasSeccion";
import WhatsAppBotton from "@/components/WhatsAppBotton";

export default function HomePage() {
  return (
    <>
      <Header />
      <InicioSeccion />
      <ContenidoInicio />
      <ValoresSeccion />
      <ObjetivosSeccion />
      <PoliticasSeccion />
      <WhatsAppBotton />
    </>
  );
}