import Container from "./Container";
import BackButton from "./BackButton";

interface PageHeaderProps {
  title: string;
  description?: string;
  backHref?: string;
  backLabel?: string;
}

export default function PageHeader({
  title,
  backHref = "/",
}: PageHeaderProps) {

  return (
    <section className="pt-28 md:pt-32 pb-6 md:pb-8 bg-stone-50">
      <Container>
        <div className="flex items-start justify-between gap-8">
          {/* TEXT */}
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-900 mb-5">
              {title}
            </h1>
          </div>

          <div className="mb-8">
            <BackButton href={backHref} label="Volver" />
          </div>
        </div>
      </Container>
    </section>
  );
}