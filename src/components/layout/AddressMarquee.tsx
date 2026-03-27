import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const AddressMarquee = () => {
  const items = (
    <>
      <span className="inline-flex items-center gap-2 text-sm font-medium">
        <MapPin className="w-4 h-4 flex-shrink-0" />
        Head Office: H.NO. 5-36/191, Prashanthi Nagar, Kukatpally, Hyderabad, T.G - 500072
      </span>
      <span className="inline-flex items-center gap-2 text-sm font-medium">
        <Phone className="w-4 h-4 flex-shrink-0" />
        7702949688, 7702949690
      </span>
      <span className="inline-flex items-center gap-2 text-sm font-medium">
        <MapPin className="w-4 h-4 flex-shrink-0" />
        Branch Office: 3-23, Iruvada Village, Near Water Tank, Sabbavaram M, Visakapatnam, A.P - 531035
      </span>
      <span className="inline-flex items-center gap-2 text-sm font-medium">
        <Mail className="w-4 h-4 flex-shrink-0" />
        sales@brutechengineers.com
      </span>
      <span className="inline-flex items-center gap-2 text-sm font-medium">
        <Globe className="w-4 h-4 flex-shrink-0" />
        www.brutechengineers.com
      </span>
    </>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex gap-16">
        {items}
        {items}
      </div>
    </div>
  );
};

export default AddressMarquee;
