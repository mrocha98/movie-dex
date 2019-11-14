import React from 'react'
import './search-box.styles.css'

export const SearchField = ({ placeholder, handleChange }) => (
	
		<div className="input-field inline">
			<i className="material-icons prefix">search</i>
			<textarea
				id="icon_prefix2"
				className="materialize-textarea"
				placeholder={placeholder}
				onChange={handleChange}
			></textarea>
		</div>
)

