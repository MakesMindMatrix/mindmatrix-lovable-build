import { useEffect, useRef, useState } from 'react';

interface ChipSelectProps {
    options: string[];
}

const ChipSelect : React.FC<ChipSelectProps> = ({ options }) => {
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const containerRef = useRef(null);

  const toggleSelection = (option) => {
    let newSelected;
    if (selected.includes(option)) {
      newSelected = selected.filter(item => item !== option);
    } else {
      if (selected.length >= 3) return;
      newSelected = [...selected, option];
    }
    
    // Validate at least 1 selection
    if (newSelected.length === 0) {
      setError('At least 1 selection required');
    } else {
      setError('');
    }
    
    setSelected(newSelected);
  };

    // Detect click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="w-full max-w-md space-y-2 relative" ref={containerRef}>
      <label className="block text-base text-white">Choose options (1-3)</label>
      
      {/* Selected Chips Container */}
      {/* w-full h-10 px-3 py-2 text-base rounded-md max-md:max-w-full glass-input shadow-[0px_1px_30px_rgba(69,42,124,0.1)] hover:cursor-pointer */}
      <div 
        className="w-full rounded-md p-2 min-h-[40px] glass-input shadow-[0px_1px_30px_rgba(69,42,124,0.1)] hover:cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col gap-2">
          {selected.map(option => (
            <div key={option} className="flex items-center justify-between bg-blue-600 rounded-full px-3 py-1">
              <span className="text-sm">{option}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSelection(option);
                }}
                className="ml-2 text-white hover:text-gray-300 text-lg"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute w-full mt-1 bg-blue-200 text-gray-900 rounded-md shadow-lg z-10 max-h-60 overflow-auto">
          {options.map(option => {
            const isSelected = selected.includes(option);
            const isDisabled = !isSelected && selected.length >= 3;
            
            return (
              <div
                key={option}
                className={`px-3 py-2 cursor-pointer ${isDisabled ? 
                  'bg-blue-200 opacity-50 cursor-not-allowed' : 
                  'hover:bg-blue-700 hover:text-white'} ${isSelected ? 'bg-blue-700 text-white' : 'bg-blue-200'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isDisabled) {
                    toggleSelection(option);
                  }
                }}
              >
                <span className={`${isSelected ? 'font-semibold' : ''}`}>
                  {option}
                </span>
                {isSelected && (
                  <span className="ml-2 text-blue-200">✓</span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Validation Message */}
      {error && (
        <p className="text-red-400 text-sm mt-1">{error}</p>
      )}
      
      {/* Selection Counter */}
      <p className="text-gray-300 text-sm">
        {selected.length}/3 selected
      </p>
    </div>
  );
}

export default ChipSelect;