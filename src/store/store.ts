import { configureStore } from '@reduxjs/toolkit';
import { homeReducer } from '@/features/home/store/reducer';
import { headerReducer } from '@/features/header/store/reducer';
import { sliderReducer } from '@/features/slider/store/reducer';
import { balloonDecorReducer } from '@/features/balloonDecor/store/reducer';
import { beforeAfterSlideReducer } from '@/features/beforeAfterSlide/store/reducer';
import { experiencesReducer } from '@/features/experiences/store/reducer';
import { packagesReducer } from '@/features/packages/store/reducer';
import { whyChooseUsReducer } from '@/features/whyChooseUs/store/reducer';
import testimonialsReducer from '@/features/testimonials/store/reducer';
import { configReducer } from '@/store/config/reducer';

export const store = configureStore({
  reducer: {
    home: homeReducer,
    header: headerReducer,
    slider: sliderReducer,
    balloonDecor: balloonDecorReducer,
    beforeAfterSlide: beforeAfterSlideReducer,
    experiences: experiencesReducer,
    packages: packagesReducer,
    whyChooseUs: whyChooseUsReducer,
    testimonials: testimonialsReducer,
    config: configReducer as any,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
