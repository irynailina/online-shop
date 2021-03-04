import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

// Styles
import './CollectionsOverview.styles.scss';

// Components
import CollectionPreview from "../CollectionPreview/CollectionPreview";

// Selectors
import {selectCollectionsForPreview} from "../../redux/shop/shopSelectors";

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {collections.map(({id, ...otherCollectionProps}) =>
            <CollectionPreview key={id} {...otherCollectionProps} />)}
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview);