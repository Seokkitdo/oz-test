"use client";

import axios from 'axios';
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useFetchGames } from './hooks/useFetchGames';
import { IProtoMain } from './_types/CurrentlySellingList';

export default function Home() {


  const gameData = useFetchGames('G101|240022');

  console.log(gameData);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello
      {gameData && gameData?.liveId}

    </main>
  )
}
