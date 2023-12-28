import React from 'react';
import ProductCard from './ProductCard';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';

const MissionSection = () => (
  <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
    {/* ... existing content ... */}
    <ul role="list" className="mt-8 space-y-8 text-gray-600">
      <ProductCard
        title="Uncompromising Quality"
        description="We adhere to the highest standards of cleanliness..."
        icon={<CloudArrowUpIcon />}
      />
      <ProductCard
        title="Personalized Approach"
        description="We customize our services to fit your specific requirements."
        icon={<LockClosedIcon />}
      />
      <ProductCard
        title="Trustworthiness"
        description="We offer unbiased recommendations, ensuring the best cleaning solutions."
        icon={<ServerIcon />}
      />
    </ul>
    {/* ... existing content ... */}
  </div>
);

export default MissionSection;
