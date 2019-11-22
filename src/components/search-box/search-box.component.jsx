import React from 'react'
import InputBase from "@material-ui/core/InputBase";
import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';

import './search-box.styles.css'

export const SearchField = ({ placeholder, handleChange }) => (
	
		<form className='search' noValidate autoComplete="off">
			
			<InputBase
				onChange={handleChange}
				placeholder={placeholder}
				inputProps={{ 'aria-label': 'Procure por um filme' }}
			/>
			<IconButton type="submit" aria-label="search">
				<SearchIcon />
			</IconButton>
		</form>
)

