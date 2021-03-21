import { FunctionalComponent } from 'preact';
import { useEffect } from 'preact/hooks';
import { withHydrate } from 'microsite/hydrate';

export const HydratedComponentInternal: FunctionalComponent = () => {
  useEffect(() => {
    alert(1);
  }, []);
  return <div>Hydrated component</div>;
};

export const HydratedComponent = withHydrate(HydratedComponentInternal, { method: 'idle' });
