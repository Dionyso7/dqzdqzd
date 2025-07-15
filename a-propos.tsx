import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function APropos() {
  const formations = [
    {
      year: "2015",
      title: "Diplôme de Sophrologue",
      institution: "École Française de Sophrologie",
      description: "Formation complète en sophrologie caycédienne et techniques de relaxation"
    },
    {
      year: "2017",
      title: "Spécialisation Gestion du Stress",
      institution: "Institut de Formation en Sophrologie",
      description: "Techniques avancées pour l'accompagnement des troubles anxieux"
    },
    {
      year: "2019",
      title: "Formation Sophrologie et Sommeil",
      institution: "Centre de Formation Continue",
      description: "Méthodes spécialisées pour les troubles du sommeil"
    },
    {
      year: "2022",
      title: "Certification Sophrologie Périnatale",
      institution: "École Supérieure de Sophrologie",
      description: "Accompagnement de la grossesse et de la parentalité"
    }
  ]

  const valeurs = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Bienveillance",
      description: "Un accompagnement dans le respect et l'écoute de chaque personne"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Authenticité",
      description: "Une approche sincère et transparente dans la relation thérapeutique"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Autonomie",
      description: "Vous donner les outils pour devenir acteur de votre bien-être"
    }
  ]

  return (
    <>
      <Head>
        <title>À propos - Sophie Zen | Mon parcours et ma philosophie</title>
        <meta name="description" content="Découvrez mon parcours de sophrologue, mes formations et ma philosophie d'accompagnement vers le bien-être et la sérénité." />
        <meta name="keywords" content="sophrologue, parcours, formation, philosophie, bien-être, Paris" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-sage-600 via-sage-700 to-sage-800 flex items-center justify-center overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-32 translate-y-32"></div>
        
        {/* Image de fond subtile */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-sage-600/90 via-sage-700/90 to-sage-800/90"></div>
        
        <div className="relative z-10 text-center text-white container-custom">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Sophrologue certifiée RNCP
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Sophie Martin
          </h1>
          <p className="text-xl md:text-2xl text-sage-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Votre accompagnatrice vers un équilibre de vie durable et une sérénité retrouvée
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sage-100">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">8 ans d'expérience</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              <span className="font-medium">300+ personnes accompagnées</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <span className="font-medium">4.9/5 satisfaction client</span>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-gradient-to-b from-white to-sage-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-sage-400 to-sage-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1594824804732-5f8db7b6b5d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Sophie Martin dans son cabinet de sophrologie"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Badges flottants */}
                <div className="absolute -top-4 -left-4 bg-white shadow-lg rounded-xl p-4 border border-sage-100">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-sage-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="text-2xl font-bold text-sage-800">8+</div>
                      <div className="text-xs text-gray-600">Années</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-sage-600 text-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                    <div>
                      <div className="text-2xl font-bold">300+</div>
                      <div className="text-xs opacity-90">Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center bg-sage-100 text-sage-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Passion & Expertise
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-6">
                  Une approche humaine et bienveillante
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Bonjour, je suis Sophie, sophrologue certifiée installée en région parisienne depuis 2015. 
                  Ma passion pour l'accompagnement vers le bien-être m'a menée vers cette belle profession 
                  qui allie écoute, bienveillance et techniques concrètes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Après une première carrière dans le secteur de la communication, j'ai ressenti le besoin 
                  de donner plus de sens à mon travail. C'est ainsi que j'ai découvert la sophrologie, 
                  d'abord pour moi-même, puis comme vocation professionnelle.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Aujourd'hui, j'accompagne des personnes de tous âges dans leur quête d'équilibre et de sérénité. 
                  Chaque séance est unique, adaptée à vos besoins et à votre rythme.
                </p>
              </div>
              
              {/* Statistiques */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-sage-100">
                  <div className="text-3xl font-bold text-sage-600 mb-2">98%</div>
                  <div className="text-sm text-gray-600">Taux de satisfaction</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-sage-100">
                  <div className="text-3xl font-bold text-sage-600 mb-2">4.9/5</div>
                  <div className="text-sm text-gray-600">Note moyenne</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Prendre rendez-vous
                </Link>
                <Link href="/seances" className="btn-secondary">
                  Découvrir mes séances
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation et Parcours */}
      <section className="section-padding bg-gradient-to-br from-sage-50 to-white relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-sage-200/30 rounded-full translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage-300/20 rounded-full -translate-x-24 translate-y-24"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-sage-100 text-sage-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Formation & Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-sage-800 mb-6">
              Un parcours d'excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une formation solide et une pratique enrichie par l'expérience et la formation continue
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Ligne centrale */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-sage-300 to-sage-500 rounded-full"></div>
              
              <div className="space-y-12">
                {formations.map((formation, index) => (
                  <div key={index} className="relative flex items-center">
                    {index % 2 === 0 ? (
                      <>
                        <div className="w-1/2 pr-8 text-right">
                          <div className="bg-white rounded-2xl p-8 shadow-xl border border-sage-100 hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-center justify-end mb-4">
                              <div className="bg-sage-600 text-white rounded-full p-3 mr-4">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                              </div>
                              <span className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm font-medium">{formation.year}</span>
                            </div>
                            <h3 className="text-xl font-bold text-sage-800 mb-3">{formation.title}</h3>
                            <p className="text-sage-600 font-medium mb-2">{formation.institution}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{formation.description}</p>
                          </div>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-sage-600 rounded-full border-4 border-white shadow-lg"></div>
                        <div className="w-1/2 pl-8"></div>
                      </>
                    ) : (
                      <>
                        <div className="w-1/2 pr-8"></div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-sage-600 rounded-full border-4 border-white shadow-lg"></div>
                        <div className="w-1/2 pl-8">
                          <div className="bg-white rounded-2xl p-8 shadow-xl border border-sage-100 hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                              <span className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm font-medium mr-4">{formation.year}</span>
                              <div className="bg-sage-600 text-white rounded-full p-3">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </div>
                            </div>
                            <h3 className="text-xl font-bold text-sage-800 mb-3">{formation.title}</h3>
                            <p className="text-sage-600 font-medium mb-2">{formation.institution}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{formation.description}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Certifications */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-display font-bold text-sage-800 mb-8">Certifications & Reconnaissances</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-sage-100">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-sage-800 mb-2">Certification RNCP</h4>
                  <p className="text-gray-600 text-sm">Titre professionnel reconnu par l'État</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-sage-100">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-sage-800 mb-2">Membre SFS</h4>
                  <p className="text-gray-600 text-sm">Société Française de Sophrologie</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-sage-100">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-sage-800 mb-2">Code de déontologie</h4>
                  <p className="text-gray-600 text-sm">Respect strict de l'éthique professionnelle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophie et Valeurs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-4">
              Ma philosophie
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Je crois profondément que chaque personne possède en elle les ressources nécessaires pour 
              retrouver son équilibre. Mon rôle est de vous accompagner dans cette découverte, 
              avec respect et bienveillance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {valeurs.map((valeur, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-600">
                  {valeur.icon}
                </div>
                <h3 className="text-xl font-semibold text-sage-800 mb-3">
                  {valeur.title}
                </h3>
                <p className="text-gray-600">
                  {valeur.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-sage-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <svg className="w-12 h-12 text-sage-400 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl md:text-2xl text-sage-800 font-light italic mb-6">
                "La sophrologie n'est pas une méthode miracle, mais un chemin vers la découverte 
                de vos propres ressources. Ensemble, nous explorerons ces trésors intérieurs 
                pour vous aider à retrouver confiance, sérénité et joie de vivre."
              </blockquote>
              <cite className="text-sage-600 font-medium">Sophie Martin</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Méthode de travail */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-4">
              Ma méthode de travail
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un accompagnement personnalisé qui s'adapte à votre rythme et à vos objectifs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Écoute",
                description: "Je prends le temps de comprendre vos besoins et vos attentes."
              },
              {
                step: "02",
                title: "Adaptation",
                description: "Chaque séance est personnalisée selon votre situation unique."
              },
              {
                step: "03",
                title: "Pratique",
                description: "Nous explorons ensemble les techniques les plus adaptées."
              },
              {
                step: "04",
                title: "Autonomie",
                description: "Je vous transmets les outils pour pratiquer en autonomie."
              }
            ].map((etape, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-sage-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {etape.step}
                </div>
                <h3 className="text-lg font-semibold text-sage-800 mb-3">
                  {etape.title}
                </h3>
                <p className="text-gray-600">
                  {etape.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Envie de commencer votre parcours ?
          </h2>
          <p className="text-xl mb-8 text-sage-100 max-w-2xl mx-auto">
            Je serais ravie de vous accompagner dans votre démarche de bien-être. 
            Contactez-moi pour échanger sur vos besoins et planifier votre première séance.
          </p>
          <Link href="/contact" className="bg-white text-sage-600 hover:bg-cream-50 font-medium py-4 px-8 rounded-lg transition-colors duration-200">
            Me contacter
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}