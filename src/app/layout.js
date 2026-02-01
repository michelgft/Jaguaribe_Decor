import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../context/CartContext";
import { CartSidebar } from "../components/CartSidebar"; // <--- 1. IMPORTAÇÃO NOVA

export const metadata = {
  title: "Jaguaribe Decor",
  description: "Sofisticação e exclusividade para o seu lar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        {/* FONTES ORIGINAIS MANTIDAS */}
        <link href="https://fonts.googleapis.com/css?family=Red+Rose:wght@300..700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Kumar+One&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&family=Saira:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
      </head>
      
      <body className="bg-gray-50 text-gray-900">
        <CartProvider>
          
          <Navbar />
          
          <CartSidebar /> {/* <--- 2. COMPONENTE ADICIONADO AQUI */}
          
          <main className="pt-24 min-h-screen">
            {children}
          </main>
          
          <Footer />
          
        </CartProvider>
      </body>
    </html>
  );
}