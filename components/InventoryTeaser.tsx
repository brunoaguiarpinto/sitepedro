import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Vehicle } from '../types';
import { Loader2, Tag, Calendar, Gauge, Fuel, ArrowRight, Search, Filter, X } from 'lucide-react';

const STORAGE_URL = "https://xiapmvxuksphlpeiljvr.supabase.co/storage/v1/object/public/vehicle-photos/";
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&w=800&q=80';

const InventoryTeaser: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const normalizePhotoInput = (input: any): string[] => {
    if (!input) return [];

    if (Array.isArray(input)) {
      return input
        .map((photo) => {
          if (typeof photo === 'string') return photo;
          if (photo && typeof photo === 'object') return photo.url || photo.key;
          return null;
        })
        .filter((value): value is string => Boolean(value));
    }

    if (typeof input === 'string') {
      try {
        const parsed = JSON.parse(input);
        if (Array.isArray(parsed)) return normalizePhotoInput(parsed);
      } catch {
        return [input];
      }
    }

    return [];
  };

  const normalizeVehicle = (data: any): Vehicle => {
    const relationPhotos = Array.isArray(data.vehicle_photos)
      ? data.vehicle_photos
          .map((photo: { file_url?: string }) => photo?.file_url)
          .filter(Boolean)
      : [];

    const fallbackPhotos = normalizePhotoInput(
      data.photos ||
      data.fotos ||
      data.imagens ||
      data.gallery ||
      []
    );

    const normalizedPhotos =
      relationPhotos.length > 0 ? relationPhotos : fallbackPhotos;

    return {
      id: data.id,
      make: data.make || data.marca || data.fabricante || 'Lord Motors',
      model: data.model || data.modelo || data.nome || 'Veículo Exclusivo',
      version: data.version || data.versao || data.detalhes || '',
      year_manufacture: data.year_manufacture || data.ano_fabricacao || data.ano || data.year || new Date().getFullYear(),
      year_model: data.year_model || data.ano_modelo || data.modelo_ano,
      price: data.price || data.preco || data.valor || data.price_brl || 0,
      mileage: data.mileage || data.km || data.quilometragem,
      fuel: data.fuel || data.combustivel,
      transmission: data.transmission || data.cambio,
      photos: normalizedPhotos,
      featured: data.featured || data.destaque || false,
    };
  };

  const getImageUrl = (car: Vehicle): string => {
    const photos = normalizePhotoInput(car?.photos);
    const photoPath = photos[0];

    if (!photoPath) return DEFAULT_IMAGE;
    if (photoPath.startsWith('http')) return photoPath;
    const cleanPath = photoPath.replace(/^\/+/, '');
    return `${STORAGE_URL}${cleanPath}`;
  };

  useEffect(() => {
    const fetchVehicles = async () => {
      if (!supabase) {
        console.warn(
          'Supabase não configurado. Adicione as variáveis de ambiente para carregar os veículos.'
        );
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('vehicles')
          .select('*, vehicle_photos(file_url)')
          .eq('status', 'own')
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (data) {
          const normalizedData = data.map(normalizeVehicle);
          setVehicles(normalizedData);
        }
      } catch (err) {
        console.error("Erro ao buscar veículos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  const formatPrice = (value: number | string | undefined) => {
    if (!value) return "Sob Consulta";
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(numValue);
  };

  const filteredVehicles = vehicles.filter(car => {
    const search = searchTerm.toLowerCase();
    return (
      car.make?.toLowerCase().includes(search) ||
      car.model?.toLowerCase().includes(search) ||
      car.version?.toLowerCase().includes(search)
    );
  });

  const displayedVehicles = filteredVehicles.slice(0, 9);

  const closeGallery = () => setIsGalleryOpen(false);

  const getGalleryPhotos = (car: Vehicle): string[] => {
    const photos = normalizePhotoInput(car?.photos);
    if (!photos.length) return [DEFAULT_IMAGE];
    return photos.map((photo) => {
      if (photo.startsWith('http')) return photo;
      return `${STORAGE_URL}${photo.replace(/^\/+/, '')}`;
    });
  };

  return (
    <section id="inventory" className="bg-gray-100 pb-24 relative">
      {/* 
         Floating Search Bar 
         Negative margin pulls it up over the Hero. 
         z-20 ensures it sits on top.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-24 md:-mt-20 mb-16">
        <div className="bg-white rounded shadow-2xl p-6 md:p-8 border-b-4 border-gold-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                
                {/* Title Section */}
                <div className="lg:col-span-3 pb-2 border-b lg:border-b-0 lg:border-r border-gray-100">
                    <h3 className="text-navy-950 font-serif font-bold text-2xl leading-none">
                        Encontre <br/>
                        <span className="text-gold-600">Seu Carro</span>
                    </h3>
                </div>

                {/* Search Input */}
                <div className="lg:col-span-6">
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Busca Rápida
                    </label>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input 
                            type="text" 
                            placeholder="Digite a marca ou modelo..." 
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded text-navy-950 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Button */}
                <div className="lg:col-span-3">
                    <button className="w-full bg-navy-950 text-white h-[58px] font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 flex items-center justify-center gap-2 rounded shadow-lg">
                        <Filter className="w-4 h-4" />
                        Buscar
                    </button>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy-950 mb-4">
            Estoque Disponível
          </h2>
          <div className="h-1 w-24 bg-gold-500 mx-auto mb-4"></div>
          <p className="text-gray-500 uppercase tracking-widest text-sm">
            {filteredVehicles.length} oportunidades em compra, venda e consignação
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center h-64 gap-4">
            <Loader2 className="w-12 h-12 text-gold-500 animate-spin" />
            <p className="text-gray-400 text-sm uppercase tracking-widest">Carregando Estoque...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedVehicles.map((car, index) => (
              <div key={car.id || index} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100">
                
                {/* Image Area */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-200">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={getImageUrl(car)} 
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute top-0 left-0 bg-gold-500 text-navy-950 text-xs font-bold px-4 py-2 z-20 uppercase tracking-widest">
                    {car.make}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-grow flex flex-col relative">
                  {/* Price Tag Floating */}
                  <div className="absolute -top-5 right-6 bg-navy-950 text-white px-4 py-2 rounded shadow-lg z-20">
                    <p className="font-bold text-lg">{formatPrice(car.price)}</p>
                  </div>

                  <div className="mt-2 mb-6">
                    <h3 className="text-xl font-bold text-navy-950 truncate group-hover:text-gold-600 transition-colors">{car.model}</h3>
                    <p className="text-sm text-gray-500 truncate uppercase tracking-wider">{car.version}</p>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                        <Calendar className="w-4 h-4 text-gold-500" />
                        <span className="text-xs font-semibold text-gray-600">{car.year_manufacture}/{car.year_model || car.year_manufacture}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                        <Gauge className="w-4 h-4 text-gold-500" />
                        <span className="text-xs font-semibold text-gray-600">{car.mileage ? `${car.mileage} km` : '0 km'}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                        <Fuel className="w-4 h-4 text-gold-500" />
                        <span className="text-xs font-semibold text-gray-600 truncate">{car.fuel || 'Flex'}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded">
                        <Tag className="w-4 h-4 text-gold-500" />
                        <span className="text-xs font-semibold text-gray-600 truncate">{car.transmission || 'Auto'}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex flex-col gap-3">
                    <a 
                        href={`https://wa.me/556791949194?text=Olá, tenho interesse no ${car.make} ${car.model}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-navy-950 font-bold uppercase tracking-widest text-xs hover:text-gold-600 transition-colors"
                    >
                        Falar no WhatsApp <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-16 text-center flex flex-col sm:flex-row gap-4 justify-center">
             <button
               className="inline-flex items-center justify-center gap-2 bg-navy-950 text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 rounded shadow-sm"
               onClick={() => setIsGalleryOpen(true)}
             >
                Ver Galeria <ArrowRight className="w-4 h-4" />
             </button>
             <a href="#contact" className="inline-block bg-white border border-gray-200 text-navy-950 px-10 py-4 font-bold uppercase tracking-widest hover:bg-navy-950 hover:text-white transition-all duration-300 rounded shadow-sm">
                Fale com nossa equipe
             </a>
        </div>

      </div>

      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4 py-8">
          <div className="bg-white rounded shadow-2xl w-full max-w-6xl max-h-full overflow-hidden flex flex-col">
            <div className="flex items-start justify-between border-b border-gray-100 px-6 py-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  Galeria Completa
                </p>
                <h3 className="text-2xl font-serif font-bold text-navy-950">
                  Carros disponíveis
                </h3>
                <p className="text-sm text-gray-500">
                  Explore todas as fotos e detalhes dos veículos cadastrados.
                </p>
              </div>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors"
                onClick={closeGallery}
                aria-label="Fechar galeria"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="space-y-8">
                {vehicles.map((car) => (
                  <div key={car.id} className="border border-gray-100 rounded-lg p-4 shadow-sm">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                          {car.make}
                        </p>
                        <h4 className="text-xl font-serif font-bold text-navy-950">
                          {car.model}
                        </h4>
                        <p className="text-sm text-gray-500">{car.version}</p>
                      </div>
                      <div className="flex flex-wrap gap-3 text-xs uppercase tracking-wider text-gray-600">
                        <span>{car.year_manufacture}/{car.year_model || car.year_manufacture}</span>
                        {car.mileage && <span>{car.mileage} km</span>}
                        {car.fuel && <span>{car.fuel}</span>}
                        {car.transmission && <span>{car.transmission}</span>}
                        <span className="font-bold text-navy-950">{formatPrice(car.price)}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {getGalleryPhotos(car).map((photo, index) => (
                        <div
                          key={`${car.id}-gallery-${index}`}
                          className="relative overflow-hidden rounded border border-gray-100 bg-gray-50"
                        >
                          <img
                            src={photo}
                            alt={`${car.make} ${car.model} foto ${index + 1}`}
                            className="w-full h-48 object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InventoryTeaser;