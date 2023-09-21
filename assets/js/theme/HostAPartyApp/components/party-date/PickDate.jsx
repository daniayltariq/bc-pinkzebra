import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import { getLocalStorageItem } from '../../../../local-storage-manager';
import 'react-calendar/dist/Calendar.css';

const PickDate = ({ onChange, formData }) => {
    const [value, setValue] = useState(null);
    const [formattedDate, setFormattedDate] = useState('');
    const [consultant, setConsultant] = useState(null);

    useEffect(() => {
        const fetchConsultant = async () => {
            const storedConsultant = await getLocalStorageItem('consultant');
            if (storedConsultant) {
                setConsultant(storedConsultant.value);
            }
        };

        fetchConsultant();
        deactivateCalendarLabels();

        const { date } = formData;
        if (date) {
            setValue(date);
            const formatted = getFormattedDate(date);
            setFormattedDate(formatted);
        }
    }, [formData]);

    const deactivateCalendarLabels = () => {
        const handleLabelClick = (event) => {
            event.stopPropagation();
        };

        const buttons = document.querySelectorAll('.react-calendar__navigation__label');
        buttons.forEach((button) => {
            button.addEventListener('click', handleLabelClick);
        });

        return () => {
            buttons.forEach((button) => {
                button.removeEventListener('click', handleLabelClick);
            });
        };
    };

    const onDateSelected = (newDate) => {
        const formatted = getFormattedDate(newDate);
        setFormattedDate(formatted);
        setValue(newDate);
        onChange({ date: newDate });
    };

    const isDateDisabled = (data) => {
        if (!consultant) return true;

        const { date } = data;
        const utcDate = new Date(date);
        utcDate.setUTCHours(0, 0, 0, 0);

        const formattedDate = `${utcDate.getUTCMonth() + 1}-${utcDate.getUTCDate()}-${utcDate.getUTCFullYear().toString().slice(-2)}`;
        const { available_dates } = consultant;

        return !available_dates.includes(formattedDate);
    };

    const getFormattedDate = (newDate) => {
        const date = new Date(newDate);
        const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
        return date.toLocaleDateString('en-US', options).toUpperCase();
    };

    const getMinDate = () => {
        const { type } = formData;
        let minDate = new Date();

        if (type !== 'traditional') {
            const MIN_DATE_FROM = 14;
            minDate.setDate(minDate.getDate() + MIN_DATE_FROM);
        }

        return minDate;
    };

    return (
        <div className="calendar">
            <Calendar
                onChange={onDateSelected}
                value={value}
                className="pick-a-date"
                tileDisabled={isDateDisabled}
                minDate={getMinDate()}
            />
            <p className="selected-date">{formattedDate}</p>
        </div>
    );
};

export default PickDate;
