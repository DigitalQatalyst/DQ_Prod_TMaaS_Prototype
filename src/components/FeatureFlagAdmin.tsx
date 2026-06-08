import { useState } from 'react';
import { featureFlags, getEnabledPages, type FeatureFlags } from '@/lib/featureFlags';
import { Settings, ToggleLeft, ToggleRight, RefreshCw, EyeOff } from 'lucide-react';

export function FeatureFlagAdmin() {
  const [isOpen, setIsOpen] = useState(false);
  const [flags, setFlags] = useState<FeatureFlags>(featureFlags.getFlags());

  const toggleFlag = (flag: keyof FeatureFlags) => {
    featureFlags.setFlags({ [flag]: !flags[flag] });
    setFlags(featureFlags.getFlags());
  };

  const resetToDefaults = () => {
    featureFlags.resetToDefaults();
    setFlags(featureFlags.getFlags());
    window.location.reload();
  };

  const enableMvpOnly = () => {
    featureFlags.resetToDefaults();
    setFlags(featureFlags.getFlags());
    window.location.reload();
  };

  const enableAll = () => {
    const allFlags = Object.keys(flags).reduce((acc, key) => {
      acc[key as keyof FeatureFlags] = true;
      return acc;
    }, {} as Partial<FeatureFlags>);
    featureFlags.setFlags(allFlags);
    setFlags(featureFlags.getFlags());
    window.location.reload();
  };

  if (process.env.NODE_ENV !== 'development' && window.location.hostname !== 'localhost') {
    return null;
  }

  const groupedFlags = {
    'MVP Pages': ['homepage', 'marketplace', 'serviceDetail', 'contactUs'],
    'Additional Pages': ['explore', 'alternateLanding', 'legal'],
    Features: [
      'cart',
      'chatAssistant',
      'auth',
      'onboarding',
      'dashboard',
      'butlerDemo',
      'contextSwitcher',
    ],
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full bg-purple-600 p-3 text-white shadow-lg transition-colors hover:bg-purple-700"
        title="Feature Flag Admin"
      >
        <Settings size={20} />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 max-h-[80vh] w-96 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
          <div className="bg-purple-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Feature Flags</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-purple-200 hover:text-white"
              >
                <EyeOff size={16} />
              </button>
            </div>
            <p className="mt-1 text-xs text-purple-200">Development Tool</p>
          </div>

          <div className="max-h-[60vh] space-y-4 overflow-y-auto p-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={enableMvpOnly}
                className="rounded bg-green-100 px-3 py-1 text-xs text-green-700 transition-colors hover:bg-green-200"
              >
                MVP Only
              </button>
              <button
                onClick={enableAll}
                className="rounded bg-blue-100 px-3 py-1 text-xs text-blue-700 transition-colors hover:bg-blue-200"
              >
                Enable All
              </button>
              <button
                onClick={resetToDefaults}
                className="flex items-center gap-1 rounded bg-gray-100 px-3 py-1 text-xs text-gray-700 transition-colors hover:bg-gray-200"
              >
                <RefreshCw size={12} />
                Reset
              </button>
            </div>

            {Object.entries(groupedFlags).map(([group, flagList]) => (
              <div key={group}>
                <h4 className="mb-2 text-sm font-semibold text-gray-700">{group}</h4>
                <div className="space-y-1">
                  {flagList.map((flag) => (
                    <div
                      key={flag}
                      className="flex items-center justify-between rounded bg-gray-50 p-2"
                    >
                      <span className="text-sm">{flag}</span>
                      <button
                        onClick={() => toggleFlag(flag as keyof FeatureFlags)}
                        className={`transition-colors ${flags[flag as keyof FeatureFlags] ? 'text-green-600' : 'text-gray-400'}`}
                      >
                        {flags[flag as keyof FeatureFlags] ? (
                          <ToggleRight size={20} />
                        ) : (
                          <ToggleLeft size={20} />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="border-t border-gray-200 pt-4">
              <div className="text-xs text-gray-600">
                <p>Enabled pages: {getEnabledPages().length}</p>
                <p>Enabled: {getEnabledPages().join(', ') || 'none'}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
