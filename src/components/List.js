import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Book from './Book';

export default function List() {
  return (
    <section className="flex h-[70%] mx-16 px-4 flex-wrap gap-y-1 py-4 overflow-auto font-serif">
      <Book title="La vida secreta de los árboles" author="A. Zambra" percentage="70" chapter="CHAPTER 17" />
      <Book title="Conjunto Vacío" author="Verónica Gerber Bicecci" percentage="20" chapter="CHAPTER 5" />
      <Book title="Historia de la sexualidad 1" author="M. Foucault" percentage="40" chapter="CHAPTER 6" />
    </section>
  );
}
