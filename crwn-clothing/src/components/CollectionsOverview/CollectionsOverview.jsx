import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import './CollectionsOverview.styles.scss';
import CollectionPreview from "../CollectionPreview/CollectionPreview";
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