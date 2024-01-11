// HomeController.js
import React from 'react';
import { useHomeModel } from '../models/HomeModel';
import { HomeView } from '../views/HomeView';

export default function HomeController() {
  const {} = useHomeModel();

  return <HomeView />;
}
