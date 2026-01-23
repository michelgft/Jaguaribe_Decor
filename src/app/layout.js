import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Jaguaribe Decor",
  description: "Sofisticação e exclusividade para o seu lar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        {/* --- CÓDIGOS COPIADOS DO SEU INDEX.HTML --- */}
        
        {/* 1. Fonte Red Rose */}
        <link href="https://fonts.googleapis.com/css?family=Red+Rose:wght@300..700&display=swap" rel="stylesheet" />
        
        {/* 2. Fonte Archivo e Kumar One */}
        <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Kumar+One&display=swap" rel="stylesheet" />
        
        {/* 3. Fontes Genos e Saira */}
        <link href="https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&family=Saira:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        
        {/* 4. Fonte DM Serif Display */}
        <link href="https://fonts.googleapis.com/css?family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
        
        {/* 5. Ícones do Font Awesome */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
        
        {/* ------------------------------------------- */}
      </head>
      
      {/* CORREÇÃO AQUI EMBAIXO: */}
      <body>
        <Header />  {/* O Header fica fixo no topo */}
        
        {children}  {/* O "children" é o miolo do sanduíche (Home, Login, etc) */}
        
        <Footer />  {/* O Footer fica fixo embaixo */}
      </body>
    </html>
  );
}