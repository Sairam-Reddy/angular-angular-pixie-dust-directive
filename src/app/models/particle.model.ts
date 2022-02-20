/**
 * Particle Class
 */

import { Vector } from './vector.model';

export class Particle {
  private _id: string;
  private _group: string;
  private _position: Vector;
  private _velocity: Vector;
  private _size: number;
  private _life: number;
  private _behavior;

  public constructor(
    id = 'default',
    group = 'default',
    position: Vector = new Vector(),
    velocity: Vector = new Vector(),
    size = 1,
    life = 0,
    behavior = []
  ) {
    this._id = id;
    this._group = group;

    this._position = position;
    this._velocity = velocity;
    this._size = size;
    this._life = Math.round(life);

    this._behavior = behavior;
  }

  public get id() {
    return this._id;
  }

  public get group() {
    return this._group;
  }

  public get life() {
    return this._life;
  }

  public get size() {
    return this._size;
  }

  public set size(size) {
    this._size = size;
  }

  public get position() {
    return this._position;
  }

  public get velocity() {
    return this._velocity;
  }

  public update(stage) {
    this._life++;

    var i = 0;
    var l = this._behavior.length;

    for (; i < l; i++) {
      this._behavior[i].call(stage, this);
    }
  }

  public toString() {
    return (
      'Particle(' +
      this._id +
      ') ' +
      this._life +
      ' pos: ' +
      this._position +
      ' vec: ' +
      this._velocity
    );
  }
}
