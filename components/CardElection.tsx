
"use client"

import { API_BASE_URL, getAxios } from '@/config/axios';
import React, { useEffect } from 'react';
import CardSingle from './CardElectionSingle';

export default  function CardElection() {
  const cards = [
    { id: 1, toColor1: 'to-blue-300', fromColor1: 'from-blue-600', toColor2: 'to-blue-600', fromColor2: 'from-blue-300' },
    { id: 2, toColor1: 'to-green-300', fromColor1: 'from-green-600', toColor2: 'to-green-600', fromColor2: 'from-green-300' },
    { id: 3, toColor1: 'to-orange-300', fromColor1: 'from-orange-600', toColor2: 'to-orange-600', fromColor2: 'from-orange-300' },
    { id: 5, toColor1: 'to-pink-300', fromColor1: 'from-pink-600', toColor2: 'to-pink-600', fromColor2: 'from-pink-300' },
    { id: 4, toColor1: 'to-primary', fromColor1: 'from-primary', toColor2: 'to-pink-600', fromColor2: 'from-pink-300' },
    { id: 6, toColor1: 'to-red-300', fromColor1: 'from-orange-600', toColor2: 'to-orange-600', fromColor2: 'from-orange-300' },
    { id: 7, toColor1: 'to-gray-300', fromColor1: 'from-gray-600', toColor2: 'to-gray-600', fromColor2: 'from-gray-300' },
    // Ajoutez d'autres cartes ici
  ];


  const [election ,setElection] = React.useState<[]>([])

  useEffect(() => {
    getAxios("/election/all",[],{}).then(res => setElection(res))
  }, []);


  return (
    <div className='w-full flex flex-row justify-center items-center gap-5 flex-wrap'>
       <div className='w-full flex flex-row justify-between items-center gap-5 flex-wrap'>
      {election.map((election:any, index:number) => {
        const color = cards[index % cards.length]; // Cycle through the colors
          return <CardSingle key={election.id} election={election} color={color} />;
        
      })}
    </div>
    </div>
  );
}
