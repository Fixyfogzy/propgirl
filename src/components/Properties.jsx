import PlaceholderImage from './PlaceholderImage';
import './Properties.css';

const PROPERTIES = [
 {
  id: 1,
  name: 'The Aurelian Villa',
  location: 'Banana Island, Lagos',
  price: '₦850,000,000',
  type: 'Detached Villa',
  beds: 6,
  baths: 7,
  size: '950 sqm',
  variant: 'facade',
  featured: true,
  image: '/images/villa.jpg.png',
},
    {
    id: 2,
    name: 'Ocean Terrace Residence',
    location: 'Lekki Phase 1, Lagos',
    price: '₦320,000,000',
    type: 'Waterfront Apartment',
    beds: 4,
    baths: 4,
    size: '420 sqm',
    variant: 'interior',
    image: '/images/ocean-terrace.jpg.png',
  },
  {
    id: 3,
    name: 'The Ikoyi Crest',
    location: 'Old Ikoyi, Lagos',
    price: '₦610,000,000',
    type: 'Contemporary Townhouse',
    beds: 5,
    baths: 6,
    size: '680 sqm',
    variant: 'facade',
    image: '/images/ikoyi-crest.jpg.png',
  },
  {
    id: 4,
    name: 'Palm Grove Penthouse',
    location: 'Victoria Island, Lagos',
    price: '₦480,000,000',
    type: 'Penthouse',
    beds: 3,
    baths: 3,
    size: '340 sqm',
    variant: 'interior',
    wide: true,
    image: '/images/penthouse.jpg.png',
  },
];

function PropertyCard({ property }) {
  return (
    <article
      className={`property-card ${property.featured ? 'is-featured' : ''} ${property.wide ? 'is-wide' : ''}`}
    >
      <div className="property-card__image">
       <PlaceholderImage
  variant={property.variant}
  tone="dark"
  label="Add property photography"
  src={property.image}
  alt={property.name}
/>
      </div>
      <div className="property-card__body">
        <div className="property-card__heading">
          <h3>{property.name}</h3>
          <span className="property-card__price">{property.price}</span>
        </div>
        <p className="property-card__location">{property.location}</p>
        <p className="property-card__meta">
          {property.type} &nbsp;&middot;&nbsp; {property.beds} Beds &nbsp;&middot;&nbsp; {property.baths} Baths &nbsp;&middot;&nbsp; {property.size}
        </p>
        <a href="#contact" className="property-card__link">View Property</a>
      </div>
    </article>
  );
}

export default function Properties() {
  return (
    <section id="properties" className="properties">
      <div className="section-inner">
        <div className="properties__header">
          <p className="properties__kicker">Featured Properties</p>
          <h2>A curated selection of Lagos&rsquo;s finest addresses</h2>
        </div>

        <div className="properties__grid">
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}