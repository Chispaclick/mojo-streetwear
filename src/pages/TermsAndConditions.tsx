// src/pages/TermsAndConditions.tsx
import React from "react";

export const TermsAndConditions: React.FC = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
            <h1 className="text-4xl font-bold mb-6 text-center">Términos y Condiciones</h1>
            <p className="mb-8 text-center text-gray-600">
                Contrato legal entre tu tienda y quien usa/compra en ella
            </p>

            {/* 1. Introducción */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">1. Introducción</h2>
                <p>
                    Bienvenido a <strong>MOJO STREET WEAR</strong>. Estos Términos y Condiciones regulan
                    el uso de nuestra web y la compra de productos (camisetas para hombres y mujeres). Al
                    utilizar este sitio y/o realizar una compra, aceptas cumplir y estar sujeto a estos
                    términos.
                </p>
            </section>

            {/* 2. Identificación del comerciante */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">2. Identificación del comerciante</h2>
                <p><strong>MOJO STREET WEAR</strong></p>
                <p>Email: <a href="mailto:info@mojostreet.com" className="text-blue-600">info@mojostreet.com</a></p>
                <p>Tel: +1 234 567 890</p>
                <p>Domicilio: (añadir dirección fiscal de tu negocio si está registrada)</p>
                <p>Datos fiscales: (Añadir NIF/CIF si aplica)</p>
                <p className="text-sm text-gray-500 mt-2">(Debes poner tus datos reales de empresa o persona física — es obligatorio)</p>
            </section>

            {/* 3. Condiciones de uso de la web */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">3. Condiciones de uso de la web</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>El acceso y uso de este sitio está permitido de forma temporal y podemos modificar o retirar servicios sin aviso previo.</li>
                    <li>No puedes usar el sitio para fines ilegales o que infrinjan derechos de terceros.</li>
                </ul>
            </section>

            {/* 4. Proceso de compra */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">4. Proceso de compra</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Los pedidos se realizan online.</li>
                    <li>El contrato se perfecciona cuando confirmamos tu pago y te enviamos la confirmación.</li>
                    <li>Pagos seguros mediante (indicar métodos: tarjeta, PayPal, etc.).</li>
                    <li>Los precios incluyen impuestos legales y los gastos de envío se especifican antes del pago.</li>
                </ul>
            </section>

            {/* 5. Entrega */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">5. Entrega</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Entregamos dentro de los plazos indicados en la página de cada producto.</li>
                    <li>No somos responsables por retrasos causados por mensajería más allá de nuestra gestión.</li>
                    <li>Si hay incidencia, contacta con nosotros por email.</li>
                </ul>
            </section>

            {/* 6. Derechos de desistimiento y devoluciones */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">6. Derechos de desistimiento y devoluciones</h2>
                <p>
                    Según la normativa española de consumidores (<strong>Real Decreto Legislativo 1/2007</strong>),
                    tienes derecho a desistir de tu compra en un plazo de <strong>14 días naturales</strong> desde la recepción del producto, sin necesidad de justificar tu decisión.
                </p>
                <p className="mt-2">Para ejercer el derecho de desistimiento debes:</p>
                <ul className="list-disc list-inside ml-5 space-y-1 mt-1">
                    <li>Contactarnos informando tu decisión.</li>
                    <li>Devolver el producto sin usar y en perfectas condiciones.</li>
                    <li>Los gastos de devolución pueden correr a cargo del cliente (especificar según tu política).</li>
                </ul>
            </section>

            {/* 7. Garantías */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">7. Garantías</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Todos nuestros productos tienen garantía conforme a la Ley de Garantías en la Venta de Bienes de Consumo.</li>
                    <li>Defectos de fabricación serán cambiados o reembolsados según ley.</li>
                </ul>
            </section>

            {/* 8. Responsabilidades */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">8. Responsabilidades</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>No somos responsables de daños indirectos o pérdidas que puedan surgir por el uso de esta web o productos.</li>
                    <li>La responsabilidad máxima no superará el importe del pedido realizado.</li>
                </ul>
            </section>

            {/* 9. Modificaciones de los términos */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">9. Modificaciones de los términos</h2>
                <p>Podemos actualizar estos términos cuando sea necesario. Te informaremos de cambios relevantes.</p>
            </section>

            {/* 10. Legislación aplicable */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">10. Legislación aplicable</h2>
                <p>
                    Estos términos se rigen por la legislación española y europea. Cualquier disputa será sometida a los tribunales del país donde se ubique tu negocio (o de residencia del cliente en ciertos casos).
                </p>
            </section>
        </div>
    );
};
