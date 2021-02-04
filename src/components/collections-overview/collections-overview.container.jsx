import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import CollectionsOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const GET_COLLECTIONS = gql`
    {
        collections {
            id
            title
            items {
                id
                name 
                price
                imageUrl
            }
        }
    }
`;

const CollectionsOverviewContainer = () => (
    <Query query={GET_COLLECTIONS}>
        {
            ({ loading, error, data }) => {
                if(loading) return <Spinner />;
                if(error){
                    console.log(error);
                    return <div>Error Loading Data!</div>;
                }
                return <CollectionsOverview collections={data.collections} />;
            }
        }
    </Query>
)

export default CollectionsOverviewContainer;