import PropTypes from 'prop-types'
import s from './Filter.module.css'

const Filter = ({filter, changeFilter}) => (
    <label className={s.label}>
        <span>Find contacts by name </span>
        <input 
            className={s.input} 
            type="text" 
            value={filter} 
            onChange={changeFilter} 
        />
    </label>
);

Filter.propTypes={
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired
}

export default Filter