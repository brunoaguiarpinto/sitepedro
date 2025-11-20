// Fix: Import React to resolve usage of React.ReactNode
import React from 'react';

export interface CarFeature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface ContactInfo {
    address: string;
    phone: string[];
    email: string;
    city: string;
}

export interface Vehicle {
    id: string | number;
    make?: string;       // Marca (ex: BMW)
    model?: string;      // Modelo (ex: X6)
    version?: string;    // Versão (ex: Competition)
    name?: string;       // Fallback caso usem um campo 'nome' genérico
    year_manufacture?: string | number; // Ano Fab
    year_model?: string | number;       // Ano Mod
    price?: number | string;
    photos?: string[] | { url: string }[] | string | any; // Flexível para lidar com retorno do Supabase
    featured?: boolean;
    mileage?: string | number;
    fuel?: string;
    transmission?: string;
    // Allow flexible columns from DB (e.g. Portuguese names like 'marca', 'preco')
    [key: string]: any;
}
