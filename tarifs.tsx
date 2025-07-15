import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Tarifs() {
  const tarifsIndividuels = [
    {
      type: "Séance découverte",
      prix: "60€",
      duree: "1h",
      description: "Première séance pour découvrir la sophrologie et définir vos objectifs",
      inclus: [
        "Bilan personnalisé",
        "Première approche des techniques",
        "Conseils personnalisés",
        "Support audio offert"
      ],
      populaire: false
    },
    {
      type: "Séance individuelle",
      prix: "70€",
      duree: "1h",
      description: "Accompagnement personnalisé adapté à vos besoins spécifiques",
      inclus: [
        "Séance sur mesure",
        "Techniques adaptées",
        "Suivi personnalisé",
        "Exercices à pratiquer"
      ],
      populaire: true
    },
    {
      type: "Forfait 5 séances",
      prix: "320€",
      prixUnitaire: "64€/séance",
      duree: "5 x 1h",
      description: "Forfait avantageux pour un accompagnement régulier",
      inclus: [
        "5 séances individuelles",
        "Suivi personnalisé",
        "Supports audio inclus",
        "Économie de 30€"
      ],
      populaire: false,
      economie: "30€ d'économie"
    },
    {
      type: "Forfait 10 séances",
      prix: "600€",
      prixUnitaire: "60€/séance",
      duree: "10 x 1h",
      description: "Accompagnement complet pour ancrer durablement les techniques",
      inclus: [
        "10 séances individuelles",
        "Bilan intermédiaire",
        "Supports audio inclus",
        "Économie de 100€"
      ],
      populaire: false,
      economie: "100€ d'économie"
    }
  ]

  const tarifsCollectifs = [
    {
      type: "Séance de groupe",
      prix: "25€",
      duree: "1h15",
      description: "Séance collective dans un petit groupe (6 personnes max)",
      inclus: [
        "Groupe de 6 personnes max",
        "Thématiques variées",
        "Ambiance conviviale",
        "Tarif accessible"
      ]
    },
    {
      type: "Atelier thématique",
      prix: "45€",
      duree: "2h",
      description: "Ateliers spécialisés sur des thèmes précis",
      inclus: [
        "Thème spécialisé",
        "Techniques approfondies",
        "Support pédagogique",
        "Groupe de 8 personnes max"
      ]
    },
    {
      type: "Forfait 5 séances groupe",
      prix: "110€",
      prixUnitaire: "22€/séance",
      duree: "5 x 1h15",
      description: "Forfait avantageux pour les séances de groupe",
      inclus: [
        "5 séances de groupe",
        "Suivi du groupe",
        "Supports inclus",
        "Économie de 15€"
      ],
      economie: "15€ d'économie"
    }
  ]

  const modalitesPaiement = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      titre: "Carte bancaire",
      description: "Paiement sécurisé par carte bancaire"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      titre: "Espèces",
      description: "Paiement en espèces accepté"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      titre: "Chèque",
      description: "Paiement par chèque accepté"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      titre: "Paiement échelonné",
      description: "Possibilité de paiement en plusieurs fois pour les forfaits"
    }
  ]

  return (
    <>
      <Head>
        <title>Tarifs - Sophie Zen | Prix des séances de sophrologie</title>
        <meta name="description" content="Découvrez les tarifs de mes séances de sophrologie : individuelles, de groupe, ateliers et forfaits avantageux. Modalités de paiement flexibles." />
        <meta name="keywords" content="tarifs sophrologie, prix séances, forfaits, Paris, paiement" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Tarifs sophrologie"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-sage-800 bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Tarifs
          </h1>
          <p className="text-xl text-cream-100 max-w-2xl mx-auto">
            Des tarifs transparents et des forfaits avantageux pour votre bien-être
          </p>
        </div>
      </section>

      {/* Séances individuelles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-4">
              Séances individuelles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un accompagnement personnalisé avec des forfaits avantageux pour un suivi régulier.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tarifsIndividuels.map((tarif, index) => (
              <div key={index} className={`card relative ${tarif.populaire ? 'ring-2 ring-sage-500 transform scale-105' : ''}`}>
                {tarif.populaire && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-sage-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Le plus choisi
                    </span>
                  </div>
                )}
                {tarif.economie && (
                  <div className="absolute -top-3 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {tarif.economie}
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-sage-800 mb-2">
                    {tarif.type}
                  </h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-sage-600">{tarif.prix}</span>
                    {tarif.prixUnitaire && (
                      <span className="text-sm text-gray-500 block">{tarif.prixUnitaire}</span>
                    )}
                  </div>
                  <span className="text-sage-500 text-sm">{tarif.duree}</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  {tarif.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {tarif.inclus.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className={`w-full text-center py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                    tarif.populaire 
                      ? 'bg-sage-600 hover:bg-sage-700 text-white' 
                      : 'bg-sage-100 hover:bg-sage-200 text-sage-800'
                  }`}
                >
                  Réserver
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section inspiration tarifs */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Investissement dans votre bien-être"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-sage-800/75"></div>
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Investissement dans votre bien-être
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Un accompagnement de qualité à prix juste
            </h2>
            <p className="text-xl text-cream-100 mb-8 leading-relaxed">
              Chaque séance est un investissement dans votre équilibre et votre sérénité. 
              Des tarifs transparents pour un accompagnement professionnel et bienveillant.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-cream-100">de clients satisfaits recommandent mes services</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">6 mois</div>
                <div className="text-cream-100">de validité pour tous les forfaits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Séances collectives */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-4">
              Séances collectives
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partagez l'expérience de la sophrologie en groupe dans une ambiance conviviale et bienveillante.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tarifsCollectifs.map((tarif, index) => (
              <div key={index} className="card relative">
                {tarif.economie && (
                  <div className="absolute -top-3 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {tarif.economie}
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-sage-800 mb-2">
                    {tarif.type}
                  </h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-sage-600">{tarif.prix}</span>
                    {tarif.prixUnitaire && (
                      <span className="text-sm text-gray-500 block">{tarif.prixUnitaire}</span>
                    )}
                  </div>
                  <span className="text-sage-500 text-sm">{tarif.duree}</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  {tarif.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {tarif.inclus.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact" 
                  className="w-full text-center py-3 px-4 rounded-lg font-medium transition-colors duration-200 bg-sage-100 hover:bg-sage-200 text-sage-800"
                >
                  Réserver
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalités de paiement */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-4">
              Modalités de paiement
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Plusieurs options de paiement pour votre confort et votre facilité.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modalitesPaiement.map((modalite, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-600">
                  {modalite.icon}
                </div>
                <h3 className="text-lg font-semibold text-sage-800 mb-2">
                  {modalite.titre}
                </h3>
                <p className="text-gray-600 text-sm">
                  {modalite.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-4">
              Informations pratiques
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4 text-sage-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-sage-800 mb-3">
                Annulation
              </h3>
              <p className="text-gray-600 text-sm">
                Annulation gratuite jusqu'à 24h avant la séance. 
                En cas d'annulation tardive, la séance sera due.
              </p>
            </div>
            <div className="card">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4 text-sage-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-sage-800 mb-3">
                Validité des forfaits
              </h3>
              <p className="text-gray-600 text-sm">
                Les forfaits sont valables 6 mois à partir de la date d'achat. 
                Possibilité de prolongation sur demande.
              </p>
            </div>
            <div className="card">
              <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center mb-4 text-sage-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-sage-800 mb-3">
                Remboursement
              </h3>
              <p className="text-gray-600 text-sm">
                Les séances de sophrologie peuvent être prises en charge 
                par certaines mutuelles. Renseignez-vous auprès de votre organisme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tarifs spéciaux */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-4">
              Tarifs préférentiels
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des tarifs adaptés pour certaines situations particulières.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4 text-ocean-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-sage-800 mb-3">
                Étudiants
              </h3>
              <p className="text-gray-600 mb-4">
                Tarif préférentiel pour les étudiants sur présentation de la carte.
              </p>
              <span className="text-2xl font-bold text-ocean-600">55€</span>
              <span className="text-sm text-gray-500 block">au lieu de 70€</span>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4 text-ocean-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-sage-800 mb-3">
                Seniors (65+)
              </h3>
              <p className="text-gray-600 mb-4">
                Tarif adapté pour les personnes de plus de 65 ans.
              </p>
              <span className="text-2xl font-bold text-ocean-600">60€</span>
              <span className="text-sm text-gray-500 block">au lieu de 70€</span>
            </div>
            <div className="card text-center">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4 text-ocean-600">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-sage-800 mb-3">
                Demandeurs d'emploi
              </h3>
              <p className="text-gray-600 mb-4">
                Tarif solidaire sur présentation d'un justificatif.
              </p>
              <span className="text-2xl font-bold text-ocean-600">50€</span>
              <span className="text-sm text-gray-500 block">au lieu de 70€</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-sage-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Prêt(e) à commencer ?
          </h2>
          <p className="text-xl mb-8 text-sage-100 max-w-2xl mx-auto">
            Réservez votre première séance découverte et découvrez les bienfaits de la sophrologie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-sage-600 hover:bg-cream-50 font-medium py-4 px-8 rounded-lg transition-colors duration-200">
              Prendre rendez-vous
            </Link>
            <Link href="/seances" className="border-2 border-white text-white hover:bg-white hover:text-sage-600 font-medium py-4 px-8 rounded-lg transition-colors duration-200">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}