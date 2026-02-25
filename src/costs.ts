export type EngineType = 'inboard' | 'outboard';
export type LocationKey = 'miami' | 'other_us' | 'private_dock';

export const ENGINE_SERVICE_RATES: Record<EngineType, number> = {
  inboard: 3500,
  outboard: 1500,
};

export const DOCKAGE_RATES: Record<LocationKey, number> = {
  miami: 80,
  other_us: 50,
  private_dock: 0,
};

export const MAX_VESSEL_LENGTH_FT = 600;

export const CREW_RATES = {
  captain: 110_000,
  stewardess: 55_000,
  chef: 85_000,
};

export type CrewKey = keyof typeof CREW_RATES;

export interface FormState {
  vesselName: string;
  vesselPrice: number;
  vesselLength: number;
  engineType: EngineType;
  engineCount: number;
  hasGenerator: boolean;
  location: LocationKey;
  bottomPaintRate: number;
  insuranceRate: number; // percent
  crew: Record<CrewKey, boolean>;
}

export interface CostBreakdown {
  bottom_paint: number;
  engine_service: number;
  generator_service?: number;
  insurance: number;
  dockage?: number;
  captain?: number;
  stewardess?: number;
  chef?: number;
}

export function buildDefaultForm(): FormState {
  return {
    vesselName: '',
    vesselPrice: 0,
    vesselLength: 0,
    engineType: 'inboard',
    engineCount: 1,
    hasGenerator: true,
    location: 'miami',
    bottomPaintRate: 110,
    insuranceRate: 2,
    crew: {
      captain: false,
      stewardess: false,
      chef: false,
    },
  };
}

export function computeBreakdown(form: FormState): {
  breakdown: CostBreakdown;
  total: number;
} {
  const breakdown: CostBreakdown = {
    bottom_paint: Math.round(form.vesselLength * form.bottomPaintRate),
    engine_service:
      (ENGINE_SERVICE_RATES[form.engineType] || 0) * (form.engineCount || 0),
    insurance: Math.round((form.vesselPrice || 0) * (form.insuranceRate / 100)),
  };

  if (form.hasGenerator) {
    breakdown.generator_service = 1000;
  }

  const dockRate = DOCKAGE_RATES[form.location] ?? 0;
  if (dockRate > 0) {
    breakdown.dockage = Math.round(form.vesselLength * dockRate * 12);
  }

  (Object.keys(form.crew) as CrewKey[]).forEach((role) => {
    if (form.crew[role]) breakdown[role] = CREW_RATES[role];
  });

  const total = Object.values(breakdown).reduce((sum, value) => sum + value, 0);

  return { breakdown, total };
}
