import React, { useMemo, useRef, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  InputAdornment,
  MenuItem,
  Slider,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import KeyboardArrowDownRounded from '@mui/icons-material/KeyboardArrowDownRounded';
import {
  CREW_RATES,
  ENGINE_SERVICE_RATES,
  EngineType,
  FormState,
  LocationKey,
  MAX_VESSEL_LENGTH_FT,
  buildDefaultForm,
  computeBreakdown,
} from './costs';
import HeroTitle from './components/HeroTitle';

const engineCounts = Array.from({ length: 12 }, (_, i) => i + 1);
const engineCountMap: Record<EngineType, number[]> = {
  inboard: engineCounts,
  outboard: engineCounts,
};

const colors = {
  bg: '#f9f9f9',
  bg2: '#f9fafb',
  textPrimary: '#2f2f39',
  textSecondary: '#4e4e57',
  textTertiary: '#7a7a81',
  textBody: '#3c3c46',
  border: 'rgba(112,128,144,0.2)',
  borderSoft: '#f1f1f2',
  brand: '#4f10a9',
  crewBg: '#f6f6f7',
};

const labelSx = {
  fontFamily: 'var(--font-figtree), sans-serif',
  fontWeight: 500,
  fontSize: 16,
  lineHeight: '24px',
  color: colors.textPrimary,
};

const fieldSx = {
  '& .MuiOutlinedInput-root': {
    minHeight: 44,
    borderRadius: '2px',
    bgcolor: '#fff',
  },
  '& .MuiInputBase-input': {
    color: '#22222d',
  },
  '& .MuiInputBase-input::placeholder': {
    color: 'rgba(34,34,45,0.6)',
    opacity: 1,
  },
  '& .MuiFormHelperText-root': {
    mt: 1,
    mx: 0,
    display: 'flex',
    alignItems: 'center',
    gap: 0.75,
    fontFamily: 'var(--font-figtree), sans-serif',
    fontWeight: 500,
    fontSize: 13,
    lineHeight: '20px',
    color: '#22222d',
  },
};

const purchasePriceFieldSx = {
  ...fieldSx,
  '& .MuiOutlinedInput-root': {
    ...fieldSx['& .MuiOutlinedInput-root'],
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#c4c4c4',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#c4c4c4',
    },
  },
  '& .MuiInputAdornment-positionStart': {
    marginRight: '8px !important',
  },
  '& .MuiInputBase-input': {
    ...fieldSx['& .MuiInputBase-input'],
    fontFamily: 'var(--font-figtree), sans-serif',
    fontSize: 16,
    lineHeight: '24px',
    letterSpacing: 0,
  },
  '& .MuiInputBase-input.MuiInputBase-inputAdornedStart': {
    paddingLeft: 0,
  },
};

const sectionCardSx = {
  borderRadius: '8px',
  boxShadow: '0 4px 32px rgba(140,140,140,0.24)',
};

const breakdownCardSx = {
  borderRadius: '12px',
  boxShadow: '0 4px 32px rgba(140,140,140,0.24)',
};

const createSliderSx = (sliderHandleSrc: string) => ({
  p: 0,
  color: '#22222d',
  '& .MuiSlider-rail': {
    height: 21,
    borderRadius: 370,
    bgcolor: 'rgba(34,34,45,0.04)',
    opacity: 1,
  },
  '& .MuiSlider-track': {
    border: 0,
    height: 18,
    borderRadius: 100,
    bgcolor: '#22222d',
  },
  '& .MuiSlider-thumb': {
    width: 32,
    height: 32,
    borderRadius: 100,
    bgcolor: '#fff',
    boxShadow: 'none',
    '&:before': { display: 'none' },
    '&:after': {
      content: '""',
      width: 20,
      height: 20,
      display: 'block',
      backgroundImage: `url(${sliderHandleSrc})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
    },
    '&:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: '0 4px 32px rgba(140,140,140,0.24)',
    },
  },
});

const switchSx = {
  // Keep custom sizing stable against design-system mobile MuiSwitch overrides.
  '&&': {
    width: 36,
    height: 20,
    p: 0,
  },
  flexShrink: 0,
  '& .MuiSwitch-switchBase': {
    p: 0,
    m: '2px',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: colors.brand,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 16,
    height: 16,
    backgroundColor: '#fff',
    boxSizing: 'border-box',
    boxShadow: 'none',
  },
  '& .MuiSwitch-track': {
    borderRadius: 16,
    backgroundColor: 'rgba(112,128,144,0.6)',
    opacity: 1,
  },
  '@media (max-width: 640px)': {
    '&&': {
      width: 36,
      height: 20,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(16px)',
    },
    '& .MuiSwitch-thumb': {
      width: 16,
      height: 16,
    },
  },
};

const money = (value: number) => `$${new Intl.NumberFormat('en-US').format(Math.round(value))}`;

function App() {
  const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const assetSrc = (path: string) => `${assetBasePath}${path}`;
  const sliderSx = createSliderSx(assetSrc('/slider-handle-inner.svg'));
  const [form, setForm] = useState<FormState>(buildDefaultForm);
  const [isBreakdownUnlocked, setIsBreakdownUnlocked] = useState(false);
  const [showRequiredErrors, setShowRequiredErrors] = useState(false);
  const [unlockEmail, setUnlockEmail] = useState('');
  const [unlockEmailError, setUnlockEmailError] = useState('');
  const purchasePriceFieldRef = useRef<HTMLDivElement | null>(null);
  const vesselLengthFieldRef = useRef<HTMLDivElement | null>(null);
  const engineTypeFieldRef = useRef<HTMLDivElement | null>(null);
  const engineCountFieldRef = useRef<HTMLDivElement | null>(null);
  const locationDockageFieldRef = useRef<HTMLDivElement | null>(null);
  const { breakdown, total } = useMemo(() => computeBreakdown(form), [form]);

  const handleChange = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleCrewToggle = (role: keyof typeof CREW_RATES) => {
    setForm((prev) => ({
      ...prev,
      crew: { ...prev.crew, [role]: !prev.crew[role] },
    }));
  };

  const handleCrewChecked = (role: keyof typeof CREW_RATES, checked: boolean) => {
    setForm((prev) => ({
      ...prev,
      crew: { ...prev.crew, [role]: checked },
    }));
  };

  const minEngineCount = engineCountMap[form.engineType][0];
  const maxEngineCount = engineCountMap[form.engineType][engineCountMap[form.engineType].length - 1];
  const canDecreaseEngineCount = form.engineCount > minEngineCount;
  const canIncreaseEngineCount = form.engineCount < maxEngineCount;

  const locationInfoText =
    form.location === 'miami'
      ? 'Miami market rates are typically the highest.'
      : form.location === 'other_us'
        ? 'Typical U.S. market average selected.'
        : 'Private dock selected. Dockage is excluded.';
  const vesselLengthOutOfRange = form.vesselLength > MAX_VESSEL_LENGTH_FT;
  const requiredErrors = {
    vesselPrice: form.vesselPrice <= 0,
    vesselLength: form.vesselLength <= 0 || vesselLengthOutOfRange,
    engineType: form.engineType !== 'inboard' && form.engineType !== 'outboard',
    engineCount: !Number.isFinite(form.engineCount) || form.engineCount < 1,
    location: form.location !== 'miami' && form.location !== 'other_us' && form.location !== 'private_dock',
  };
  const hasRequiredErrors = Object.values(requiredErrors).some(Boolean);

  const breakdownRows = [
    { label: 'Bottom Paint', value: breakdown.bottom_paint ?? 0 },
    { label: 'Engine Service', value: breakdown.engine_service ?? 0 },
    { label: 'Generator Service', value: breakdown.generator_service ?? 0 },
    { label: 'Insurance', value: breakdown.insurance ?? 0 },
    { label: 'Dockage', value: breakdown.dockage ?? 0 },
  ];

  const totalDisplay = isBreakdownUnlocked ? money(total) : '$XXX,XXX';
  const monthlyDisplay = isBreakdownUnlocked ? `Monthly: ${money(total / 12)}` : 'Monthly: $...';

  const scrollToField = (ref: React.RefObject<HTMLDivElement>) => {
    const field = ref.current;
    if (!field) return;
    field.scrollIntoView({ behavior: 'smooth', block: 'center' });
    window.setTimeout(() => {
      const focusable = field.querySelector(
        'input, [role="combobox"], button, [tabindex]:not([tabindex="-1"])',
      ) as HTMLElement | null;
      focusable?.focus();
    }, 250);
  };

  const focusFirstMissingRequiredField = () => {
    if (requiredErrors.vesselPrice) return scrollToField(purchasePriceFieldRef);
    if (requiredErrors.vesselLength) return scrollToField(vesselLengthFieldRef);
    if (requiredErrors.engineType) return scrollToField(engineTypeFieldRef);
    if (requiredErrors.engineCount) return scrollToField(engineCountFieldRef);
    if (requiredErrors.location) return scrollToField(locationDockageFieldRef);
  };

  const handleUnlockBreakdown = () => {
    setShowRequiredErrors(true);
    if (hasRequiredErrors) {
      setUnlockEmailError('');
      focusFirstMissingRequiredField();
      return;
    }
    const trimmedEmail = unlockEmail.trim();
    if (!trimmedEmail) {
      setUnlockEmailError('Enter your email to unlock the full breakdown');
      return;
    }
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
    if (!isValidEmail) {
      setUnlockEmailError('Enter a valid email address.');
      return;
    }
    setUnlockEmailError('');
    setIsBreakdownUnlocked(true);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(217deg, ${colors.bg} 27.937%, ${colors.bg2} 12.669%)`,
      }}
    >
      <Box sx={{ maxWidth: 1440, mx: 'auto', pt: { xs: 3, sm: 4, md: 5 }, pb: { xs: 5, sm: 6, md: 8 }, px: { xs: 2, sm: 3, md: 0 } }}>
        <Box
          component="img"
          src={assetSrc('/Logo.svg')}
          alt="YachtWay"
          sx={{
            width: { xs: 132, sm: '169.505px' },
            height: 'auto',
            display: 'block',
            mx: 'auto',
            mb: { xs: 3, sm: 3.5 },
          }}
        />

        <Box sx={{ width: '100%', maxWidth: 778, mx: 'auto', textAlign: 'center' }}>
          <HeroTitle />
        </Box>

        <Box sx={{ borderTop: '1px solid #d9d9dd', mt: { xs: 3, sm: 4 } }} />

        <Stack sx={{ width: '100%', maxWidth: 600, mx: 'auto', mt: { xs: 3, sm: 4.25 } }} spacing={{ xs: 2.5, sm: 3 }}>
          <Card sx={sectionCardSx}>
            <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 4 } }}>
              <Stack spacing={0}>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 2, md: 2.5 }}
                  sx={{ mb: { xs: 2, md: 2.5 }, pb: { md: 0.5 } }}
                >
                  <Box ref={purchasePriceFieldRef} sx={{ flex: 1 }}>
                    <Typography sx={{ ...labelSx, mb: 2 }}>Purchase Price *</Typography>
                    <TextField
                      fullWidth
                      required
                      value={form.vesselPrice ? new Intl.NumberFormat('en-US').format(form.vesselPrice) : ''}
                      onChange={(e) => {
                        const next = Number((e.target.value || '0').replace(/[^\d]/g, ''));
                        handleChange('vesselPrice', Number.isFinite(next) ? next : 0);
                      }}
                      error={showRequiredErrors && requiredErrors.vesselPrice}
                      helperText={showRequiredErrors && requiredErrors.vesselPrice ? 'Purchase Price is required.' : undefined}
                      sx={purchasePriceFieldSx}
                      inputProps={{
                        inputMode: 'numeric',
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Box
                              component="span"
                              aria-hidden
                              sx={{
                                display: 'block',
                                fontFamily: 'var(--font-figtree), sans-serif',
                                fontWeight: 400,
                                fontSize: 16,
                                lineHeight: '24px',
                                color: '#2f2f39',
                              }}
                            >
                              $
                            </Box>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>
                  <Box ref={vesselLengthFieldRef} sx={{ flex: 1 }}>
                    <Typography sx={{ ...labelSx, mb: 2 }}>Vessel Length (ft) *</Typography>
                    <TextField
                      fullWidth
                      type="text"
                      required
                      value={form.vesselLength ? String(form.vesselLength) : ''}
                      onChange={(e) => {
                        const next = Number((e.target.value || '0').replace(/[^\d]/g, ''));
                        const sanitized = Number.isFinite(next) ? next : 0;
                        handleChange('vesselLength', Math.min(sanitized, MAX_VESSEL_LENGTH_FT));
                      }}
                      error={showRequiredErrors && requiredErrors.vesselLength}
                      helperText={
                        showRequiredErrors && requiredErrors.vesselLength
                          ? vesselLengthOutOfRange
                            ? `Maximum vessel length is ${MAX_VESSEL_LENGTH_FT} ft.`
                            : 'Vessel Length is required.'
                          : undefined
                      }
                      inputProps={{
                        inputMode: 'numeric',
                      }}
                      sx={fieldSx}
                    />
                  </Box>
                </Stack>

                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  spacing={{ xs: 2, md: 2.5 }}
                  sx={{ mb: { xs: 2, md: 2.5 }, pb: { md: 0.5 } }}
                >
                  <Box ref={engineTypeFieldRef} sx={{ flex: 1 }}>
                    <Typography sx={{ ...labelSx, mb: 2 }}>Engine Type *</Typography>
                    <TextField
                      fullWidth
                      select
                      required
                      value={form.engineType}
                      onChange={(e) => {
                        const next = e.target.value as EngineType;
                        handleChange('engineType', next);
                        const nextMax = engineCountMap[next][engineCountMap[next].length - 1];
                        if (form.engineCount > nextMax) handleChange('engineCount', nextMax);
                      }}
                      SelectProps={{
                        IconComponent: KeyboardArrowDownRounded,
                      }}
                      error={showRequiredErrors && requiredErrors.engineType}
                      helperText={showRequiredErrors && requiredErrors.engineType ? 'Engine Type is required.' : undefined}
                      sx={fieldSx}
                    >
                      <MenuItem value="inboard">Inboard</MenuItem>
                      <MenuItem value="outboard">Outboard</MenuItem>
                    </TextField>
                  </Box>
                  <Box ref={engineCountFieldRef} sx={{ flex: 1 }}>
                    <Typography sx={{ ...labelSx, mb: 2 }}>Engine Count *</Typography>
                    <Box
                      sx={{
                        position: 'relative',
                        height: 44,
                        border: `1px solid ${showRequiredErrors && requiredErrors.engineCount ? '#d32f2f' : colors.border}`,
                        borderRadius: '2px',
                        bgcolor: '#fff',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          height: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          px: 2,
                          pr: '112px',
                          fontFamily: 'var(--font-figtree), sans-serif',
                          fontWeight: 400,
                          fontSize: 16,
                          lineHeight: '24px',
                          color: '#22222d',
                        }}
                      >
                        {form.engineCount}
                      </Box>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          right: 0,
                          height: '100%',
                          display: 'flex',
                          bgcolor: '#fff',
                        }}
                      >
                        <Box
                          component="button"
                          type="button"
                          aria-label="Decrease engine count"
                          aria-disabled={!canDecreaseEngineCount}
                          onClick={() => {
                            if (!canDecreaseEngineCount) return;
                            handleChange('engineCount', form.engineCount - 1);
                          }}
                          sx={{
                            width: 52,
                            minWidth: 52,
                            border: 0,
                            borderLeft: `1px solid ${colors.border}`,
                            m: 0,
                            p: 0,
                            bgcolor: '#fff',
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            display: 'grid',
                            placeItems: 'center',
                            cursor: canDecreaseEngineCount ? 'pointer' : 'not-allowed',
                          }}
                        >
                          <Box
                            component="img"
                            src={assetSrc('/minus_outline.svg')}
                            alt=""
                            aria-hidden
                            sx={{
                              width: 20,
                              height: 20,
                              display: 'block',
                              opacity: canDecreaseEngineCount ? 0.6 : 0.3,
                            }}
                          />
                        </Box>
                        <Box
                          component="button"
                          type="button"
                          aria-label="Increase engine count"
                          aria-disabled={!canIncreaseEngineCount}
                          onClick={() => {
                            if (!canIncreaseEngineCount) return;
                            handleChange('engineCount', form.engineCount + 1);
                          }}
                          sx={{
                            width: 44,
                            minWidth: 44,
                            border: 0,
                            borderLeft: `1px solid ${colors.border}`,
                            m: 0,
                            p: 0,
                            bgcolor: '#fff',
                            appearance: 'none',
                            WebkitAppearance: 'none',
                            display: 'grid',
                            placeItems: 'center',
                            cursor: canIncreaseEngineCount ? 'pointer' : 'not-allowed',
                          }}
                        >
                          <Box
                            component="img"
                            src={assetSrc('/plus_outline.svg')}
                            alt=""
                            aria-hidden
                            sx={{
                              width: 20,
                              height: 20,
                              display: 'block',
                              opacity: canIncreaseEngineCount ? 1 : 0.3,
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                    {showRequiredErrors && requiredErrors.engineCount && (
                      <Typography
                        sx={{
                          mt: 1,
                          fontFamily: 'var(--font-figtree), sans-serif',
                          fontWeight: 500,
                          fontSize: 13,
                          lineHeight: '20px',
                          color: '#d32f2f',
                        }}
                      >
                        Engine Count is required.
                      </Typography>
                    )}
                  </Box>
                </Stack>

                <Box
                  sx={{
                    backgroundColor: 'rgba(112,128,144,0.04)',
                    borderRadius: '4px',
                    minHeight: 56,
                    p: 2,
                    mb: { xs: 2, md: 3 },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-figtree), sans-serif',
                      fontWeight: 500,
                      fontSize: 16,
                      lineHeight: '24px',
                      color: '#22222d',
                    }}
                  >
                    Generator On Board
                  </Typography>
                  <Switch
                    checked={form.hasGenerator}
                    onChange={(e) => handleChange('hasGenerator', e.target.checked)}
                    sx={switchSx}
                  />
                </Box>

                <Box ref={locationDockageFieldRef}>
                  <Typography sx={{ ...labelSx, mb: 2 }}>Location Dockage *</Typography>
                  <TextField
                    fullWidth
                    select
                    required
                    value={form.location}
                    onChange={(e) => handleChange('location', e.target.value as LocationKey)}
                    error={showRequiredErrors && requiredErrors.location}
                    helperText={
                      showRequiredErrors && requiredErrors.location ? (
                        'Location Dockage is required.'
                      ) : (
                        <React.Fragment>
                          <InfoOutlined sx={{ fontSize: 16, color: colors.textTertiary }} />
                          {locationInfoText}
                        </React.Fragment>
                      )
                    }
                    SelectProps={{
                      IconComponent: KeyboardArrowDownRounded,
                    }}
                    sx={fieldSx}
                  >
                    <MenuItem value="miami">Miami / S. Florida</MenuItem>
                    <MenuItem value="other_us">Other U.S. Region</MenuItem>
                    <MenuItem value="private_dock">Private Dock</MenuItem>
                  </TextField>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <Card sx={sectionCardSx}>
            <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 4 } }}>
              <Stack spacing={{ xs: 2.5, sm: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-poppins), sans-serif',
                      fontSize: 20,
                      lineHeight: '28px',
                      fontWeight: 500,
                      color: '#22222d',
                    }}
                  >
                    Fine-Tune Costs
                  </Typography>
                  <Typography sx={{ ...labelSx, color: colors.textTertiary }}>
                    Expert defaults are pre-loaded. Adjust as needed.
                  </Typography>
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', flexWrap: 'wrap', rowGap: 1, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography sx={labelSx}>Bottom Paint (per foot)</Typography>
                      <InfoOutlined sx={{ color: colors.textTertiary, fontSize: 20 }} />
                    </Box>
                    <Typography sx={{ ...labelSx, fontWeight: 600 }}>${form.bottomPaintRate}</Typography>
                  </Box>
                  <Slider
                    min={65}
                    max={150}
                    step={5}
                    value={form.bottomPaintRate}
                    onChange={(_, value) => handleChange('bottomPaintRate', Number(value))}
                    sx={sliderSx}
                  />
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', flexWrap: 'wrap', rowGap: 1, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography sx={labelSx}>Insurance</Typography>
                      <InfoOutlined sx={{ color: colors.textTertiary, fontSize: 20 }} />
                    </Box>
                    <Typography sx={{ ...labelSx, fontWeight: 600 }}>
                      {form.insuranceRate % 1 === 0 ? form.insuranceRate.toFixed(0) : form.insuranceRate.toFixed(1)}%
                      {' '}of vessel price
                    </Typography>
                  </Box>
                  <Slider
                    min={1}
                    max={4}
                    step={0.1}
                    value={form.insuranceRate}
                    onChange={(_, value) => handleChange('insuranceRate', Number(value))}
                    sx={sliderSx}
                  />
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, flexWrap: 'wrap', rowGap: 0.5 }}>
                    <Typography sx={labelSx}>Engine Service ({form.engineCount}x {form.engineType})</Typography>
                    <Typography sx={{ ...labelSx, fontWeight: 600 }}>
                      {money(ENGINE_SERVICE_RATES[form.engineType])}/engine/yr
                    </Typography>
                  </Box>
                  <Typography sx={{ mt: 0.5, color: colors.textBody, fontSize: 14, lineHeight: '20px' }}>
                    Auto-calculated from your selection
                  </Typography>
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, flexWrap: 'wrap', rowGap: 0.5 }}>
                    <Typography sx={labelSx}>Generator Service</Typography>
                    <Typography sx={{ ...labelSx, fontWeight: 600 }}>{money(breakdown.generator_service ?? 0)}</Typography>
                  </Box>
                  <Typography sx={{ mt: 0.5, color: colors.textBody, fontSize: 14, lineHeight: '20px' }}>
                    Auto-calculated from your selection
                  </Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          <Card sx={sectionCardSx}>
            <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 4 } }}>
              <Stack spacing={{ xs: 2.5, sm: 3 }}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-poppins), sans-serif',
                      fontSize: 20,
                      lineHeight: '28px',
                      fontWeight: 500,
                      color: '#22222d',
                    }}
                  >
                    Staffing &amp; Crew
                  </Typography>
                  <Typography sx={{ ...labelSx, color: colors.textTertiary }}>
                    Toggle crew members to add fixed annual salary costs
                  </Typography>
                </Box>

                <Stack spacing={1}>
                  {(Object.keys(CREW_RATES) as Array<keyof typeof CREW_RATES>).map((role) => (
                    <Box
                      key={role}
                      sx={{
                        bgcolor: colors.crewBg,
                        borderRadius: 1,
                        px: 1,
                        py: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                      }}
                      onClick={() => handleCrewToggle(role)}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Checkbox
                          checked={form.crew[role]}
                          onChange={(e) => handleCrewChecked(role, e.target.checked)}
                          onClick={(e) => e.stopPropagation()}
                          inputProps={{ 'aria-label': `Toggle ${role}` }}
                          sx={{
                            p: 0,
                            mr: 0.5,
                          }}
                        />
                        <Typography sx={labelSx}>{role.charAt(0).toUpperCase() + role.slice(1)}</Typography>
                      </Box>
                      <Typography sx={{ ...labelSx, fontWeight: 600 }}>{money(CREW_RATES[role])}/yr</Typography>
                    </Box>
                  ))}
                </Stack>
              </Stack>
            </CardContent>
          </Card>

          <Card sx={{ ...breakdownCardSx, minHeight: { xs: 'auto', md: 424 } }}>
            <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 4 }, position: 'relative', height: '100%' }}>
              <Stack spacing={{ xs: 2.5, sm: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography sx={{ ...labelSx, color: colors.textSecondary }}>
                    Total Annual Ownership Cost
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-poppins), sans-serif',
                      fontSize: { xs: 40, sm: 48, md: 56 },
                      lineHeight: { xs: '52px', sm: '64px', md: '84px' },
                      fontWeight: 600,
                      letterSpacing: 0,
                      color: '#5111ab',
                    }}
                  >
                    {totalDisplay}
                  </Typography>
                  <Typography sx={{ ...labelSx, color: colors.textSecondary }}>
                    {monthlyDisplay}
                  </Typography>
                </Box>

                <Stack spacing={1.5}>
                  {breakdownRows.map((item, index) => (
                    <Box key={`${item.label}-${index}`}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          px: 0,
                        }}
                      >
                        <Typography sx={labelSx}>{item.label}</Typography>
                        <Typography sx={{ ...labelSx, fontWeight: 700 }}>
                          {isBreakdownUnlocked ? money(item.value) : '$...'}
                        </Typography>
                      </Box>
                      {index < breakdownRows.length - 1 && (
                        <Box sx={{ borderTop: '1px dashed #d9d9dd', mt: 1.5 }} />
                      )}
                    </Box>
                  ))}
                </Stack>

                <Box
                  sx={{
                    borderLeft: '3px solid #f4b000',
                    pl: 2,
                    py: 0.5,
                    mt: 1,
                  }}
                >
                  <Typography
                    sx={{
                      ...labelSx,
                      fontSize: 20,
                      lineHeight: '28px',
                      mb: 1,
                    }}
                  >
                    Fuel Costs (Not Included)
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-figtree), sans-serif',
                      fontWeight: 400,
                      fontSize: 16,
                      lineHeight: '24px',
                      color: colors.textBody,
                    }}
                  >
                    Fuel costs vary by boat. Average: 40 gal/hr × $4/gal × 100 hrs/year = ~$16,000/year for a
                    typical day boat with IPS. Performance boats may consume more. Add based on your expected usage.
                  </Typography>
                </Box>
              </Stack>

              {!isBreakdownUnlocked && (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '4px',
                    bgcolor: 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(5px)',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: { xs: 2.5, sm: 3, md: 4 },
                  }}
                >
                  <Stack spacing={2.5} sx={{ width: '100%', maxWidth: '419.252px', alignItems: 'center' }}>
                    <Stack spacing={1.5} sx={{ width: '100%', alignItems: 'center' }}>
                      <Box
                        component="img"
                        src={assetSrc('/lock-close_solid.svg')}
                        alt="Locked"
                        sx={{
                          width: 48,
                          height: 48,
                          display: 'block',
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: 'var(--font-poppins), sans-serif',
                          fontSize: { xs: 18, md: 20 },
                          lineHeight: { xs: '24px', md: '28px' },
                          fontWeight: 500,
                          color: '#22222d',
                          textAlign: 'center',
                        }}
                      >
                        Your full 2026 South Florida
                        <br />
                        cost analysis is ready
                      </Typography>
                      <Typography sx={{ ...labelSx, color: colors.textTertiary, textAlign: 'center' }}>
                        Enter your email to reveal the complete breakdown.
                      </Typography>
                    </Stack>
                    <Box sx={{ width: '100%' }}>
                      <TextField
                        fullWidth
                        type="email"
                        value={unlockEmail}
                        onChange={(e) => {
                          setUnlockEmail(e.target.value);
                          if (unlockEmailError) setUnlockEmailError('');
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleUnlockBreakdown();
                        }}
                        placeholder="Email address"
                        error={Boolean(unlockEmailError)}
                        helperText={unlockEmailError || ' '}
                        sx={fieldSx}
                      />
                    </Box>

                    <Box
                      component="button"
                      type="button"
                      onClick={handleUnlockBreakdown}
                      sx={{
                        height: 56,
                        width: { xs: '100%', sm: 252 },
                        px: 3,
                        borderRadius: '4px',
                        border: '1px solid rgba(255,255,255,0.2)',
                        bgcolor: '#4b0ea3',
                        color: '#fff',
                        fontFamily: 'var(--font-figtree), sans-serif',
                        fontSize: 20,
                        lineHeight: '28px',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                        cursor: 'pointer',
                        '&:hover': {
                          bgcolor: '#5111ab',
                        },
                      }}
                    >
                      Unlock Full Breakdown
                    </Box>
                  </Stack>
                </Box>
              )}
            </CardContent>
          </Card>

        </Stack>
      </Box>
    </Box>
  );
}

export default App;
