import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery, useGetArtistRelatedQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
    const { id: artistId } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data: artistData, isFetching: isFetchingArtistDetails} = useGetArtistDetailsQuery(artistId);
    const { data, isFetching: isFetchingRelatedArtist, error } = useGetArtistRelatedQuery(artistId);

    if (isFetchingArtistDetails || isFetchingRelatedArtist) {
        return <Loader title="Searching artist details..<3" />;
    }

    if (error) { 
        return <Error />;
    }

    const topSongs = data?.data || [];

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId={artistId} artistData={artistData} />
            <RelatedSongs
                /*data={Object.values(artistData?.songs)}*/
                data={topSongs}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
            />
        </div>
    );
};

export default ArtistDetails;