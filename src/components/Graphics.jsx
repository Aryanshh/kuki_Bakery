import { motion } from 'framer-motion';

export function CookieGraphic({ className }) {
    return (
        <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#D2691E" /> {/* Base Cookie */}
            <circle cx="50" cy="50" r="40" fill="#CD853F" /> {/* Inner Cookie */}
            {/* Chocolate Chips */}
            <circle cx="30" cy="40" r="5" fill="#3E2723" />
            <circle cx="70" cy="30" r="6" fill="#3E2723" />
            <circle cx="50" cy="60" r="5" fill="#3E2723" />
            <circle cx="25" cy="65" r="4" fill="#3E2723" />
            <circle cx="75" cy="70" r="5" fill="#3E2723" />
            <circle cx="55" cy="25" r="4" fill="#3E2723" />
        </svg>
    );
}

export function BrownieGraphic({ className }) {
    return (
        <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="20" width="80" height="60" rx="10" fill="#5D4037" /> {/* Base Brownie */}
            <rect x="15" y="25" width="70" height="50" rx="5" fill="#4E342E" /> {/* Inner Texture */}
            {/* Walnuts / Chunks */}
            <circle cx="30" cy="35" r="4" fill="#8D6E63" />
            <circle cx="70" cy="60" r="5" fill="#8D6E63" />
            <circle cx="50" cy="50" r="4" fill="#8D6E63" />
        </svg>
    );
}
