import { useState } from "react";
import { contacto } from "../../data/contacto";
import { Mail, Phone, Instagram, Linkedin, Send, CheckCircle, Loader2 } from "lucide-react";
import PageHeader from "../ui/PageHero";

interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <>
        <PageHeader title="Contacto" backHref="/" />
        <section className="min-h-[60vh] bg-stone-50 flex items-center justify-center px-6 py-24">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-stone-900 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-serif text-3xl text-stone-900 mb-4">Mensaje enviado</h2>
            <p className="text-stone-600 font-light mb-8">
              Gracias por contactar. Responderé lo antes posible.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs uppercase tracking-[0.2em] text-stone-500 hover:text-stone-900 transition-colors border-b border-transparent hover:border-stone-900 pb-1"
            >
              Enviar otro mensaje
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader title="Contacto" backHref="/" />
      
      <section className="bg-stone-50 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Columna izquierda: Formulario */}
            <div className="order-2 lg:order-1">
              <form 
                onSubmit={handleSubmit}
                className="space-y-8"
                name="contacto"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contacto" />
                <p className="hidden">
                  <label>No llenar esto: <input name="bot-field" /></label>
                </p>

                {contacto.formulario.campos.map((campo) => (
                  <div key={campo.name} className="group">
                    <label 
                      htmlFor={campo.name}
                      className="block text-xs uppercase tracking-[0.2em] text-stone-400 mb-3 group-focus-within:text-stone-600 transition-colors"
                    >
                      {campo.label}
                      {campo.required && <span className="text-stone-300 ml-1">*</span>}
                    </label>
                    
                    {campo.type === "textarea" ? (
                      <textarea
                        id={campo.name}
                        name={campo.name}
                        required={campo.required}
                        value={formData[campo.name as keyof FormData]}
                        onChange={handleChange}
                        rows={6}
                        className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-800 font-light placeholder:text-stone-300 focus:outline-none focus:border-stone-900 transition-colors resize-none"
                        placeholder={`Tu ${campo.label.toLowerCase()}...`}
                      />
                    ) : (
                      <input
                        id={campo.name}
                        name={campo.name}
                        type={campo.type}
                        required={campo.required}
                        value={formData[campo.name as keyof FormData]}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-stone-300 py-3 text-stone-800 font-light placeholder:text-stone-300 focus:outline-none focus:border-stone-900 transition-colors"
                        placeholder={`Tu ${campo.label.toLowerCase()}`}
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-3 bg-stone-900 text-white px-6 py-4 text-xs uppercase tracking-[0.2em] hover:bg-stone-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Columna derecha: Tarjeta de contacto */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-32">
              <div className="border border-stone-300 bg-white/70 backdrop-blur-sm p-8 md:p-10">
                
                <h2 className="font-serif text-2xl text-stone-900 mb-8">
                  Detalles de contacto
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <a 
                    href={`mailto:${contacto.email}`}
                    className="group flex items-start gap-4 text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center shrink-0 group-hover:border-stone-400 transition-colors">
                      <Mail className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-stone-400 mb-1">Email</p>
                      <p className="font-light">{contacto.email}</p>
                    </div>
                  </a>

                  {/* Teléfono */}
                  <a 
                    href={`tel:${contacto.telefono.replace(/\s/g, '')}`}
                    className="group flex items-start gap-4 text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center shrink-0 group-hover:border-stone-400 transition-colors">
                      <Phone className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-stone-400 mb-1">Teléfono</p>
                      <p className="font-light">{contacto.telefono}</p>
                    </div>
                  </a>
                </div>

                {/* Separador */}
                <div className="h-px bg-stone-200 my-8" />

                {/* Redes sociales */}
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-stone-400 mb-4">Sígueme</p>
                  <div className="flex gap-3">
                    <a
                      href={contacto.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                    <a
                      href={contacto.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}