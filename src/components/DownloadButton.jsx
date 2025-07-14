// src/components/DownloadButton.jsx
import { Button } from "./ui/button";

export default function DownloadButton({ children, className }) {
  const handleDownload = () => {
    // URL do arquivo de instalação (substitua pela URL real)
    const downloadUrl = "/CaixaCerto_setup.exe";
    
    // Criar link temporário para download
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "CaixaCerto_setup.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Opcional: Registrar evento de download (para analytics)
    console.log("Download iniciado");
  };

  return (
    <Button 
      size="lg" 
      onClick={handleDownload}
      className={className}
    >
      {children}
    </Button>
  );
}