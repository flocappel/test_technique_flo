import React, { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Cliquez moi dessus</button>
      <p>Nombre de clics : {count}</p>
    </div>
  );
}

export default ClickCounter;
