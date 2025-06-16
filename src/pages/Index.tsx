
import { FileText, Presentation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const handleDownload = (type: string, subject: string) => {
    // Aici vei putea adăuga logica pentru descărcare când ai fișierele
    console.log(`Descarcă ${type} pentru ${subject}`);
    //redirect 
        let url = "";

    // Define URLs for each combination
    if (subject === 'PMIS' && type === 'Referat') {
      url = 'https://docs.google.com/document/d/1I2dlOokQ99tFFXc4xocR9uXmLXqRSUE9XfPzmwX--Tk/edit?usp=sharing';
    } else if (subject === 'PMIS' && type === 'Prezentare') {
      url = 'https://docs.google.com/presentation/d/1lE73sPHljBUx-lN75_RS8hIEB96hhIFt-w_0y9jR1J0/edit?usp=sharing';
    } else if (subject === 'CFSS' && type === 'Referat') {
      url = 'https://docs.google.com/document/d/163JU5o4_fxzUURRn8eJNK8de7pvnl9tmH_JGP9VZUJ4/edit?usp=sharing';
    } else if (subject === 'CFSS' && type === 'Prezentare') {
      url = 'https://docs.google.com/presentation/d/1i9QD30l1ZLDC7jvU-VnGTrydf_LxcbBF/edit?usp=sharing&ouid=117791821324036604478&rtpof=true&sd=true';
    }

    if (url) {
      // Open the file in a new tab
      window.open(url, '_blank');
    } else {
      console.error(`No URL configured for ${type} and ${subject}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Proiecte: PMIS & CFSS
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
           
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* PMIS Project */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 leading-tight">
                PMIS
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 leading-relaxed">
                Tehnologii JavaScript în dezvoltarea software: Node.js, React și Next.js
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={() => handleDownload('Referat', 'PMIS')}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FileText className="w-5 h-5 mr-2" />
                Descarcă Referat PDF
              </Button>
              <Button 
                onClick={() => handleDownload('Prezentare', 'PMIS')}
                variant="outline"
                className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Presentation className="w-5 h-5 mr-2" />
                Vizualizează Prezentarea
              </Button>
            </CardContent>
          </Card>

          {/* CFSS Project */}
          <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900 leading-tight">
                CFSS
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 leading-relaxed">
                Considerații privind criminalitatea cibernetică
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={() => handleDownload('Referat', 'CFSS')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FileText className="w-5 h-5 mr-2" />
                Descarcă Referat PDF
              </Button>
              <Button 
                onClick={() => handleDownload('Prezentare', 'CFSS')}
                variant="outline"
                className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Presentation className="w-5 h-5 mr-2" />
                Vizualizează Prezentarea
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-500">
            © 2025 - Resurse Proiect
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
