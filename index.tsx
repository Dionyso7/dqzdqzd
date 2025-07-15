import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import Testimonial from '@/components/Testimonial'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const services = [
    {
      title: "Séances individuelles",
      description: "Un accompagnement personnalisé pour répondre à vos besoins spécifiques et atteindre vos objectifs de bien-être.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      duration: "1h",
      price: "70€"
    },
    {
      title: "Séances de groupe",
      description: "Partagez une expérience collective de détente et de développement personnel dans un cadre bienveillant.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      duration: "1h15",
      price: "25€"
    },
    {
      title: "Ateliers thématiques",
      description: "Des ateliers spécialisés pour approfondir des techniques spécifiques : gestion du stress, sommeil, confiance en soi.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: (
        <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      duration: "2h",
      price: "45€"
    }
  ]

  const testimonials = [
    {
      quote: "Sophie m'a aidée à retrouver confiance en moi et à gérer mon stress au quotidien. Ses séances sont un véritable moment de paix.",
      author: "Marie L.",
      role: "Cadre en entreprise",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Grâce à la sophrologie, j'ai appris à mieux dormir et à aborder les défis avec sérénité. Je recommande vivement !",
      author: "Thomas M.",
      role: "Étudiant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Un accompagnement bienveillant et professionnel. Sophie sait s'adapter à chaque personne avec une grande écoute.",
      author: "Claire D.",
      role: "Retraitée",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ]

  return (
    <>
      <Head>
        <title>Sophie Zen - Sophrologue en région parisienne | Bien-être et relaxation</title>
        <meta name="description" content="Sophrologue certifiée en région parisienne, je vous accompagne vers un mieux-être durable à travers des techniques de relaxation et de développement personnel." />
        <meta name="keywords" content="sophrologie, relaxation, bien-être, stress, Paris, développement personnel" />
        <meta property="og:title" content="Sophie Zen - Sophrologue en région parisienne" />
        <meta property="og:description" content="Accompagnement personnalisé vers le bien-être et la sérénité" />
        <meta property="og:type" content="website" />
      </Head>

      <Header />

      {/* Hero Section */}
      <Hero
        title="Retrouvez votre équilibre intérieur"
        subtitle="Sophrologue certifiée en région parisienne"
        description="Accompagnement personnalisé pour gérer le stress, améliorer votre sommeil et développer votre bien-être au quotidien."
        primaryButton={{ text: "Prendre rendez-vous", href: "/contact" }}
        secondaryButton={{ text: "Découvrir la sophrologie", href: "/seances" }}
        backgroundImage="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        overlay={true}
      />

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-sage-100 text-sage-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Sophrologue certifiée RNCP
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-6">
                Votre bien-être, ma priorité
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Diplômée de l'École Française de Sophrologie, je vous accompagne depuis plus de 8 ans 
                  dans votre quête d'équilibre et de sérénité. Ma pratique allie techniques traditionnelles 
                  et approches modernes pour une sophrologie adaptée à votre rythme de vie.
                </p>
                <p>
                  Que vous souhaitiez gérer votre stress, améliorer votre sommeil, préparer un événement 
                  important ou simplement retrouver confiance en vous, je vous propose un accompagnement 
                  personnalisé dans un cadre bienveillant et professionnel.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/a-propos" className="btn-primary">
                  En savoir plus sur mon parcours
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Consultation gratuite
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Méditation en pleine nature dans les montagnes - Connexion avec l'environnement"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-sage-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sage-600 mb-1">8+</div>
                  <div className="text-sm text-gray-600 font-medium">Années d'expérience</div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-cream-100 p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-sage-700">Disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-sage-50 text-sage-600 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Accompagnements personnalisés
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-4">
              Mes accompagnements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les différentes formules que je propose pour vous accompagner 
              dans votre démarche de bien-être et de développement personnel.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          {/* Galerie d'ambiance */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-display font-bold text-sage-800 mb-4">
                Un cadre apaisant pour votre bien-être
              </h3>
              <p className="text-gray-600 max-w-xl mx-auto">
                Découvrez l'atmosphère sereine de mon cabinet, conçu pour favoriser la détente et l'introspection.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Méditation au coucher du soleil avec sphère de cristal - Contemplation et sérénité"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-sage-900/20 group-hover:bg-sage-900/10 transition-colors duration-300"></div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Méditation en position lotus au coucher du soleil - Harmonie intérieure"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-sage-900/20 group-hover:bg-sage-900/10 transition-colors duration-300"></div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Moment de détente sur terrasse - Relaxation et bien-être quotidien"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-sage-900/20 group-hover:bg-sage-900/10 transition-colors duration-300"></div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                  alt="Pratique de la respiration consciente - Techniques de sophrologie avancées"
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-sage-900/20 group-hover:bg-sage-900/10 transition-colors duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-sage-50 via-cream-50 to-ocean-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-sage-600 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Bienfaits prouvés scientifiquement
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-4">
              Les bienfaits de la sophrologie
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une pratique douce et accessible qui vous aide à retrouver équilibre et sérénité au quotidien.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Gestion du stress",
                description: "Apprenez à identifier et gérer votre stress avec des techniques efficaces et éprouvées.",
                stat: "-70% de stress ressenti*",
                color: "sage"
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ),
                title: "Amélioration du sommeil",
                description: "Retrouvez un sommeil réparateur grâce à des exercices de relaxation profonde.",
                stat: "+2h de sommeil profond*",
                color: "ocean"
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Confiance en soi",
                description: "Développez votre estime personnelle et votre confiance intérieure durablement.",
                stat: "+85% de confiance*",
                color: "amber"
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Équilibre émotionnel",
                description: "Trouvez votre équilibre et gérez vos émotions avec sérénité et bienveillance.",
                stat: "+60% d'équilibre*",
                color: "purple"
              }
            ].map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
                  <div className={`w-20 h-20 bg-gradient-to-br from-${benefit.color}-100 to-${benefit.color}-200 rounded-2xl flex items-center justify-center mx-auto mb-6 text-${benefit.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-sage-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                  <div className={`text-sm text-${benefit.color}-600 font-medium`}>{benefit.stat}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-sm text-gray-500">*Résultats observés sur un panel de 200 patients après 8 séances</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-sage-100 rounded-full -translate-x-32 -translate-y-32 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cream-100 rounded-full translate-x-48 translate-y-48 opacity-30"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-sage-50 text-sage-600 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Témoignages authentiques
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-4">
              Ce que disent mes clients
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les témoignages de personnes qui ont retrouvé leur équilibre grâce à la sophrologie.
            </p>
          </div>
          
          {/* Statistiques de satisfaction */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-600 mb-2">98%</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-600 mb-2">250+</div>
              <div className="text-gray-600">Personnes accompagnées</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Note moyenne</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
          
          {/* Témoignage vidéo simulé */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-sage-50 to-cream-50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center bg-white text-sage-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Témoignage vidéo
                  </div>
                  <h3 className="text-2xl font-display font-bold text-sage-800 mb-4">
                    "Une transformation profonde"
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Découvrez le témoignage complet d'Isabelle, qui partage son parcours de transformation 
                    grâce à la sophrologie et l'impact positif sur sa vie professionnelle et personnelle.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80"
                      alt="Isabelle R."
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-sage-800">Isabelle R.</div>
                      <div className="text-sm text-gray-600">Directrice commerciale</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-sage-100 rounded-xl flex items-center justify-center group cursor-pointer hover:bg-sage-200 transition-colors duration-300">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-sage-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    3:42
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="section-padding bg-gradient-to-r from-ocean-50 via-sage-50 to-cream-50 relative overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Méditation au coucher du soleil - Moment de paix intérieure"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-900/30 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl">
                  <div className="text-sage-800 font-semibold text-sm">Chaque coucher de soleil</div>
                  <div className="text-sage-600 text-sm">est une nouvelle opportunité</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-sage-200 to-ocean-300 rounded-full opacity-60"></div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm text-sage-600 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-lg">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Votre transformation commence ici
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-6">
                "La sophrologie m'a appris à voir la beauté dans chaque instant"
              </h2>
              <div className="space-y-4 text-gray-600 mb-8">
                <p className="text-lg leading-relaxed">
                  Comme le soleil qui se couche chaque soir pour mieux renaître, 
                  la sophrologie vous invite à lâcher prise sur les tensions du jour 
                  pour accueillir la sérénité.
                </p>
                <p>
                  Dans un monde en perpétuel mouvement, offrez-vous ces moments de pause 
                  qui transforment votre rapport à vous-même et au monde qui vous entoure.
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-sage-100">
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&q=80"
                    alt="Témoignage client"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-sage-800">Amélie M.</div>
                    <div className="text-sm text-gray-600">Accompagnée depuis 6 mois</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Grâce à Sophie, j'ai redécouvert le plaisir des petites choses. 
                  Chaque séance est un voyage vers plus de bienveillance envers moi-même."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-sage-600 via-sage-700 to-sage-800 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 translate-y-32"></div>
        
        {/* Motif de fond */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center text-white mb-12">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Commencez dès aujourd'hui
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Prêt(e) à transformer votre quotidien ?
              </h2>
              <p className="text-xl text-sage-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Offrez-vous le cadeau d'un accompagnement personnalisé. Première consultation gratuite 
                pour découvrir comment la sophrologie peut améliorer votre bien-être.
              </p>
            </div>
            
            {/* Avantages en highlight */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Consultation gratuite</h3>
                <p className="text-sage-100 text-sm">30 minutes pour découvrir la sophrologie</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Accompagnement sur-mesure</h3>
                <p className="text-sage-100 text-sm">Adapté à vos besoins spécifiques</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2">Cabinet à Paris</h3>
                <p className="text-sage-100 text-sm">Facilement accessible en transport</p>
              </div>
            </div>
            
            {/* Boutons d'action */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contact" className="bg-white text-sage-600 hover:bg-sage-50 font-semibold py-4 px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Consultation gratuite
                </Link>
                <Link href="/seances" className="border-2 border-white text-white hover:bg-white hover:text-sage-600 font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  En savoir plus
                </Link>
              </div>
              
              {/* Contact rapide */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sage-100">
                <a href="tel:0142567890" className="flex items-center hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  01 42 56 78 90
                </a>
                <span className="hidden sm:block">•</span>
                <a href="mailto:contact@sophie-zen.fr" className="flex items-center hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@sophie-zen.fr
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}