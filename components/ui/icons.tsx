import React from 'react';

interface IconProps {
  className?: string;
  size?: 'small' | 'base' | 'large' | 'xl';
}

const getIconSize = (size: IconProps['size'] = 'base') => {
  switch (size) {
    case 'small': return 'icon-small';
    case 'large': return 'icon-large';
    case 'xl': return 'icon-xl';
    default: return 'icon-base';
  }
};

// Basic Icons
export const SearchIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

export const LoginIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10,17 15,12 10,7" />
    <line x1="15" y1="12" x2="3" y2="12" />
  </svg>
);

export const PencilIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    <path d="m15 5 4 4" />
  </svg>
);

export const CalendarIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

// Arrow Icons
export const ArrowUpIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="m18 15-6-6-6 6" />
  </svg>
);

export const ArrowDownIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// Chevron Icons
export const ChevronUpIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="m18 15-6-6-6 6" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronLeftIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// Basic Action Icons
export const CheckIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const XIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const PlusIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

export const MinusIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M5 12h14" />
  </svg>
);

// Communication Icons
export const MailIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-10 5L2 7" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const MessageIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const BellIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

// File & Document Icons
export const FileIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>
);

export const FolderIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
  </svg>
);

export const BookIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </svg>
);

export const DownloadIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const UploadIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17,8 12,3 7,8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

// Media Icons
export const ImageIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
);

export const VideoIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <polygon points="23,7 16,12 23,17" />
    <rect width="14" height="14" x="1" y="5" rx="2" ry="2" />
  </svg>
);

export const MusicIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

export const CameraIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

// Technology Icons
export const ComputerIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <rect width="14" height="8" x="5" y="2" rx="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" />
    <path d="M6 18h2" />
    <path d="M12 18h6" />
  </svg>
);

export const SmartphoneIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

export const WifiIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9z" />
    <path d="M5 13l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.24 9.24 8.76 9.24 5 13z" />
    <path d="M9 17l2 2c.87-.87 2.13-.87 3 0l2-2c-1.73-1.73-4.27-1.73-6 0z" />
    <circle cx="12" cy="21" r="1" />
  </svg>
);

export const BluetoothIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M6.5 6.5 18 18l-5 5V2l5 5L6.5 17.5" />
  </svg>
);

// Business Icons
export const BriefcaseIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

export const DollarIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export const CreditCardIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);

export const ShoppingCartIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

// Location Icons
export const MapPinIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

export const NavigationIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <polygon points="3,11 22,2 13,21 11,13 3,11" />
  </svg>
);

// Weather Icons
export const SunIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M6.34 17.66l-1.41 1.41" />
    <path d="M19.07 4.93l-1.41 1.41" />
  </svg>
);

export const CloudIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

export const RainIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    <path d="M16 14v6" />
    <path d="M8 14v6" />
    <path d="M12 16v6" />
  </svg>
);

// User Icons
export const UserIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const HeartIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

// Settings Icons
export const SettingsIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const LockIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export const UnlockIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
  </svg>
);

// Time Icons
export const ClockIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

export const AlarmIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <circle cx="12" cy="13" r="8" />
    <path d="M5 3 2 6" />
    <path d="M22 6l-3-3" />
    <path d="M6.38 18.7 4 21" />
    <path d="M17.64 18.67 20 21" />
    <path d="M9 13h6" />
  </svg>
);

// Social Media Icons
export const ShareIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

export const TwitterIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// Theme Icons
export const MoonIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

// Loading Icons
export const LoaderIcon: React.FC<IconProps> = ({ className = '', size }) => (
  <svg className={`${getIconSize(size)} ${className}`} viewBox="0 0 24 24">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

// Icon collection for easy access
export const Icons = {
  // Basic
  Search: SearchIcon,
  Login: LoginIcon,
  Pencil: PencilIcon,
  Calendar: CalendarIcon,
  Check: CheckIcon,
  X: XIcon,
  Menu: MenuIcon,
  Plus: PlusIcon,
  Minus: MinusIcon,
  
  // Arrows
  ArrowUp: ArrowUpIcon,
  ArrowDown: ArrowDownIcon,
  ArrowLeft: ArrowLeftIcon,
  ArrowRight: ArrowRightIcon,
  ChevronUp: ChevronUpIcon,
  ChevronDown: ChevronDownIcon,
  ChevronLeft: ChevronLeftIcon,
  ChevronRight: ChevronRightIcon,
  
  // Communication
  Mail: MailIcon,
  Phone: PhoneIcon,
  Message: MessageIcon,
  Bell: BellIcon,
  
  // Files
  File: FileIcon,
  Folder: FolderIcon,
  Book: BookIcon,
  Download: DownloadIcon,
  Upload: UploadIcon,
  
  // Media
  Image: ImageIcon,
  Video: VideoIcon,
  Music: MusicIcon,
  Camera: CameraIcon,
  
  // Technology
  Computer: ComputerIcon,
  Smartphone: SmartphoneIcon,
  Wifi: WifiIcon,
  Bluetooth: BluetoothIcon,
  
  // Business
  Briefcase: BriefcaseIcon,
  Dollar: DollarIcon,
  CreditCard: CreditCardIcon,
  ShoppingCart: ShoppingCartIcon,
  
  // Location
  MapPin: MapPinIcon,
  Globe: GlobeIcon,
  Navigation: NavigationIcon,
  
  // Weather
  Sun: SunIcon,
  Moon: MoonIcon,
  Cloud: CloudIcon,
  Rain: RainIcon,
  
  // User
  User: UserIcon,
  Users: UsersIcon,
  Heart: HeartIcon,
  
  // Settings
  Settings: SettingsIcon,
  Lock: LockIcon,
  Unlock: UnlockIcon,
  
  // Time
  Clock: ClockIcon,
  Alarm: AlarmIcon,
  
  // Social Media
  Share: ShareIcon,
  Twitter: TwitterIcon,
  Linkedin: LinkedinIcon,
  
  // Loading
  Loader: LoaderIcon,
};

export default Icons;