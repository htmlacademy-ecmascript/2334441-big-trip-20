import { createWaypoint } from '../mock/waypoints.js';
import {createDestination} from '../mock/destination.js';
import {createOffer} from '../mock/offer.js';
import {getRandomArrayElement, getRandomInteger} from '../utils.js';
import { TYPES_OF_WAYPOINT } from '../const.js';


export default class createWaypointList {

  constructor(){
    this.offers = this.generateOffers();
    this.destinations = this.generateDestinations();
    this.points = this.generatePoints();
  }

  getOffers(){
    return this.offers;
  }

  getDestinations(){
    return this.destinations;
  }

  getPoints(){
    return this.points;
  }

  generateDestinations(){
    return Array.from({length: getRandomInteger(1,TYPES_OF_WAYPOINT.length)}, createDestination);
  }

  generateOffers(){
    return TYPES_OF_WAYPOINT.map((type)=>({
      type,
      offers: Array.from({length: getRandomInteger(1,TYPES_OF_WAYPOINT.length)},() => createOffer(type))
    }
    ));
  }

  generatePoints(){
    return Array.from({length: getRandomInteger(1, TYPES_OF_WAYPOINT.length)}, () => {
      const type = getRandomArrayElement(TYPES_OF_WAYPOINT);
      const offerElement = this.offers.find((offerType) => offerType.type === type);
      const destinationId = getRandomArrayElement(this.destinations).id;
      const offerId = offerElement.offers.map(({id})=> id);
      return createWaypoint(type, destinationId, offerId);
    }
    );
  }
}
