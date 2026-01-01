// src/pages/Privacy.tsx
import React from "react";

export const Privacy: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
            <h1 className="text-4xl font-bold mb-6 text-center">Política de Privacidad</h1>
            <p className="mb-8 text-center text-gray-600">
                Cómo recopilamos, usamos y protegemos tus datos en MOJO STREET WEAR
            </p>

            {/* 1. Responsable del tratamiento */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">1. Responsable del tratamiento</h2>
                <p>El responsable del tratamiento de tus datos es <strong>MOJO STREET WEAR</strong>.</p>
                <p>Email: <a href="mailto:info@mojostreet.com" className="text-blue-600">info@mojostreet.com</a></p>
                <p>Domicilio: (añadir dirección fiscal de tu negocio)</p>
            </section>

            {/* 2. Datos que recopilamos */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">2. Qué datos recopilamos</h2>
                <p>Recogemos únicamente los datos necesarios para gestionar tu pedido y tu experiencia en la web:</p>
                <ul className="list-disc list-inside ml-5 space-y-1 mt-1">
                    <li>Nombre y apellidos</li>
                    <li>Dirección de envío</li>
                    <li>Correo electrónico</li>
                    <li>Teléfono</li>
                    <li>Información de pago (gestionada por pasarelas seguras)</li>
                </ul>
            </section>

            {/* 3. Finalidad del tratamiento */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">3. Para qué usamos tus datos</h2>
                <ul className="list-disc list-inside ml-5 space-y-1 mt-1">
                    <li>Procesar pedidos y enviarlos correctamente</li>
                    <li>Atender consultas, devoluciones o incidencias</li>
                    <li>Enviarte información sobre pedidos y promociones (previo consentimiento)</li>
                    <li>Mejorar nuestros servicios y experiencia de compra</li>
                </ul>
            </section>

            {/* 4. Base legal */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">4. Base legal del tratamiento</h2>
                <ul className="list-disc list-inside ml-5 space-y-1 mt-1">
                    <li>Necesidad de ejecutar un contrato (tu pedido)</li>
                    <li>Consentimiento explícito para comunicaciones comerciales</li>
                    <li>Obligaciones legales para cumplir normativa fiscal y de consumidores</li>
                </ul>
            </section>

            {/* 5. Derechos del usuario */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">5. Derechos de los usuarios</h2>
                <p>Como titular de tus datos, tienes derecho a:</p>
                <ul className="list-disc list-inside ml-5 space-y-1 mt-1">
                    <li>Acceder a tus datos</li>
                    <li>Rectificar datos incorrectos</li>
                    <li>Solicitar la supresión de tus datos</li>
                    <li>Oponerte al tratamiento para marketing</li>
                    <li>Limitar el uso de tus datos</li>
                    <li>Portabilidad de datos</li>
                    <li>Retirar el consentimiento en cualquier momento</li>
                </ul>
                <p className="mt-2">
                    Para ejercer tus derechos, contacta con nosotros enviando un email a
                    <a href="mailto:info@mojostreet.com" className="text-blue-600"> info@mojostreet.com</a>.
                </p>
            </section>

            {/* 6. Conservación de datos */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">6. Conservación de datos</h2>
                <p>Guardamos tus datos únicamente durante el tiempo necesario para cumplir la finalidad de recogida y con las obligaciones legales aplicables.</p>
            </section>

            {/* 7. Seguridad */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">7. Seguridad de los datos</h2>
                <p>Adoptamos medidas técnicas y organizativas para proteger tus datos frente a accesos no autorizados, pérdida, divulgación o alteración.</p>
            </section>

            {/* 8. Cambios en la política */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">8. Cambios en la Política</h2>
                <p>Podemos actualizar esta Política para adaptarnos a nuevas exigencias legales o técnicas. Cualquier actualización será publicada en esta página.</p>
            </section>

            {/* 9. Legislación aplicable */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">9. Legislación aplicable</h2>
                <p>Esta política se rige por la legislación española y europea, incluyendo el RGPD y la LOPDGDD.</p>
            </section>
        </div>
    );
};
