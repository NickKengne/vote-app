import React from 'react';

export default function CardElection() {
  const cards = [
    { id: 1, toColor1: 'to-blue-300', fromColor1: 'from-blue-600', toColor2: 'to-blue-600', fromColor2: 'from-blue-300' },
    { id: 2, toColor1: 'to-green-300', fromColor1: 'from-green-600', toColor2: 'to-green-600', fromColor2: 'from-green-300' },
    { id: 3, toColor1: 'to-orange-300', fromColor1: 'from-orange-600', toColor2: 'to-orange-600', fromColor2: 'from-orange-300' },

    // Ajoutez d'autres cartes ici
  ];

  return (
    <div className='w-full flex flex-row items-center gap-5 flex-wrap'>
      {cards.map(card => (
        <div key={card.id} className='max-w-[240px] bg-blue-700 h-[130px] w-[95%] relative rounded-[6px]'>
          <div className={`absolute inset-0 bg-gradient-to-br ${card.toColor1} ${card.fromColor1} skew-y-6 -rotate-2 rounded-[6px]`}></div>
          <div className={`absolute inset-0 bg-gradient-to-br ${card.toColor2} ${card.fromColor2} hover:bg-yellow-500 transition-all duration-1000 ease-in-out rotate-4 rounded-[6px] cursor-pointer`}>
            <p className='text-[17px] font-bold font-sans p-6'>10 Candidates</p>
            <p className='absolute bottom-2 right-2 text-[12px]'>wevote</p>
          </div>
        </div>
      ))}
    </div>
  );
}
