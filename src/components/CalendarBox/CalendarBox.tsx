import styles from './CalendarBox.module.css';

import { useState } from 'react';
import { DayPicker } from '@daypicker/react';
import { ptBR } from '@daypicker/react/locale';
import "@daypicker/react/style.css";

const CalendarBox = () => {
    const [selected, setSelected] = useState<Date>();
    return (
        <div className={styles.CalendarBox}>
            <DayPicker
                animate
                mode="single"
                selected={selected}
                onSelect={setSelected}
                locale={ptBR}
                />
        </div>
    );
};

export default CalendarBox;
