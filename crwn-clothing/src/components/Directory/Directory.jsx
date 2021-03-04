import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

// Styles
import './directory.styles.scss';

// Components
import MenuItem from "../MenuItem/MenuItem";

// Selectors
import {selectDirectorySections} from "../../redux/directory/directorySelectors";

const Directory = ({sections}) => (
    <div className="directory-menu">
        {sections.map(({id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps}/>)}
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory);