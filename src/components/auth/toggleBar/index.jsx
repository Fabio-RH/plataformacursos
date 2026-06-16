// Barra de toggle para alternar entre login e cadastro

import { useState } from 'react';
import styles from './ToggleBar.module.css'

export default function ToggleBar({ option1, option2, onToggle }) { // option1 e option2 são as opções a serem exibidas, onToggle é a função a ser chamada quando o toggle for alterado
    const [selectedOption, setSelectedOption] = useState(option1);
    
    // Função para lidar com a mudança de toggle
    const handleToggle = (option) => {
        setSelectedOption(option);
        onToggle?.(option);
    };

    return (
        <div className = "styles.toggleBar">
            <button
            
                className={`styles.toggleButton ${selectedOption === option1 ? 'active' : ''}`}
                onClick={() => handleToggle(option1)}
            >
                {option1}
            </button>
            <button
                className={`styles.toggleButton ${selectedOption === option2 ? 'active' : ''}`}
                onClick={() => handleToggle(option2)}
            >
                {option2}
            </button>
        </div>
    )
}