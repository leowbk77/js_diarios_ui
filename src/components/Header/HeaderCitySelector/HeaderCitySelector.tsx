import styles from './HeaderCitySelector.module.css';
import { useSearchStore } from '../../../stores/SearchStore';

const HeaderCitySelector = () => {
    const { cidade, setCidade } = useSearchStore();

    return(
        <div className={styles.HeaderCitySelector}>
            <select 
                name="cidades" 
                id="cidades"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)} >
                    <option value="udi">Uberlândia</option>
            </select>
        </div>
    );
};

export default HeaderCitySelector;