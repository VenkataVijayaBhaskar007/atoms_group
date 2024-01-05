
import React, { useEffect } from 'react';

const YourComponent: React.FC = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://www.freevisitorcounters.com/auth.php?id=2b2d4ef2c4fadf62d04b842cbb7df8ebf0dfbfdc';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://www.freevisitorcounters.com/en/home/counter/1122139/t/2';
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      // Cleanup if necessary
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div>
      {/* Your other JSX goes here */}
    </div>
  );
};

export default YourComponent;
