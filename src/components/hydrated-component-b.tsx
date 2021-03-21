import { FunctionalComponent } from 'preact';
import { useEffect } from 'preact/hooks';
import { withHydrate } from 'microsite/hydrate';

export const HydratedComponentInternalB: FunctionalComponent = () => {
  useEffect(() => {
    alert('Hydrated component B');
  }, []);
  return <div>Hydrated component B</div>;
};

export default withHydrate(HydratedComponentInternalB, { method: 'idle' });
