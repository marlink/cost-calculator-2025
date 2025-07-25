import React from 'react';
import { Icons } from './icons';

interface ChoiceOption {
  id: string;
  title: string;
  description?: string;
  value: any;
}

interface MultipleChoiceProps {
  options: ChoiceOption[];
  selectedId?: string;
  onSelect: (option: ChoiceOption) => void;
  className?: string;
}

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  options,
  selectedId,
  onSelect,
  className = ''
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {options.map((option) => (
        <div
          key={option.id}
          className={`choice-button ${selectedId === option.id ? 'selected' : ''}`}
          onClick={() => onSelect(option)}
        >
          <div className="choice-content">
            <div className="choice-title">{option.title}</div>
            {option.description && (
              <div className="choice-description">{option.description}</div>
            )}
          </div>
          <div className="choice-tick">
            <Icons.Check />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;