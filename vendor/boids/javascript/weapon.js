/*Future work:
 *   Create different type of weapons
 */
Weapon.prototype = new GameElements
Weapon.prototype.constructor = Weapon

function Weapon(damage, ammo){
    this.ammo   = ammo
    this.damage = damage
}
