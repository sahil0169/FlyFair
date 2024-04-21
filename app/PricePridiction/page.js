// pages/home.js
import React from 'react';
import Topmenu from '@/components/Topmenu';
import styles from './price.module.css';
import BookingForm from '@/components/BookingForm';

export default function PricePrediction() {
  return (
    <div>
      <img src='top.png' className="top" />
      <Topmenu />
      <img src="price.png" className="pp"></img>
    </div>
  );
}