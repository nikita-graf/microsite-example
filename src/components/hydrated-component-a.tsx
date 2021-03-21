import { FunctionalComponent } from 'preact';
import { useEffect } from 'preact/hooks';
import { withHydrate } from 'microsite/hydrate';

export const HydratedComponentInternalA: FunctionalComponent = () => {
  useEffect(() => {
    alert('Hydrated component A');
  }, []);
  return <div>Hydrated component A</div>;
};

export const HydratedComponentA = withHydrate(HydratedComponentInternalA, { method: 'idle' });
