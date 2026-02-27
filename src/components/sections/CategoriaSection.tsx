import CategoriaGrid from "../ui/CategoriaGrid";
import Container from "../ui/Container";
import type { Obra } from "../../data/types";

interface Props {
  obras: Obra[];
}

export default function CategoriaSection({ obras }: Props) {
  return (
    <section className="bg-stone-50 pb-10">
      <Container>
        <CategoriaGrid obras={obras} obrasPorPagina={10}/>
      </Container>
    </section>
  );
}