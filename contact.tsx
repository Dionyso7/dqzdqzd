import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  const coordonnees = {
    adresse: "15 Avenue des Champs-Élysées",
    ville: "75008 Paris",
    telephone: "01 42 56 78 90",
    email: "contact@sophie-zen.fr",
    horaires: {
      "Lundi - Vendredi": "9h00 - 19h00",
      "Samedi": "9h00 - 17h00",
      "Dimanche": "Fermé"
    }
  }

  const moyensTransport = [
    {
      type: "Métro",
      lignes: "Lignes 1, 9, 13",
      station: "Champs-Élysées - Clemenceau",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      type: "Bus",
      lignes: "Lignes 28, 42, 72, 73",
      station: "Champs-Élysées",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m-4-5v9" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
        </svg>
      )
    },
    {
      type: "Parking",
      lignes: "Parking Champs-Élysées",
      station: "À 2 minutes à pied",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ]

  const faq = [
    {
      question: "Comment prendre rendez-vous ?",
      reponse: "Vous pouvez me contacter par téléphone, email ou via le formulaire ci-dessous. Je vous rappellerai dans les plus brefs délais pour convenir d'un créneau."
    },
    {
      question: "Quel est le délai pour obtenir un rendez-vous ?",
      reponse: "En général, je peux vous proposer un rendez-vous dans la semaine qui suit votre demande. Pour les urgences, n'hésitez pas à me contacter directement."
    },
    {
      question: "Que faire en cas d'empêchement ?",
      reponse: "Merci de me prévenir au moins 24h à l'avance en cas d'annulation. Cela me permet de proposer le créneau à une autre personne."
    },
    {
      question: "Le cabinet est-il accessible aux personnes à mobilité réduite ?",
      reponse: "Oui, le cabinet est situé au rez-de-chaussée et dispose d'un accès adapté aux personnes à mobilité réduite."
    }
  ]

  return (
    <>
      <Head>
        <title>Contact - Sophie Zen | Prendre rendez-vous avec votre sophrologue</title>
        <meta name="description" content="Contactez Sophie Zen, sophrologue en région parisienne. Prenez rendez-vous par téléphone, email ou via notre formulaire de contact." />
        <meta name="keywords" content="contact sophrologue, rendez-vous, Paris, téléphone, email" />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Contact Sophie Zen"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-sage-800 bg-opacity-60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Contact
          </h1>
          <p className="text-xl text-cream-100 max-w-2xl mx-auto">
            Prenez rendez-vous pour commencer votre parcours vers le bien-être
          </p>
        </div>
      </section>

      {/* Contact principal */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div>
              <h2 className="text-3xl font-display font-bold text-sage-800 mb-6">
                Envoyez-moi un message
              </h2>
              <p className="text-gray-600 mb-8">
                Utilisez le formulaire ci-dessous pour me faire part de votre demande. 
                Je vous répondrai dans les plus brefs délais.
              </p>
              <ContactForm />
            </div>

            {/* Informations de contact */}
            <div>
              <h2 className="text-3xl font-display font-bold text-sage-800 mb-6">
                Mes coordonnées
              </h2>
              <div className="space-y-6">
                {/* Adresse */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0 text-sage-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      {coordonnees.adresse}<br />
                      {coordonnees.ville}
                    </p>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0 text-sage-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-1">Téléphone</h3>
                    <a href={`tel:${coordonnees.telephone}`} className="text-sage-600 hover:text-sage-700 transition-colors">
                      {coordonnees.telephone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0 text-sage-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-1">Email</h3>
                    <a href={`mailto:${coordonnees.email}`} className="text-sage-600 hover:text-sage-700 transition-colors">
                      {coordonnees.email}
                    </a>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0 text-sage-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-800 mb-2">Horaires d'ouverture</h3>
                    <div className="space-y-1">
                      {Object.entries(coordonnees.horaires).map(([jour, horaire]) => (
                        <div key={jour} className="flex justify-between text-gray-600">
                          <span className="font-medium">{jour}</span>
                          <span>{horaire}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Boutons d'action rapide */}
              <div className="mt-8 space-y-4">
                <a 
                  href={`tel:${coordonnees.telephone}`}
                  className="w-full btn-primary text-center flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Appeler maintenant
                </a>
                <a 
                  href={`mailto:${coordonnees.email}`}
                  className="w-full btn-secondary text-center flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Envoyer un email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte et accès */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-sage-800 mb-4">
              Localisation et accès
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Le cabinet est facilement accessible en transports en commun et dispose d'un parking à proximité.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Carte Google Maps */}
            <div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-96 bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-lg font-medium">Carte Google Maps</p>
                    <p className="text-sm">{coordonnees.adresse}, {coordonnees.ville}</p>
                  </div>
                </div>
                <div className="p-4">
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(coordonnees.adresse + ', ' + coordonnees.ville)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary text-center flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ouvrir dans Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Moyens de transport */}
            <div>
              <h3 className="text-2xl font-display font-bold text-sage-800 mb-6">
                Comment venir ?
              </h3>
              <div className="space-y-6">
                {moyensTransport.map((transport, index) => (
                  <div key={index} className="card">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center flex-shrink-0 text-sage-600">
                        {transport.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sage-800 mb-1">{transport.type}</h4>
                        <p className="text-gray-600 mb-1">{transport.lignes}</p>
                        <p className="text-sm text-gray-500">{transport.station}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes concernant les rendez-vous.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-sage-800 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600">
                  {item.reponse}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgences */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="card max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-sage-800 mb-4">
              En cas d'urgence psychologique
            </h3>
            <p className="text-gray-600 mb-6">
              Si vous traversez une crise ou ressentez des pensées suicidaires, 
              contactez immédiatement les services d'urgence ou une ligne d'écoute spécialisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:3114" className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                3114 - Numéro national de prévention du suicide
              </a>
              <a href="tel:0140093515" className="bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                SOS Amitié - 01 40 09 35 15
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}