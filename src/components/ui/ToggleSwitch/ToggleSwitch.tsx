import { FC, ReactNode } from "react";

interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
  iconOn: ReactNode;
  iconOff: ReactNode;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({
  isOn,
  onToggle,
  iconOn,
  iconOff,
}) => {
  return (
    <button
      onClick={onToggle}
      className={`relative inline-flex items-center justify-start w-14 h-8 p-1 rounded-full transition-colors duration-300 ease-in-out
                  ${isOn ? "bg-gray-800" : "bg-gray-200"}`}
    >
      <span
        className={`transform transition-transform duration-300 ease-in-out flex items-center justify-center h-6 w-6 rounded-full bg-white shadow-sm
                    ${isOn ? "translate-x-6" : "translate-x-0"}`}
      >
        {isOn ? iconOn : iconOff}
      </span>
    </button>
  );
};

export default ToggleSwitch;
