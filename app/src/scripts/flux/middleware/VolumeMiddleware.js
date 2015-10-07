// ZFS Pool Middleware
// ===================

"use strict";

import MC from "../../websocket/MiddlewareClient";
import MiddlewareAbstract from "./MIDDLEWARE_BASE_CLASS";
import VAC from "../actions/VolumeActionCreators";

export default class VolumeMiddleware extends MiddlewareAbstract {

  static subscribe ( componentID ) {
    MC.subscribe( [ "entity-subscriber.volumes.changed" ], componentID );
  }

  static unsubscribe ( componentID ) {
    MC.unsubscribe( [ "entity-subscriber.volumes.changed" ], componentID );
  }

  static requestVolumes () {
    MC.request( "volumes.query", [], VAC.receiveVolumes );
  }

  static requestAvailableDisks () {
    MC.request( "volumes.get_available_disks", [], VAC.receiveAvailableDisks );
  }


  // VOLUME TASKS
  static submitVolume ( volumeProps, callback ) {
    MC.submitTask( [ "volume.create", [ volumeProps ] ], callback );
  }

  static updateVolume ( volumeProps, callback ) {
    MC.submitTask( [ "volume.create", [ volumeProps ] ], callback );
  }

  static destroyVolume ( volumeName, callback ) {
    MC.submitTask( [ "volume.destroy", [ volumeName ] ], callback );
  }


  // DATASET TASKS
  static createDataset ( pool_name, path, type, params ) {
    MC.submitTask( [ "volume.dataset.create", Array.from( arguments ) ] );
  }

  static updateDataset ( pool_name, path, updated_params ) {
    MC.submitTask( [ "volume.dataset.update", Array.from( arguments ) ] );
  }

  static deleteDataset ( pool_name, path ) {
    MC.submitTask( [ "volume.dataset.delete", Array.from( arguments ) ] );
  }

};