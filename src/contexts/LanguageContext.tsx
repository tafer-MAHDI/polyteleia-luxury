import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.language': 'Langue',
    
    // Hero
    'hero.title': "L'excellence dans l'architecture d'intérieur",
    'hero.subtitle': 'Créons ensemble votre espace de vie idéal',
    
    // About
    'about.title': "L'excellence dans chaque détail",
    'about.description': "POLYTELEIA LUXURY incarne l'excellence dans l'architecture d'intérieur haut de gamme. Notre approche unique d'architecture d'intérieur combine créativité, innovation et savoir-faire artisanal pour créer des espaces qui transcendent l'ordinaire.",
    'about.quote': "Notre mission est de transformer vos rêves en réalité tangible. Chaque projet que nous entreprenons est une opportunité de créer quelque chose d'extraordinaire, où l'artisanat traditionnel rencontre l'innovation moderne.",
    'about.ceo': 'CEO & Fondateur',
    
    // Projects
    'projects.title': 'Nos Réalisations',
    'projects.viewMore': 'Voir plus de projets',
    
    // Contact
    'contact.title': 'Concrétisons vos projets',
    'contact.subtitle': "Contactez notre cabinet d'architecture d'intérieur pour donner vie à vos rêves d'aménagement et de décoration",
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Envoyer',
    
    // Common
    'common.learnMore': 'En savoir plus',
    'common.discoverMore': 'Découvrir plus de modèles',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.language': 'Language',
    
    // Hero
    'hero.title': 'Excellence in Interior Architecture',
    'hero.subtitle': "Let's create your ideal living space together",
    
    // About
    'about.title': 'Excellence in Every Detail',
    'about.description': 'POLYTELEIA LUXURY embodies excellence in high-end interior architecture. Our unique approach combines creativity, innovation, and craftsmanship to create spaces that transcend the ordinary.',
    'about.quote': 'Our mission is to transform your dreams into tangible reality. Each project we undertake is an opportunity to create something extraordinary, where traditional craftsmanship meets modern innovation.',
    'about.ceo': 'CEO & Founder',
    
    // Projects
    'projects.title': 'Our Projects',
    'projects.viewMore': 'View more projects',
    
    // Contact
    'contact.title': "Let's Bring Your Projects to Life",
    'contact.subtitle': 'Contact our interior architecture firm to bring your design and decoration dreams to life',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send',
    
    // Common
    'common.learnMore': 'Learn more',
    'common.discoverMore': 'Discover more models',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.fr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};