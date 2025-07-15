import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function MentionsLegales() {
  const informationsLegales = {
    raisonSociale: "Sophie Zen - Sophrologue",
    siret: "123 456 789 00012",
    adresse: "15 Avenue des Champs-Élysées, 75008 Paris",
    telephone: "01 42 56 78 90",
    email: "contact@sophie-zen.fr",
    directeurPublication: "Sophie Martin",
    hebergeur: {
      nom: "Vercel Inc.",
      adresse: "340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis",
      telephone: "+1 (951) 383-6898"
    }
  }

  const sections = [
    {
      titre: "Informations légales",
      contenu: [
        `Raison sociale : ${informationsLegales.raisonSociale}`,
        `SIRET : ${informationsLegales.siret}`,
        `Adresse : ${informationsLegales.adresse}`,
        `Téléphone : ${informationsLegales.telephone}`,
        `Email : ${informationsLegales.email}`,
        `Directeur de la publication : ${informationsLegales.directeurPublication}`
      ]
    },
    {
      titre: "Hébergement",
      contenu: [
        `Ce site est hébergé par ${informationsLegales.hebergeur.nom}`,
        `Adresse : ${informationsLegales.hebergeur.adresse}`,
        `Téléphone : ${informationsLegales.hebergeur.telephone}`
      ]
    },
    {
      titre: "Propriété intellectuelle",
      contenu: [
        "L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.",
        "La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.",
        "Les marques citées sur ce site sont déposées par les sociétés qui en sont propriétaires."
      ]
    },
    {
      titre: "Responsabilité",
      contenu: [
        "Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.",
        "Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème de la manière la plus précise possible.",
        "Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule responsabilité.",
        "L'utilisateur du site s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour."
      ]
    },
    {
      titre: "Liens hypertextes",
      contenu: [
        "Les liens hypertextes mis en place dans le cadre du présent site web en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Sophie Zen.",
        "Les utilisateurs du site sont tenus de respecter la législation en vigueur, ils sont seuls responsables de l'utilisation des informations et contenus présents sur ce site."
      ]
    },
    {
      titre: "Collecte et traitement des données personnelles",
      contenu: [
        "Conformément à la loi \"Informatique et Libertés\" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données personnelles.",
        "Les données personnelles collectées sur ce site sont uniquement destinées à l'usage interne de Sophie Zen et ne seront en aucun cas cédées ou vendues à des tiers.",
        "Les informations recueillies via le formulaire de contact sont enregistrées dans un fichier informatisé par Sophie Zen pour la gestion des demandes de contact et de rendez-vous.",
        "Vous pouvez exercer vos droits en nous contactant à l'adresse email : contact@sophie-zen.fr"
      ]
    },
    {
      titre: "Cookies",
      contenu: [
        "Ce site utilise des cookies techniques nécessaires au bon fonctionnement du site. Ces cookies ne collectent aucune donnée personnelle.",
        "Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter le bon fonctionnement du site.",
        "Aucun cookie de tracking ou de publicité n'est utilisé sur ce site."
      ]
    },
    {
      titre: "Droit applicable et juridiction",
      contenu: [
        "Tout litige en relation avec l'utilisation du site www.sophie-zen.fr est soumis au droit français.",
        "Il est fait attribution exclusive de juridiction aux tribunaux compétents de Paris."
      ]
    },
    {
      titre: "Déontologie professionnelle",
      contenu: [
        "Sophie Martin, sophrologue, exerce dans le respect du code de déontologie de la Chambre Syndicale de la Sophrologie.",
        "La sophrologie ne se substitue en aucun cas à un traitement médical. En cas de maladie, consultez d'abord un médecin.",
        "Le secret professionnel s'applique à toutes les séances de sophrologie."
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>Mentions légales - Sophie Zen | Informations légales et RGPD</title>
        <meta name="description" content="Mentions légales du site Sophie Zen, sophrologue. Informations sur la protection des données, RGPD, propriété intellectuelle et conditions d'utilisation." />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-sage-50 py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-sage-800 mb-4">
              Mentions légales
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Informations légales, protection des données et conditions d'utilisation du site
            </p>
          </div>
        </div>
      </section>

      {/* Contenu des mentions légales */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Navigation rapide */}
            <div className="card mb-12">
              <h2 className="text-xl font-semibold text-sage-800 mb-4">
                Navigation rapide
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#section-${index}`}
                    className="text-sage-600 hover:text-sage-700 hover:underline transition-colors duration-200 text-sm"
                  >
                    {section.titre}
                  </a>
                ))}
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} id={`section-${index}`} className="scroll-mt-24">
                  <h2 className="text-2xl font-display font-bold text-sage-800 mb-6 border-b border-sage-200 pb-2">
                    {section.titre}
                  </h2>
                  <div className="space-y-4">
                    {section.contenu.map((paragraphe, pIndex) => (
                      <p key={pIndex} className="text-gray-600 leading-relaxed">
                        {paragraphe}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Date de mise à jour */}
            <div className="mt-16 pt-8 border-t border-sage-200">
              <p className="text-sm text-gray-500 text-center">
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>

            {/* Contact pour questions légales */}
            <div className="mt-12">
              <div className="card bg-sage-50">
                <div className="text-center">
                  <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4 text-sage-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-sage-800 mb-4">
                    Questions sur les mentions légales ?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Pour toute question concernant ces mentions légales ou l'utilisation de vos données personnelles, 
                    n'hésitez pas à me contacter.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact" className="btn-primary text-center">
                      Page de contact
                    </Link>
                    <a 
                      href={`mailto:${informationsLegales.email}`}
                      className="btn-secondary text-center"
                    >
                      Envoyer un email
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Retour à l'accueil */}
            <div className="mt-12 text-center">
              <Link 
                href="/"
                className="inline-flex items-center text-sage-600 hover:text-sage-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}