
import Header from "@/components/Header";
import WhatsAppBotton from "@/components/WhatsAppBotton";
import InicioOrganizacionSeccion from "@/components/organizacion/inicioOrganizacionSeccion";
import FlujogramaSeccion from "@/components/organizacion/FlujogramaSeccion";
import ProcesoSeccion from "@/components/organizacion/ProcesoSeccion";
import DiagramaGanttSeccion from "@/components/organizacion/DiagramaGanttSeccion";


export default function OrganizacionPage() {
  return (
    <>
      <Header />
      <InicioOrganizacionSeccion />
      <FlujogramaSeccion />
      <ProcesoSeccion />
      <DiagramaGanttSeccion />
      <WhatsAppBotton />
    </>
  );
}