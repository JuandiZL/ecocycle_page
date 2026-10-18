
import Header from "@/components/Header";
import WhatsAppBotton from "@/components/WhatsAppBotton";
import EstrategiasLiderazgo from "@/components/direccion/EstrategiasLiderazgo";
import EstrategiasComunicacion from "@/components/direccion/EstrategiasComunicacion";
import EstrategiasTrabajoEnEquipo from "@/components/direccion/EstrategiasTrabajoEnEquipo";
import EstrategiasMotivacion from "@/components/direccion/EstrategiasMotivacion";


export default function DireccionPage() {
  return (
    <>
      <Header />
      <WhatsAppBotton />
      <EstrategiasLiderazgo />
      <EstrategiasComunicacion />
      <EstrategiasTrabajoEnEquipo />
      <EstrategiasMotivacion />
    </>
  );
}