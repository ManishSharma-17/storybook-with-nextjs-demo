import React from "react";

interface ButtonProps {
    label: string;
    variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ label, variant = "primary" }) => {
    const base =
        "px-4 py-2 rounded-md font-semibold transition border";

    const styles = {
        primary: `${base} bg-blue-600 text-white hover:bg-blue-700`,
        secondary: `${base} bg-white text-black border-gray-300 hover:bg-gray-100`,
    };

    return <button className={styles[variant]}>{label}</button>;
};
