"use client";

import React, { createContext, useContext, useState } from "react";

interface QuoteModalContextType {
  isOpen: boolean;
  openModal: (productOrPackage?: string) => void;
  closeModal: () => void;
  selectedProduct?: string;
}

const QuoteModalContext = createContext<QuoteModalContextType>({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  selectedProduct: undefined,
});

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

  const openModal = (productOrPackage?: string) => {
    setSelectedProduct(productOrPackage);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProduct(undefined);
  };

  return (
    <QuoteModalContext.Provider value={{ isOpen, openModal, closeModal, selectedProduct }}>
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}
