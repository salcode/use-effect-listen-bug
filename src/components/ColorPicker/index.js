import PropTypes from 'prop-types';

const colors = [
  'blue',
  'white',
  'green',
  'red',
];

export default function ColorPicker({
  selectedColor,
  setColor,
}) {
  return (
    <select
      onChange={
        (event) => setColor(event.target.value)
      }
      value={selectedColor}
    >
      {
        colors.map(
          (color) => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          )
        )
      }
    </select>
  );
}

ColorPicker.propTypes = {
  selectedColor: PropTypes.oneOf(colors).isRequired,
  setColor: PropTypes.func.isRequired,
}
