import { Link } from 'react-router-dom';
import { Sparkles, Clock, Award, Heart, Star, ArrowRight } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: 'Knotless Braids',
      description: 'Des tresses sans noeud, légères et protectrices pour sublimer votre beauté naturelle.',
      price: '8000 - 15000 FCFA',
      duration: '3-5h',
    },
    {
      title: 'Cornrows',
      description: 'Tresses collées élégantes et durables, parfaites pour tous les styles.',
      price: '5000 - 8000 FCFA',
      duration: '2-3h',
    },
    {
      title: 'Coiffure à Domicile',
      description: 'Nous venons chez vous pour un moment de beauté dans le confort de votre maison.',
      price: '+2000 FCFA',
      duration: 'Variable',
    },
    {
      title: 'Retouches',
      description: 'Rafraîchissez votre coiffure et prolongez sa durée de vie.',
      price: '3000 - 5000 FCFA',
      duration: '1-2h',
    },
  ];

  const testimonials = [
    {
      name: 'Aminata D.',
      text: 'Regina est une vraie artiste! Mes Knotless Braids sont parfaites et ont tenu plus d\'un mois. Service impeccable!',
      rating: 5,
    },
    {
      name: 'Sophie M.',
      text: 'Travail soigné, ambiance chaleureuse. Je recommande les yeux fermés! La meilleure coiffeuse de la ville.',
      rating: 5,
    },
    {
      name: 'Fatou B.',
      text: 'Mes tresses sont magnifiques! Regina a pris son temps pour un résultat parfait. Merci infiniment!',
      rating: 5,
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00322D] via-[#004d45] to-[#00322D]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E7B52C] rounded-full filter blur-[128px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E7B52C] rounded-full filter blur-[128px] animate-pulse animation-delay-2000"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 golden-glow animate-fade-in">
            ELEGANCE HAIR
          </h1>
          <p className="text-3xl md:text-5xl font-script text-[#E7B52C] mb-6 animate-fade-in animation-delay-500">
            by Regina
          </p>
          <p className="text-xl md:text-2xl mb-12 text-gray-200 animate-fade-in animation-delay-1000">
            L'art des Knotless Braids, sublimé par l'élégance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1500">
            <Link
              to="/appointment"
              className="px-8 py-4 bg-[#E7B52C] text-[#00322D] font-semibold rounded-full hover:shadow-2xl transition-all duration-300 golden-hover flex items-center justify-center space-x-2"
            >
              <span>Prendre rendez-vous</span>
              <Sparkles size={20} />
            </Link>
            <Link
              to="/gallery"
              className="px-8 py-4 bg-transparent border-2 border-[#E7B52C] text-[#E7B52C] font-semibold rounded-full hover:bg-[#E7B52C] hover:text-[#00322D] transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Voir nos réalisations</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#E7B52C] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#E7B52C] rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#00322D] to-[#001a17]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 golden-glow">
              À Propos de Regina
            </h2>
            <div className="w-24 h-1 bg-[#E7B52C] mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#E7B52C] rounded-lg filter blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative h-96 bg-gradient-to-br from-[#E7B52C]/20 to-[#E7B52C]/5 rounded-lg border-2 border-[#E7B52C]/30 flex items-center justify-center">
                  <Award size={120} className="text-[#E7B52C] opacity-40" />
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Passionnée par la beauté des cheveux afro depuis plus de 5 ans, Regina a perfectionné l'art des Knotless Braids et des coiffures protectrices.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Formée aux techniques les plus modernes, elle met un point d'honneur à offrir un service personnalisé, dans le respect de vos cheveux et de vos envies.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Chez ELEGANCE HAIR, chaque cliente repart avec une coiffure qui sublime sa beauté naturelle et reflète sa personnalité.
                </p>

                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#E7B52C] golden-glow">5+</div>
                    <div className="text-sm text-gray-400">Ans d'expérience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#E7B52C] golden-glow">500+</div>
                    <div className="text-sm text-gray-400">Clientes satisfaites</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#E7B52C] golden-glow">100%</div>
                    <div className="text-sm text-gray-400">Dévouement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#001a17]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 golden-glow">
            Nos Services
          </h2>
          <div className="w-24 h-1 bg-[#E7B52C] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#00322D] to-[#001a17] border-2 border-[#E7B52C]/30 rounded-lg p-6 hover:border-[#E7B52C] transition-all duration-300 golden-hover"
              >
                <div className="absolute inset-0 bg-[#E7B52C] rounded-lg opacity-0 group-hover:opacity-5 transition-opacity"></div>

                <div className="relative">
                  <Sparkles className="text-[#E7B52C] mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-3 text-[#E7B52C]">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 pt-4 border-t border-[#E7B52C]/20">
                    <div className="flex items-center text-sm">
                      <Award size={16} className="text-[#E7B52C] mr-2" />
                      <span className="text-gray-400">{service.price}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock size={16} className="text-[#E7B52C] mr-2" />
                      <span className="text-gray-400">{service.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-[#E7B52C] text-[#E7B52C] font-semibold rounded-full hover:bg-[#E7B52C] hover:text-[#00322D] transition-all duration-300"
            >
              <span>Découvrir tous nos services</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#001a17] to-[#00322D]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 golden-glow">
            Expérience 3D
          </h2>
          <div className="w-24 h-1 bg-[#E7B52C] mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gradient-to-br from-[#00322D] to-[#001a17] border-2 border-[#E7B52C]/30 rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-[#E7B52C] opacity-0 group-hover:opacity-5 transition-opacity"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-[#E7B52C]/20 rounded-full flex items-center justify-center border-2 border-[#E7B52C] golden-hover">
                    <Sparkles size={48} className="text-[#E7B52C]" />
                  </div>
                  <p className="text-xl text-gray-300">
                    Découvrez nos coiffures en 360°
                  </p>
                  <p className="text-sm text-gray-400">
                    Visualisation 3D interactive bientôt disponible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#00322D]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 golden-glow">
            Avis de Nos Clientes
          </h2>
          <div className="w-24 h-1 bg-[#E7B52C] mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#001a17] to-[#00322D] border-2 border-[#E7B52C]/30 rounded-lg p-6 hover:border-[#E7B52C] transition-all duration-300 golden-hover"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-[#E7B52C] fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#E7B52C]/20 rounded-full flex items-center justify-center border border-[#E7B52C]">
                    <Heart size={20} className="text-[#E7B52C]" />
                  </div>
                  <p className="ml-3 font-semibold text-[#E7B52C]">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#00322D] via-[#004d45] to-[#00322D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#E7B52C] rounded-full filter blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E7B52C] rounded-full filter blur-[128px] animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles size={64} className="text-[#E7B52C] mx-auto mb-6 golden-glow" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 golden-glow">
              Réserve ton style dès aujourd'hui
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Offre-toi une expérience beauté unique avec des coiffures qui subliment ton naturel
            </p>
            <Link
              to="/appointment"
              className="inline-flex items-center space-x-2 px-10 py-5 bg-[#E7B52C] text-[#00322D] font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300 golden-hover"
            >
              <span>Prendre rendez-vous maintenant</span>
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
