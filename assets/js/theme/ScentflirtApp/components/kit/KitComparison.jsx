import React from 'react';
import { useAppContext } from '@shared/context/AppContext';

const KitComparison = () => {
    const { scentflirt_comparison_chart } = useAppContext();

    return (
        <div className="kit-comparison">
            <div className='kit-comparison__header'>
                <span className='title'> SEE HOW THEY COMPARE! </span>
                <hr></hr>
            </div>
            <div className='kit-comparison__content'>
                <img src={window.location.origin + scentflirt_comparison_chart} alt='Comparison chart'/>
            </div>
            <div className='kit-comparison__footer'>
                <p className='see-list'>SEE FULL ITEM LISTS FOR EACH KIT TO SEE COMPLETE BREAKDOWN OF ITEMS.</p>
            </div>
        </div>
    );
};

export default KitComparison;
