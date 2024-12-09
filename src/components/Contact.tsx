const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-dark text-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Concrétisons vos projets
          </h2>
          <p className="text-light/80 mb-12">
            Contactez-nous pour donner vie à vos rêves d'intérieur
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-xl font-serif mb-4 text-gold">Contact</h3>
              <p className="mb-2">Email: contact@polyteleia-luxury.com</p>
              <p className="mb-2">Téléphone: +33 1 23 45 67 89</p>
              <p>Adresse: 75008 Paris, France</p>
            </div>
            
            <form className="text-left space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full p-3 bg-transparent border border-gold text-light placeholder-light/50"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-transparent border border-gold text-light placeholder-light/50"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-3 bg-transparent border border-gold text-light placeholder-light/50"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-3 bg-gold text-light hover:bg-gold/90 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;