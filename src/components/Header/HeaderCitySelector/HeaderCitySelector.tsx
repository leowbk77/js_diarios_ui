import styles from './HeaderCitySelector.module.css';

const HeaderCitySelector = () => {
    return(
        <div className={styles.HeaderCitySelector}>
            <select name="cidades" id="cidades">
                <option value="udi">Uberlândia</option>
                <option value="monte">Monte Carmelo</option>
            </select>
        </div>
    );
};

export default HeaderCitySelector;