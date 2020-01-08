import React from 'react';
import PropTypes from 'prop-types';
import { EventBus } from '../utils';

const PlaceCard = ({ place }) => {
  const editPlace = () => {
    EventBus.emit('editPlace', place);
  };

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      editPlace();
    }
  };

  return (
    <div className="w-1/3 p-3">
      <div
        className="max-w-sm h-full rounded overflow-hidden shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none flex flex-col justify-between cursor-pointer"
        onClick={editPlace}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex="0">
        <div>
          {place.img && (
            <div className="bg-gray-200 w-full">
              <img className="w-full" src={place.img} alt="Sunset in the mountains" />
            </div>
          )}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 flex justify-between items-center">
              {place.name}
            </div>

            {place.description && <p className="text-gray-700 text-base">{place.description}</p>}
            {place.visited === 'Yes' && place.visitedDate && (
              <p className="text-gray-500 text-xs uppercase tracking-wide font-bold">
                {place.visitedDate}
              </p>
            )}
          </div>
        </div>

        <div className="px-6 py-4 flex flex-wrap items-center">
          {place.tags &&
            place.tags.length > 0 &&
            place.tags.map((tag, i) => (
              <span
                className="bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2 flex items-center"
                key={i}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="inline-block fill-current w-4 mr-1">
                  <path
                    className="heroicon-ui"
                    d="M2.59 13.41A1.98 1.98 0 0 1 2 12V7a5 5 0 0 1 5-5h4.99c.53 0 1.04.2 1.42.59l8 8a2 2 0 0 1 0 2.82l-8 8a2 2 0 0 1-2.82 0l-8-8zM20 12l-8-8H7a3 3 0 0 0-3 3v5l8 8 8-8zM7 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                  />
                </svg>
                <span>{tag}</span>
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

PlaceCard.propTypes = {
  place: PropTypes.object.isRequired,
};

export default PlaceCard;
