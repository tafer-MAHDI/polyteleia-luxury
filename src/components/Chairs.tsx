import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const chairs = [
  {
    id: 1,
    name: "Fauteuil Élégance",
    price: "1,290€",
    description: "Fauteuil contemporain en velours, structure en bois massif",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Chaise Royale",
    price: "890€",
    description: "Chaise design en cuir véritable avec finitions dorées",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Bergère Louis XV",
    price: "2,490€",
    description: "Bergère style Louis XV, tapisserie fait main",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Fauteuil Modern Art",
    price: "1,790€",
    description: "Fauteuil design contemporain, tissu premium",
    image: "/placeholder.svg"
  }
];

const Chairs = () => {
  return (
    <section id="chairs" className="py-20 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif mb-4 text-dark text-center">
          Collection de Chaises
        </h2>
        <p className="text-gray text-center mb-12 max-w-2xl mx-auto">
          Découvrez notre collection exclusive de chaises et fauteuils de luxe, alliant confort exceptionnel et design raffiné.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chairs.map((chair) => (
            <Card key={chair.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <img
                  src={chair.image}
                  alt={chair.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2">{chair.name}</CardTitle>
                <CardDescription>{chair.description}</CardDescription>
                <p className="text-gold font-semibold mt-4">{chair.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gold hover:bg-gold/90 text-white">
                  Commander
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Chairs;