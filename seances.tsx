import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServiceCard from '@/components/ServiceCard'
import Image from 'next/image'
import Link from 'next/link'

export default function Seances() {
  const typesSeances = [
    {
      title: "Séance individuelle",
      description: "Un accompagnement personnalisé en tête-à-tête pour répondre à vos besoins spécifiques. Idéal pour un travail en profondeur sur vos objectifs personnels.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "1h",
      price: "70€",
      icon: (
        <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Séance de groupe",
      description: "Partagez une expérience collective dans un petit groupe (6 personnes max). L'énergie du groupe enrichit la pratique et crée des liens bienveillants.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "1h15",
      price: "25€",
      icon: (
        <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Atelier thématique",
      description: "Des ateliers spécialisés sur des thèmes précis : gestion du stress, préparation aux examens, amélioration du sommeil, confiance en soi...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      duration: "2h",
      price: "45€",
      icon: (
        <svg className="w-6 h-6 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ]

  const deroulementSeance = [
    {
      etape: "Accueil",
      duree: "5-10 min",
      description: "Échange sur votre état du moment, vos besoins et vos attentes pour la séance.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      etape: "Relaxation dynamique",
      duree: "15-20 min",
      description: "Exercices de respiration et de détente musculaire pour vous préparer à la pratique.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      etape: "Visualisation",
      duree: "20-25 min",
      description: "Exercices de sophronisation avec visualisations positives adaptées à vos objectifs.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      etape: "Retour et échange",
      duree: "10-15 min",
      description: "Partage de vos ressentis et conseils pour intégrer la pratique dans votre quotidien.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    }
  ]

  const techniques = [
    {
      nom: "Respiration contrôlée",
      description: "Techniques de respiration pour calmer le mental et détendre le corps",
      benefices: ["Réduction du stress", "Amélioration de la concentration", "Apaisement émotionnel"]
    },
    {
      nom: "Relaxation progressive",
      description: "Détente musculaire progressive pour relâcher les tensions physiques",
      benefices: ["Détente corporelle", "Meilleur sommeil", "Conscience corporelle"]
    },
    {
      nom: "Visualisation positive",
      description: "Images mentales apaisantes pour renforcer la confiance et la sérénité",
      benefices: ["Confiance en soi", "Motivation", "Gestion des émotions"]
    },
    {
      nom: "Ancrage positif",
      description: "Techniques pour installer durablement les ressentis positifs",
      benefices: ["Stabilité émotionnelle", "Ressources intérieures", "Autonomie"]
    }
  ]

  return (
    <>
      <Head>
        <title>Séances de sophrologie - Sophie Zen | Déroulement et techniques</title>
        <meta name="description" content="Découvrez le déroulement de mes séances de sophrologie : individuelles, de groupe ou ateliers thématiques. Techniques et bienfaits expliqués." />
        <meta name="keywords" content="séances sophrologie, relaxation, techniques, bien-être, Paris, déroulement" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Séances de sophrologie"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-sage-800 bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Mes séances
          </h1>
          <p className="text-xl text-cream-100 max-w-2xl mx-auto">
            Découvrez comment se déroulent les séances et les techniques utilisées
          </p>
        </div>
      </section>

      {/* Types de séances */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-4">
              Types de séances proposées
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez la formule qui vous convient le mieux selon vos besoins et vos préférences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {typesSeances.map((seance, index) => (
              <ServiceCard key={index} {...seance} />
            ))}
          </div>
        </div>
      </section>

      {/* Section inspiration */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Moment de sérénité en sophrologie"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-sage-900/70"></div>
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Votre bien-être, ma priorité
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Un espace de paix pour vous ressourcer
            </h2>
            <p className="text-xl text-cream-100 mb-8 leading-relaxed">
              Dans mon cabinet, chaque séance est un moment privilégié où vous pouvez vous reconnecter à vous-même, 
              loin du stress quotidien. Un environnement chaleureux et apaisant vous attend.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Accompagnement personnalisé</h3>
                <p className="text-cream-100 text-sm">Chaque séance est adaptée à vos besoins spécifiques</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Flexibilité horaire</h3>
                <p className="text-cream-100 text-sm">Créneaux adaptés à votre emploi du temps</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Environnement serein</h3>
                <p className="text-cream-100 text-sm">Un cadre apaisant pour votre détente</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement d'une séance */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-4">
              Déroulement d'une séance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Chaque séance suit une structure claire et progressive pour vous accompagner vers la détente et le bien-être.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deroulementSeance.map((etape, index) => (
                <div key={index} className="card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center text-sage-600">
                        {etape.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-sage-800">
                          {etape.etape}
                        </h3>
                        <span className="text-sm text-sage-600 font-medium">
                          {etape.duree}
                        </span>
                      </div>
                      <p className="text-gray-600">
                        {etape.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Techniques utilisées */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-4">
              Techniques utilisées
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des méthodes douces et efficaces adaptées à chaque personne et à chaque situation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techniques.map((technique, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-sage-800 mb-3">
                  {technique.nom}
                </h3>
                <p className="text-gray-600 mb-4">
                  {technique.description}
                </p>
                <div>
                  <h4 className="text-sm font-medium text-sage-700 mb-2">Bénéfices :</h4>
                  <div className="flex flex-wrap gap-2">
                    {technique.benefices.map((benefice, idx) => (
                      <span key={idx} className="bg-sage-100 text-sage-700 px-3 py-1 rounded-full text-sm">
                        {benefice}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseils pratiques */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-4">
              Conseils pratiques
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quelques recommandations pour profiter pleinement de votre séance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Avant la séance",
                conseils: [
                  "Portez des vêtements confortables",
                  "Évitez les repas copieux 2h avant",
                  "Arrivez 5 minutes en avance"
                ]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Pendant la séance",
                conseils: [
                  "Laissez-vous guider sans jugement",
                  "Respirez naturellement",
                  "Accueillez vos ressentis"
                ]
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Après la séance",
                conseils: [
                  "Prenez le temps de revenir doucement",
                  "Hydratez-vous bien",
                  "Pratiquez les exercices à la maison"
                ]
              }
            ].map((conseil, index) => (
              <div key={index} className="card text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-600">
                  {conseil.icon}
                </div>
                <h3 className="text-lg font-semibold text-sage-800 mb-4">
                  {conseil.title}
                </h3>
                <ul className="text-gray-600 space-y-2">
                  {conseil.conseils.map((item, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-sage-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-4">
              Questions fréquentes
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Combien de séances sont nécessaires ?",
                reponse: "Le nombre de séances varie selon vos objectifs et vos besoins. En général, on observe des bénéfices dès les premières séances, et un accompagnement de 8 à 12 séances permet d'ancrer durablement les techniques."
              },
              {
                question: "La sophrologie convient-elle à tout le monde ?",
                reponse: "La sophrologie s'adapte à tous les âges et toutes les situations. Les techniques sont douces et respectent le rythme de chacun. Seules certaines pathologies psychiatriques nécessitent un avis médical préalable."
              },
              {
                question: "Que se passe-t-il si je m'endors pendant la séance ?",
                reponse: "C'est tout à fait normal ! Cela montre que votre corps se détend profondément. L'important est de vous laisser aller et d'accueillir ce qui se présente naturellement."
              },
              {
                question: "Puis-je pratiquer chez moi entre les séances ?",
                reponse: "Absolument ! Je vous transmets des exercices simples à pratiquer quotidiennement. Cette pratique personnelle renforce les bénéfices des séances et développe votre autonomie."
              }
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-sage-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.reponse}
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
            Prêt(e) à découvrir la sophrologie ?
          </h2>
          <p className="text-xl mb-8 text-sage-100 max-w-2xl mx-auto">
            Réservez votre première séance découverte et commencez votre chemin vers plus de sérénité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-sage-600 hover:bg-cream-50 font-medium py-4 px-8 rounded-lg transition-colors duration-200">
              Prendre rendez-vous
            </Link>
            <Link href="/tarifs" className="border-2 border-white text-white hover:bg-white hover:text-sage-600 font-medium py-4 px-8 rounded-lg transition-colors duration-200">
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}