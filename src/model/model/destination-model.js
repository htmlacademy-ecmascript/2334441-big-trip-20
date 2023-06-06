export default class DestinationsModel{
  constructor(service){
    this.service = service;
    this.destinations = this.service.getDestinations();
  }

  get(){
    return this.destinations;
  }

  getById(idDestination){
    return this.destinations.find((id)=> {
      if(idDestination === id.id){
        return id;
      }
    });
  }
}
