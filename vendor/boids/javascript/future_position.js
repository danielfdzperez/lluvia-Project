function FuturePosition(object){
    var acc        = new Coordinate(object.geo_data.velocity.get_coord(1), object.geo_data.velocity.get_coord(0))
    var actual_pos = new Coordinate(object.geo_data.position.get_coord(1), object.geo_data.position.get_coord(0))
    var future_pos = new Coordinate((actual_pos.y + acc.y).toFixed(0), (actual_pos.x + acc.x).toFixed(0))
    return future_pos
}
